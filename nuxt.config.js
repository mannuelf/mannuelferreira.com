export default {
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  head: {
    titleTemplate: 'Mannuel Ferreira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Mannuel Ferreira, Software Engineer' }
    ]
  }
}