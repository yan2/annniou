const fs = require('fs')

// Delete 'dist' directory.
if (fs.existsSync('dist')) {
  fs.rmdirSync('dist', { recursive: true })
}
