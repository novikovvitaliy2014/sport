<template>
  <q-page class="user-data row">
    <section class="user-data__container col-8" v-if="myMatch">
      <h1>Личный кабинет</h1>
      <p>Вы зарегистрированы на матч:</p>
      <p>Имя: <span>{{ myName }}</span></p>
      <p>Город: <span>{{ myMatch.city }}</span></p>
      <p>Адрес: <span>{{ myMatch.adress }}</span></p>
      <p>Вид спорта: <span>{{ myMatch.sport }}</span></p>
      <p>Дата: <span>{{ myMatch.date }}</span></p>
      <p>Время матча: <span>{{ myMatch.time }}</span></p>
      <p>Если Вы зарегистрировались на игру, но у Вас изменились планы, пожалуйста, сообщайте об отмене, так как это важно другим игрокам. В случае регистрации менее 10 человек (2 команды) из возможных 15-ти (3 команды) за 2 часа до начала матча, то матч отменяется.</p>
      <q-btn
        color="primary"
        class="btn"
        label="Отменить участие"
        @click="deletePlayer"
      />
    </section>
    <div class="user-data__container col-8" v-if="!myMatch">
      <h1>Личный кабинет</h1>
      <p>Вы не зарегистрированы на матч.</p>
      <p>Повторно можно зарегистрироваться спустя сутки после предыдущей регистрации. </p>
     <!--  <div v-if="nextDay">
        <p>В данном случае, следующая регистрация возможна после:</p>
        <span> {{ nextDay }} </span>
      </div> -->
      <p>Если у Вас есть вопросы или предложения - напишите нам по адресу:</p>
      <p>incitysport@gmail.com</p>
    </div>
  </q-page>
</template>

<script>
// import Matches from '../components/main/Matches.vue'
export default {
  components: {
  },
  data () {
    return {
      myMatch: null,
      myName: null,
      myRandom: null,
      nextDay: '',
      nextTime: new Date()
    }
  },
  methods: {
    deletePlayer () {
      const data = {
        myRandom: this.myRandom,
        matchID: this.myMatch.id,
        team: this.myMatch.team
      }
      this.$store.dispatch('module1/deletePlayer', data)
      this.myMatch = null
      localStorage.removeItem('myMatch')
      localStorage.removeItem('myName')
      localStorage.removeItem('myRandom')
      // this.myName = null
      // localStorage.removeItem('expirationDate')
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
    this.$store.dispatch('module1/getMatches')
    let matchStorage = JSON.parse(localStorage.getItem('myMatch'))
    let nameStorage = JSON.parse(localStorage.getItem('myName'))
    let randomStorage = JSON.parse(localStorage.getItem('myRandom'))
    if (matchStorage) {
      this.myMatch = matchStorage
    }
    if (matchStorage) {
      this.myName = nameStorage
    }
    if (matchStorage) {
      this.myRandom = randomStorage
    }
    // let now = Date.now()
    let expirationDate = JSON.parse(localStorage.getItem('expirationDate'))
    // if (expirationDate !== null && now < expirationDate) {
    //   console.log('disable btn')
    //   this.$store.dispatch('module1/globalBtnsDisable')
    // }
    // let nextDate = Date(expirationDate).toString()
    if (expirationDate) {
      this.nextDay = new Date(expirationDate)
    }

    // let expirationDate = Date.now() + (1000 * 60 * 60 * 24)
    // let test = new Date(expirationDate)
    // console.log(test)
  }
}
</script>

<style lang="stylus">
  .user-data__container
    margin: 50px auto 0
    max-width: 900px
    span
      color: $primary
      font-size: $font-size-h5
      padding-bottom: 30px
</style>
