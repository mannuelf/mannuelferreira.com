<template>
  <h1>About me</h1>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AboutMe',
  computed: {
    aboutMe () {
      return this.$store.state.aboutMe
    }
  }
}
</script>
<style lang="sass">
body
  background: #eee
</style>
