<template>
  <q-page class="find row">
    <section class="find__container" >
      <div v-html="$t('findPlayers')"></div>
      <div class="find__data">
        <div class="find__data-input">
          <q-input
            filled
            :input-style="{ height: '250px' }"
            type="textarea"
            v-model="matchData"
            :label="$t('matchData')"
            lazy-rules
            :rules="matchRules"
          />
        </div>
        <div class="find__data-example" v-html="$t('findExample')">
        </div>
      </div>
      <q-input
        filled
        class="find__contact"
        v-model="tel"
        :label="$t('capitanTel')"
        lazy-rules
        bg-color="white"
        :rules="telephoneRules"
      />
      <div class="find__toggle">
        <q-toggle
                v-model="accept"
                >
                    <router-link to="/terms"
                       class="subscribe__terms"
                       >
                    {{ $t('terms') }}
                    </router-link>
        </q-toggle>
      </div>
      <q-btn
        color="primary"
        class="btn find__send"
        :label="$t('sendMatch')"
        @click="sendMatch"
      />
    </section>

  </q-page>
</template>

<script>
// import Matches from '../components/main/Matches.vue'
export default {
  components: {
  },
  data () {
    return {
      accept: false,
      matchData: null,
      tel: null,
      telephoneRules: [
        v => !!v || this.$t('field'),
        v => (v && v.length >= 10) || this.$t('min10')
      ],
      matchRules: [
        v => !!v || this.$t('field'),
        v => (v && v.length >= 85) || this.$t('min85')
      ]
    }
  },
  methods: {
    sendMatch () {
      if (!this.tel || this.tel.length < 10) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: this.$t('min10')
        })
      } else if (!this.matchData || this.matchData.length < 85) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: this.$t('min85')
        })
      } else if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: this.$t('noTerms')
        })
      } else {
        const data = {
          matchData: this.matchData,
          tel: this.tel
        }
        this.$store.dispatch('module1/sendMatch', data)
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: this.$t('request')
        })
      }
    }
  },
  computed: {
    // myMatches () {
    //   let myMatch = localStorage.getItem('myMatch')
    //   console.log(myMatch)
    //   return myMatch
    // }
  },
  created () {
  }
}
</script>
<style lang="stylus">
  .find__container
    margin: 50px auto 0
    width: $col-11
    max-width: 700px
    p
      color: $base
      font-size: $font-size-h5
      padding-bottom: 30px
      text-align: center
    ol li
      font-size: $font-size-h5
  .find__data
    width: $col-10
    max-width: 600px
    min-height: 250px
    margin: 0 auto
    display: flex
    justify-content: center
    p
      padding: 0
      margin: 0 20px
    @media (max-width $breakpoint-xs-max)
      width: $col-12
  .q-textarea .q-field__control
    min-height: auto
  .find__data-input
    width: $col-6
    height: 250px
    min-height: 250px
  .find__data-input label
    height: 250px
    min-height: 250px

  .find__data-input .q-textarea. q-field--labeled .q-field__control-container
    min-width: 100%
    width: 100%
  .find__contact
    width: $col-10
    max-width: 300px
    margin: 20px auto
    border-bottom: 1px solid $color-main
    padding-bottom: 0
  .find__contact .q-field__inner
    min-width: 100%
  .find__send
    margin: 30px auto 100px
  .subscribe__terms
    color: $color-dark
  .find__toggle
    width: $col-6
    display: flex
    margin: auto
  .find__data
    margin-top: 30px
</style>
