<template>
  <div flex-center class="main row">
    <h2 v-if="!matches" class="main__container col-11">Loading</h2>
    <section class="filters">
      <h3>Выберите матч</h3>
      <q-form class="filters__container">
        <q-select
          @input="filterActiv()"
          v-for="selector in filters"
          :value="selector.value"
          :key="selector.name"
          v-model="selector.value"
          :options="unique(selector.getter)"
          :label="selector.name"
          clearable
          dark
          bg-color="transparent"
        >
          <template v-if="selector.value" v-slot:append>
            <q-icon name="cancel" @click.stop="selector.value = null" class="cursor-pointer" />
          </template>
        </q-select>
      </q-form>
    </section>
    <section>

    </section>
    <section v-if="filterActivated" class="matches">
      <h2>Открытые матчи для регистрации</h2>
      <div
               v-for="match in filteredMatches"
               :key="match.id"
               class="match__wrapper row">
        <div class="match match_id row match__container col-11">
          <div class="match__data">
            <p>{{ match.sport }}</p>
            <p>{{ match.city }}</p>
            <p>{{ match.adress }}</p>
            <p>{{ match.date }}</p>
            <p>{{ match.time }}</p>
          </div>
          <div class="row">
            <section class="match__description col-md-10 col-sm-10 col-xs-12" >
              <h3>Описание матча</h3>
              <!-- <p>Услуги сервиса InCitySport бесплатные.</p> -->
              <p>Оплата игроками за аренду зала производится администратору зала непосредственно перед матчем. Оплату равномерно рассчитывают сами игроки исходя из количества игроков и цены аренды зала. Для данного матча цена участия для одного игрока составит <strong>от 30-ти до 60-ти рублей</strong>.</p>
              <p>В каждой команде 5 игроков.</p>

            </section>
          </div>
          <section class="teams">
            <team1 :match="match" :matchIndex="match.id"/>
            <team2 :match="match" :matchIndex="match.id"/>
            <team3 :match="match" :matchIndex="match.id"/>
          </section>
          <sendMail :match="match"/>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Team1 from 'components/main/Team1.vue'
import Team2 from 'components/main/Team2.vue'
import Team3 from 'components/main/Team3.vue'
import sendMail from 'components/main/sendMail.vue'

export default {
  // props: ['match'],
  components: {
    Team1,
    Team2,
    Team3,
    sendMail
  },
  data () {
    return {
      filterActivated: false,
      email: null,
      filters: [
        { name: 'Sport', value: '', getter: obj => obj.sport },
        { name: 'City', value: '', getter: obj => obj.city },
        { name: 'Adress', value: '', getter: obj => obj.adress }
      ],
      emailRules: [
        v => !!v || 'Заполните поле',
        v => /.+@.+/.test(v) || 'Неверный формат',
        v => (v && v.length >= 8) || 'Минимальное количество символов - 8'
      ]
    }
  },
  methods: {
    filterActiv () {
      this.filterActivated = true
      // return this.filterActivated
    },
    unique (getter) {
      let matchesArray = this.matches
      return [...new Set(matchesArray.map(getter))]
      // return [...new Set(matches.map(obj => obj.city))]
    }
  },
  computed: {
    matches () {
      return this.$store.getters['module1/getMatches'].matchesUpdated
    },
    filteredMatches () {
      return this.filters.reduce((matches, { value, getter }) => {
        if (value) {
          return matches.filter(match => getter(match) === value)
        } else {
          return matches
        }
      }, this.matches)
    }
  },
  beforeCreate () {
    this.$store.dispatch('module1/getMatches')
  },
  created () {
    let now = Date.now()
    let expirationDate = localStorage.getItem('expirationDate')
    if (expirationDate !== null && now < expirationDate) {
      console.log('disable btn')
      this.$store.dispatch('module1/globalBtnsDisable')
    }
  }
}
</script>

<style lang="stylus">
  .main
    background: #fff
  .filters
    padding: 10px 0
    color: $darkgreen
    width: 100%
    background: linear-gradient(to right top, lighten($primary, 20%), lighten($primary, 60%), lighten($secondary, 60%))
    background: linear-gradient(to right bottom, $lightgreen, $green)
    background-size: cover
    @media (max-width $breakpoint-xs-max)
      background: #fff
    h3
      font-weight: bold
      font-size: $font-size-h3
      font-family: Arial,Helvetica Neue,Helvetica,sans-serif
      text-transform: uppercase
  .filters__container
    background: lighten($primary, 90%)
    background: #fff
    background: linear-gradient(to right bottom, $green, $darkgreen)
    padding: 10px 20px 30px
    box-shadow: -20px 30px 80px 0px grey
    color: #fff
    margin: 0 auto 20px
    width: 400px
    @media (max-width $breakpoint-xs-max)
      width: 80%
  .matches
    border-top: 2px solid $primary
    h2
      font-weight: bold
      font-size: $font-size-h3
      font-family: Arial,Helvetica Neue,Helvetica,sans-serif
      text-transform: uppercase
      color: $darkgreen
      margin: 50px auto 0
  .match__wrapper
    width: 100%
    background: linear-gradient(to bottom, $green 0% 10%, $darkgreen 10% 30%, $green 30% 50%, $darkgreen 50% 70%, $green 70% 90%, $darkgreen 90% 100%)
    background: linear-gradient(to right bottom, $lightgreen, $green)
    margin: 50px auto 0
  .match__container
    padding-top: 20px
    max-width: 1100px
    margin: 0 auto
    h3
      margin: 20px auto 0
  .match
    margin-bottom: 10px
    padding: 10px
    @media (max-width $breakpoint-xs-max)
      padding: 10px 0
  .match__description
    margin: 0 auto 30px
    color: $darkgreen
  .match__data
    width: 100%
    display: flex
    flex-wrap: wrap
    justify-content: center
    background: lightgrey
    p
      display: flex
      margin: auto
      font-weight: bold
      color: $darkgreen
      min-height: 40px
      justify-content: center
      text-align: center
      align-self: center
      align-items: center
      width: 15%
      @media (max-width $breakpoint-xs-max)
        width: 30%
  .teams
    width: 100%
    display: flex
    justify-content: space-between
    @media (max-width $breakpoint-xs-max)
      flex-direction: column
  .team
    width: 30%
    @media (max-width $breakpoint-xs-max)
      width: 90%
      margin: 0 auto 20px
      box-shadow: none
      padding: 10px 0
    display: flex
    flex-direction: column
    background: linear-gradient(to right bottom, $green, $darkgreen)
    padding: 10px
    min-height: 100px
    box-shadow: -20px 30px 80px 0px grey
    ol
      color: #fff
      border-bottom: 1px solid #fff
      border-top: 1px solid #fff
      padding: 15px auto
      @media (max-width $breakpoint-xs-max)
        padding-left: 30px
      li
        padding-top: 5px
    p, h6, a
      text-align: center
      color: #fff
  .btn
    display: flex
    margin: 10px auto
  .q-form .q-field__label
    color: #fff
    font-size: $font-size-h3
    min-height: 30px
  .q-field--standard .q-field__control:after
    color: #fff

</style>
