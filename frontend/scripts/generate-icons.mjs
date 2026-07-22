/**
 * Generates minimal placeholder PNG icons for PWA.
 * Creates solid-color rounded rectangle icons.
 * Uses pure Node.js — no external dependencies.
 */

import { writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import zlib from 'zlib'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputDir = join(__dirname, '..', 'public', 'img', 'icons')

mkdirSync(outputDir, { recursive: true })

function createMinimalPNG(width, height, hexColor = '#000080') {
  const r = parseInt(hexColor.slice(1, 3), 16)
  const g = parseInt(hexColor.slice(3, 5), 16)
  const b = parseInt(hexColor.slice(5, 7), 16)

  // Pixel data with rounded rectangle
  const rawData = []
  for (let y = 0; y < height; y++) {
    rawData.push(0) // filter byte: None
    for (let x = 0; x < width; x++) {
      const cx = width / 2
      const cy = height / 2
      const rx = width / 2 - 4
      const ry = height / 2 - 4
      const dx = Math.abs(x - cx) / rx
      const dy = Math.abs(y - cy) / ry
      const isInside = dx * dx + dy * dy <= 1.0

      if (isInside) {
        rawData.push(r, g, b, 255)
      } else {
        rawData.push(0, 0, 0, 0)
      }
    }
  }

  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])

  // IHDR
  const ihdrData = Buffer.alloc(13)
  ihdrData.writeUInt32BE(width, 0)
  ihdrData.writeUInt32BE(height, 4)
  ihdrData[8] = 8
  ihdrData[9] = 6 // RGBA
  ihdrData[10] = 0
  ihdrData[11] = 0
  ihdrData[12] = 0
  const ihdr = createChunk('IHDR', ihdrData)

  // IDAT
  const compressed = zlib.deflateSync(Buffer.from(rawData))
  const idat = createChunk('IDAT', compressed)

  // IEND
  const iend = createChunk('IEND', Buffer.alloc(0))

  return Buffer.concat([signature, ihdr, idat, iend])
}

function createChunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length, 0)
  const typeBuffer = Buffer.from(type, 'ascii')
  const crcData = Buffer.concat([typeBuffer, data])
  const crc = crc32(crcData)
  const crcBuffer = Buffer.alloc(4)
  crcBuffer.writeUInt32BE(crc, 0)
  return Buffer.concat([length, typeBuffer, data, crcBuffer])
}

function crc32(data) {
  let crc = 0xFFFFFFFF
  for (let i = 0; i < data.length; i++) {
    crc ^= data[i]
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0)
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0
}

// Generate icons
for (const size of [192, 512]) {
  const png = createMinimalPNG(size, size, '#000080')
  writeFileSync(join(outputDir, `icon-${size}x${size}.png`), png)
  console.log(`Generated icon-${size}x${size}.png (${png.length} bytes)`)
}

console.log('Done! PWA icons generated.')
