<template>
  <section class="team">
    <booked :match="match" :team="3" v-if="bookedAlert"></booked>
    <p>Команда № 3</p>
    <ol>
      <li v-for="player in registeredPlayersArray" :key="player.tel">
        <span>{{ player.name }} / </span>
        <span>{{ player.profi }} / </span>
        <span>{{ player.age }}</span>
      </li>
    </ol>
    <p v-if="freePlaces" class="team__freePlaces">Свободных мест:   <span>{{ freePlaces }}</span></p>
    <p v-if="freePlaces <= null">Все места в этой команде забронированы.</p>
    <q-form v-if="btnBooked"
      @submit="onSubmit"
      class="booking q-gutter-md"
    >
      <q-input
        filled
        v-model="pseudo"
        label="Имя *"
        lazy-rules
        :rules="nameRules"
      />
      <q-input
        filled
        type="number"
        v-model="tel"
        label="Номер телефона *"
        lazy-rules
        :rules="telephoneRules"
      />
      <q-input
        filled
        type="email"
        :rules="emailRules"
        label="Эл. почта *"
        v-model='email'
      />
      <h6 title="Выбранный уровень будет виден другим игрокам для оптимального выбора команды">
        Выберите свой уровень
      </h6>
      <q-btn-toggle
        v-model="profi"
        spread
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="primary"
        color="grey"
        text-color="white"
        :options="[
          {label: 'Опытный игрок', value: 'Опытный игрок'},
          {label: 'Любитель', value: 'Любитель'}
        ]"
      />
      <h6 title="Выбранный возраст будет виден другим игрокам для оптимального выбора команды">
        Выберите свой возраст
      </h6>
      <q-btn-toggle
        v-model="age"
        spread
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="primary"
        color="grey"
        text-color="white"
        :options="[
          {label: '18-30 лет', value: '18-30 лет'},
          {label: 'Старше 30-ти лет', value: 'Старше 30-ти лет'}
        ]"
      />
      <q-toggle
                v-model="accept"
                >
                  <!-- <div slot="label"> -->
                    <router-link to="/"
                       class="header__top-link"
                       >
                    Принимаю условия пользовательского соглашения
                    </router-link>
                 <!-- </div> -->
               </q-toggle>
      <q-btn color="primary"
             class="btn__takePart"
             type="submit"
             label="Забронировать"
             v-if="btnBooked && freePlaces && globalBtns"
              />
    </q-form>
    <q-btn color="primary"
           @click="openForm"
           class="btn__takePart"
           label="Участвовать"
           v-if="btnForm && freePlaces > null && globalBtns" />
  </section>
</template>

<script>
import Booked from '../dialogs/Booked.vue'
export default {
  props: ['match', 'matchIndex'],
  components: {
    Booked
  },
  data () {
    return {
      matchData: {},
      accept: false,
      bookedAlert: false,
      btnBooked: false,
      placesQuantity: 5,
      form: false,
      btnForm: true,
      profi: 'Опытный игрок',
      age: '18-30 лет',
      pseudo: null,
      email: null,
      tel: null,
      nameRules: [
        v => !!v || 'Заполните поле'
      ],
      telephoneRules: [
        v => !!v || 'Заполните поле',
        v => (v && v.length >= 10) || 'Минимальное количество символов - 10'
      ],
      emailRules: [
        v => !!v || 'Заполните поле',
        v => /.+@.+/.test(v) || 'Неверный формат',
        v => (v && v.length >= 8) || 'Минимальное количество символов - 8'
      ],
      newPlayer: {},
      fullTeam: false,
      playersQuantity: 5,
      registeredPlayersArray: []
    }
  },
  computed: {
    freePlaces () {
      if (this.registeredPlayersArray) {
        return this.playersQuantity - this.registeredPlayersArray.length
      }
      return this.playersQuantity
    },
    globalBtns () {
      return this.$store.getters['module1/globalBtns']
    }
  },
  methods: {
    openForm () {
      this.btnForm = false
      this.btnBooked = true
    },
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Вы не приняли условия пользовательского соглашения'
        })
      } else {
        // this.$q.notify({
        //   color: 'green-4',
        //   textColor: 'white',
        //   icon: 'cloud_done',
        //   message: 'Submitted'
        // })
        this.bookedAlert = true
        this.btnBooked = false
        this.newPlayer.name = this.pseudo
        this.newPlayer.email = this.email
        this.newPlayer.tel = this.tel
        this.newPlayer.profi = this.profi
        this.newPlayer.age = this.age
        this.registeredPlayersArray.push(this.newPlayer)
        this.$store.dispatch('module1/globalBtnsDisable')
        const newPlayerData = {
          newPlayer: this.newPlayer,
          matchIndex: this.matchIndex,
          teamIndex: '2',
          match: this.match
        }
        this.$store.dispatch('module1/registerPlayer', newPlayerData)
        let expirationDate = Date.now() + (1000 * 60 * 60 * 24)
        localStorage.setItem('expirationDate', JSON.stringify(expirationDate))
        this.matchData.city = this.match.city
        this.matchData.adress = this.match.adress
        this.matchData.date = this.match.date
        this.matchData.time = this.match.time
        this.matchData.sport = this.match.sport
        this.matchData.id = this.match.id
        this.matchData.team = '0'
        localStorage.setItem('myMatch', JSON.stringify(this.matchData))
        localStorage.setItem('myName', JSON.stringify(this.newPlayer.name))
        localStorage.setItem('myTel', JSON.stringify(this.newPlayer.tel))
      }
    }
  },
  created () {
    if (this.match.teams) {
      if (this.match.teams[2].players) {
        this.registeredPlayersArray = Object.values(this.match.teams[2].players)
      }
    }
    this.matchData.city = this.match.city
    this.matchData.adress = this.match.adress
    this.matchData.date = this.match.date
    this.matchData.time = this.match.time
    this.matchData.sport = this.match.sport
    console.log(this.matchData)
  }
}
</script>

<style lang="stylus">

</style>
