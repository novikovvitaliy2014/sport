<template>
  <section class="about row">
    <div class="about__container row col-11">
      <section class="about__desc col-sm-8 col-xs-12 col-md-5 col-lg-6 col-xl-6">
        <h2>Спортивное настроение</h2>
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
    }
  },
  computed: {
  },
  methods: {
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
      background: linear-gradient(to right top, lighten($primary, 50%), lighten($primary, 90%))
      background-size: cover
    padding-top: 50px
    padding-bottom: 50px
    h2
      color: #fff
      color: $primary
      margin-top: 0
      display: block
      text-align: left
      padding-left: 0
      font-weight: bold
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
  .btn--rules
    background: $green
</style>
