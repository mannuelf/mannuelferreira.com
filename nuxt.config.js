export default {
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  head: {
    titleTemplate: 'Mannuel Ferreira',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content='25AFBsBlZv3w387GNKyj0bNBhCjZxdf83TzzBi6X1po' },
      { name: 'description', content: 'Mannuel Ferreira, Software Engineer. I enjoy building and designing applications for the web. I enjoy working with web technologies such as PHP, python, Node.js, Sass (Sass syntax), JavaScript' }
    ]
  }
}