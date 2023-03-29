const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
])

images.unoptimized = true
module.exports = withTM ({
  reactStrictMode: true,
  images:{
    domains:["image.tmdb.org", "rb.gy"]
  },
})
