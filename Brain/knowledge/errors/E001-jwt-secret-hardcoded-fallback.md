# Error Record: E001 — Hardcoded JWT Secret Fallback

## Context
- **Project**: AntimonioFC
- **Component**: `backend/src/utils/jwt.ts`
- **Discovered by**: Security Agent (OWASP Top 10:2025 Audit)
- **Date**: 2026-07-15
- **Severity**: 🔴 CRITICAL
- **OWASP**: A02 — Cryptographic Failures / A07 — Auth Failures

## Problem
The JWT signing secret (`JWT_SECRET`) uses a fallback to a hardcoded string `'antimoniofc-secret-key'` when the environment variable is not set:

```typescript
const JWT_SECRET = process.env.JWT_SECRET || 'antimoniofc-secret-key'
```

This means:
1. If someone deploys without setting `JWT_SECRET`, a **trivial, hardcoded secret** is used.
2. Anyone who reads the source code knows the secret and can forge valid JWT tokens.
3. This allows **complete authentication bypass** — attackers can impersonate any user, including admin.

## Root Cause
- Developer used `process.env.JWT_SECRET || 'default-fallback'` pattern for convenience during development.
- No startup validation ensures the secret is properly configured.
- `.env.example` does not include `JWT_SECRET`, so deployers won't know to set it.
- The fallback was never removed or hardened before the codebase grew.

## Solution

### Immediate Fix
1. **Remove the fallback default**:
```typescript
const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is required')
}
```

2. **Add startup validation** in `backend/src/index.ts`:
```typescript
import dotenv from 'dotenv'
dotenv.config()

if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET environment variable is not set')
  process.exit(1)
}
```

3. **Generate a strong secret** (256-bit):
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

4. **Add to `.env.example`**:
```
JWT_SECRET="change-me-to-a-random-64-char-hex-string"
```

### Long-term Hardening
- Rotate secrets periodically
- Use a secrets manager (HashiCorp Vault, AWS Secrets Manager) in production
- Implement key rotation support

## Key Insight
**Never use cryptographic secrets as fallback defaults.** A fallback for a DB connection string might be acceptable in development (pointing to a local DB). A fallback for a **signing key** is fundamentally broken because:
- The secret is in the source code → everyone with access knows it
- JWT allows offline verification → attackers don't need to interact with the server to forge tokens
- Once forged, tokens are indistinguishable from legitimate ones

**Rule**: For secrets used in cryptographic operations (JWT signing, encryption keys, API tokens), always require explicit configuration and fail at startup if not set. No fallbacks, no defaults.

## Related Findings
- E002: JWT_SECRET not in .env.example (HIGH)
- O-03: 7-day JWT expiry (MEDIUM)
- O-04: Token stored in localStorage (MEDIUM)
