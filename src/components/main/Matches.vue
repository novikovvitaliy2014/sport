<template>
  <div flex-center class="main row">
    <h2 v-if="!matches" class="main__container col-11">Loading</h2>
    <!-- <section class="filters">
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
    </section> -->
    <section>

    </section>
    <!-- <section v-if="filterActivated" class="matches"> -->
    <section v-if="true" class="matches">
      <!-- <h2 v-if="filteredMatches.length === 0" class="matches__title">Не найден матч с указанными параметрами</h2>
      <h2 v-if="filteredMatches.length > 0" class="matches__title">Открытые матчи для регистрации</h2> -->
      <h2 v-if="true" class="matches__title">Открытые матчи для регистрации</h2>
      <div
               v-for="match in filteredMatches"
               :key="match.id"
               class="match__wrapper row">
        <div class="match match_id row match__container col-11">
          <div class="match__data">
            <p class="match__data-item">{{ match.sport }}</p>
            <p class="match__data-item">{{ match.city }}</p>
            <p class="match__data-item">{{ match.adress }}</p>
            <div class="match__data-item">
              <p>{{ formatDate(match.date) }}</p>
              <p>{{ weekDay(match.date) }}</p>
            </div>
            <p class="match__data-item">{{ match.time }}</p>
          </div>
          <div class="row">
            <section class="match__description col-md-10 col-sm-10 col-xs-12" >
              <h3>Описание матча</h3>
              <!-- <p>Услуги сервиса InCitySport бесплатные.</p> -->
              <p>Оплата игроками за аренду зала производится администратору зала непосредственно перед матчем. Оплату равномерно рассчитывают сами игроки исходя из количества игроков и цены аренды зала. </p>
              <p>{{ match.desc }}</p>
              <p>Выбирая команду, постарайтесь учесть рекомендации по цвету футболки для каждой команды (для лучшей идентификации игроков одной команды).</p>
              <p>В каждой команде 6 мест для регистрации.</p>
            </section>
          </div>
          <section class="teams">
            <team1 :match="match" :matchIndex="match.id"/>
            <team2 :match="match" :matchIndex="match.id"/>
            <team3 v-if="match.teamsNumber > 2" :match="match" :matchIndex="match.id"/>
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
    formatDate (day) {
      let date = new Date(day)
      let year = date.getFullYear()
      let month = date.getMonth()
      let monthRus = month + 1
      let dt = date.getDate()
      if (month === 0) {
        monthRus = 'Января'
      }
      if (month === 1) {
        monthRus = 'Февраля'
      }
      if (month === 2) {
        monthRus = 'Марта'
      }
      if (month === 3) {
        monthRus = 'Апреля'
      }
      if (month === 4) {
        monthRus = 'Мая'
      }
      if (month === 5) {
        monthRus = 'Июня'
      }
      if (month === 6) {
        monthRus = 'Июля'
      }
      if (month === 7) {
        monthRus = 'Августа'
      }
      if (month === 8) {
        monthRus = 'Сентября'
      }
      if (month === 9) {
        monthRus = 'Октября'
      }
      if (month === 10) {
        monthRus = 'Ноября'
      }
      if (month === 11) {
        monthRus = 'Декабря'
      }
      return dt + ' ' + monthRus + ' ' + year
    },
    weekDay (day) {
      let dayDate = new Date(day)
      let dayNumber = dayDate.getDay()
      if (dayNumber === 0) {
        return 'Воскресенье'
      }
      if (dayNumber === 1) {
        return 'Понедельник'
      }
      if (dayNumber === 2) {
        return 'Вторник'
      }
      if (dayNumber === 3) {
        return 'Среда'
      }
      if (dayNumber === 4) {
        return 'Четверг'
      }
      if (dayNumber === 5) {
        return 'Пятница'
      }
      if (dayNumber === 6) {
        return 'Суббота'
      }
    }
    // filterActiv () {
    //   this.filterActivated = true
    //   const margin = document.querySelector('.filters')
    //   margin.classList.add('up')
    //   // return this.filterActivated
    // },
    // unique (getter) {
    //   let matchesArray = this.matches
    //   return [...new Set(matchesArray.map(getter))]
    //   // return [...new Set(matches.map(obj => obj.city))]
    // }
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
  .up
    margin-top: -50px
    transition: 1s linear
  .main
    background: #fff
  .filters
    transition: 1s linear
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
      margin-top: 10px
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
    width: 100%
    h2
      font-weight: bold
      font-size: $font-size-h3
      font-family: Arial,Helvetica Neue,Helvetica,sans-serif
      text-transform: uppercase
      color: $darkgreen
      width: 100%
      text-align: center
      margin: 30px auto 0
  .matches__title
    border-top: none
  .match__wrapper
    width: 100%
    background: linear-gradient(to bottom, $green 0% 10%, $darkgreen 10% 30%, $green 30% 50%, $darkgreen 50% 70%, $green 70% 90%, $darkgreen 90% 100%)
    background: linear-gradient(to right bottom, $lightgreen, $green)
    margin: 30px auto 0
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
  .match__data .match__data-item
      display: flex
      margin: auto
      flex-wrap: wrap
      font-weight: bold
      color: $darkgreen
      min-height: 40px
      justify-content: center
      text-align: center
      align-self: center
      align-items: center
      width: 15%
      min-width: 140px
      @media (max-width $breakpoint-xs-max)
        width: 30%
      p
        margin-bottom: 0
        color: $secondary
  .teams
    width: 100%
    display: flex
    justify-content: space-around
    @media (max-width $breakpoint-xs-max)
      flex-direction: column
  .team
    width: 30%
    overflow: hidden
    @media (max-width $breakpoint-xs-max)
      width: 100%
      margin: 0 auto 20px
      box-shadow: none
      padding: 10px 15px
    display: flex
    flex-direction: column
    background: linear-gradient(to right bottom, $green, $darkgreen)
    padding: 5px 0
    min-height: 100px
    box-shadow: -20px 30px 80px 0px grey
    ol
      color: #fff
      border-bottom: 1px solid #fff
      border-top: 1px solid #fff
      padding: 15px 20px
      @media (max-width $breakpoint-xs-max)
        padding-left: 10px
      li
        padding: 5px 0
    p, a
      text-align: center
      color: #fff
      margin: 5px auto 0
  .booking
    padding: 0 5px
  .q-form .q-field__label
    color: #fff
    font-size: $font-size-h5
    @media ($breakpoint-sm-max $breakpoint-xs-min)
      font-size: $font-size-h6
    min-height: 30px
  .q-field--standard .q-field__control:after
    color: #fff
  .q-form .q-field
    margin-left: 5px
  .q-btn-toggle, .q-toggle
    margin: 5px auto

</style>
