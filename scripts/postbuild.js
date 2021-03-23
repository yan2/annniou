const fs = require('fs')

// Write CNAME for custom domain.
fs.writeFileSync('dist/CNAME', 'www.annniou.com')
