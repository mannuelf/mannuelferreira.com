<template>
    <div>
        <div class="main">
          <article>
            <h1>Hello world!</h1>

            <h2>My name is Mannuel Ferreira</h2>
            <p>Welcome to my site, I work at <a href="https://superbalist.com">Superbalist.com</a> as a Software Engineer</p>

            <p>I write on a blog here <a href="http://www.themwebs.me">www.themwebs.me</a></p>

            <h3>What I do</h3>
            <p>I enjoy building and designing applications for the web. I enjoy working with web technologies such as PHP, python, Node.js, Sass (Sass syntax), JavaScript. I enjoy learning and teaching web development and engineering concepts. I enjoy sports'ing football and squash.</p>
            <p>I recently launched a site called <a href="https://www.whatcoinwhichcoin.com">WHATcoin WHICHcoin</a>. It's a work in progress, you can view the latest bitcoin and etherium price there.</p>

          </article>
          <footer>
            <h3>Follow me</h3>
             <p>on <a href="https://github.com/mannuelf">Github</a> </p>
             <p>on <a href="https://twitter.com/manidf">twitter</a> if you like.</p>
             <p>on <a href="https://www.linkedin.com/in/mannuelferreira/">linkedin</a> if that's your thing.</p>
          </footer>
        </div>
    </div>
</template>
<style lang="sass">
@import url(https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css)
@import url('https://fonts.googleapis.com/css?family=Viga|Volkhov:400,400i')

body
  font-family: arial, sans-serif
  text-align: center
  background: #0B4F6C
  color: #FBFBFF

.main
  margin: 0 auto
  width: 90%
  @media (min-width: 768px)
    width: 50%

h1, h2, h3, h4, h5, h6
  font-family: 'Viga', sans-serif
  font-weight: 400

p
  font-family: 'Volkhov', serif
  font-size: 1em
  font-weight: 400


a
  color: #20BF55

</style>
<script>
export default {

}
</script>
