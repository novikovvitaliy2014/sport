<template>
  <q-page >
    <about/>
    <matches></matches>
  </q-page>
</template>

<style lang="stylus">

</style>

<script>
import Matches from '../components/main/Matches.vue'
import About from '../components/main/About.vue'
export default {
  components: {
    'matches': Matches,
    'about': About
  }
}
</script>
<style lang="stylus">

</style>
