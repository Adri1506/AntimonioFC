# Error Record: E002 — JWT_SECRET Missing from Environment Configuration

## Context
- **Project**: AntimonioFC
- **Component**: `backend/.env`, `backend/.env.example`
- **Discovered by**: Security Agent (OWASP Top 10:2025 Audit)
- **Date**: 2026-07-15
- **Severity**: 🟠 HIGH
- **OWASP**: A02 — Cryptographic Failures

## Problem
The `JWT_SECRET` environment variable is **not defined in either `.env` or `.env.example`**. Combined with the hardcoded fallback (E001), this means:

1. Developers and operators have **no documentation** that `JWT_SECRET` needs to be set.
2. The `.env.example` file (which serves as the setup guide) is missing this critical configuration.
3. Production deployments will silently use the hardcoded fallback unless an operator independently knows to add it.
4. The actual `.env` file used for development also lacks it, so even development runs use the weak default.

## Root Cause
- The fallback `|| 'antimoniofc-secret-key'` was added as a convenience during early development.
- As the project grew, the config was never formalized into the environment templates.
- No code review caught the missing configuration.

## Solution

1. **Add to `.env.example`** with clear instructions:
```env
# JWT Secret for token signing
# Generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
JWT_SECRET="change-me-to-a-random-64-char-hex-string"
```

2. **Add to development `.env`**:
```env
JWT_SECRET="dev-local-jwt-secret-not-for-production"
```

3. **Add startup validation** (see E001 solution) to crash early if not set.

## Key Insight
**The combination of two issues creates the vulnerability:**
- (E001) Code has a hardcoded fallback secret
- (E002) Environment config template doesn't document the variable

Either fix alone would help, but together they create a **silent vulnerability** that won't be caught until an attacker exploits it. Always:
1. Document every required env var in `.env.example` with instructions.
2. Validate all required env vars at startup with clear error messages.
3. Never use fallback defaults for security-critical configuration.

## Related Findings
- E001: Hardcoded JWT secret fallback (CRITICAL)
