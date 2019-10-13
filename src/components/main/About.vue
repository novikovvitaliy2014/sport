<template>
  <section class="about row">
    <div class="about__container row col-11">
      <section class="about__desc col-sm-8 col-xs-12 col-md-5 col-lg-6 col-xl-6">
        <h2 v-if="title_1">Спортивное настроение</h2>
        <h2 v-if="title_2">Физкульт - Привет!</h2>
        <h2 v-if="title_3">В здоровом теле - здоровый дух</h2>
        <h2 v-if="title_4">Бей. Беги. Худей.</h2>
        <h2 v-if="title_5">Радость спорта</h2>
        <h2 v-if="title_6">Блестящих побед!</h2>
        <h2 v-if="title_7">Каждому по команде!</h2>
        <h2 v-if="title_8">Играй. Кайфуй. Худей.</h2>
        <h2 v-if="title_9">Дух соревнования</h2>
        <!-- Не всегда получается собрать несколько команд для игры в футбол.  -->
        <p>Вы можете принять участие в любительской игре, не собирая команду. </p>
        <p>Забронируйте место в команде из таких же как Вы активных игроков-любителей в подходящем для Вас матче и приходите на матч.</p>
        <p>Услуги сервиса бесплатные, игрок платит только свою долю аренды зала на матч (от 30-ти до 60-ти рублей).</p>
        <router-link to="/rules"
           tag="a"
           class="btn btn--rules"
           >
          Подробно о правилах
        </router-link>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title_1: false,
      title_2: false,
      title_3: false,
      title_4: false,
      title_5: false,
      title_6: false,
      title_7: false,
      title_8: false,
      title_9: false
    }
  },
  computed: {
  },
  methods: {
    getRandomInt (max) {
      return Math.floor(Math.random() * Math.floor(max))
    }
  },
  created () {
    let random = this.getRandomInt(9)
    random === 0 ? this.title_1 = true : this.title_1 = false
    random === 1 ? this.title_2 = true : this.title_2 = false
    random === 2 ? this.title_3 = true : this.title_3 = false
    random === 3 ? this.title_4 = true : this.title_4 = false
    random === 4 ? this.title_5 = true : this.title_5 = false
    random === 5 ? this.title_6 = true : this.title_6 = false
    random === 6 ? this.title_7 = true : this.title_7 = false
    random === 7 ? this.title_8 = true : this.title_8 = false
    random === 8 ? this.title_9 = true : this.title_9 = false
    // if (random === 0) {
    //   this.title_1 = true
    // }
    // if (random === 1) {
    //   this.title_2 = true
    // }
    // if (random === 2) {
    //   this.title_3 = true
    // }
  }
}
</script>

<style lang="stylus">
  .about
    display: flex
    min-height: 400px
    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.0) ), url('../../statics/img/hit.png') no-repeat 70% center
    background: #fff url('../../statics/img/players.jpg') no-repeat 90% center
    background-size: 30% auto
    @media (max-width $breakpoint-xs-max)
      padding-top: 20px
      padding-bottom: 35px
      background: linear-gradient(to right top, lighten($primary, 50%), lighten($primary, 90%))
      background-size: cover
    padding-top: 40px
    padding-bottom: 50px
    h2
      color: #fff
      color: $primary
      margin-top: 0
      display: block
      text-align: left
      padding-left: 0
      font-weight: bold
      @media (max-width $breakpoint-xs-max)
        margin: 0px auto 10px
    p
      display: block
      padding: 0
      color: #fff
      color: $gray
      margin-bottom: 8px
      font-size: $font-size-h4
      line-height: $line-height-h4
      font-family: Arial,Helvetica Neue,Helvetica,sans-serif
  .about__container
    padding: 0 10px
    max-width: 1100px
    margin: 20px auto 10px
  .about__desc
    display: flex
    flex-direction: column
    justify-content: space-around
  .about__desc .btn--rules
    margin-left: 0
    font-size: $font-size-h5
  .about__desc .btn--rules
    background: $green
    @media (max-width $breakpoint-xs-max)
      margin: 10px auto
</style>
