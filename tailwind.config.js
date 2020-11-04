// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  corePlugins: {
    // ...
    objectPosition: true,
  }
}