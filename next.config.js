/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

