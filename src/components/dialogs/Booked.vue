<template>
  <div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section class="success-icon">
          <!-- <div class="flex flex-center" width="100px" height="100px" > -->
            <q-icon name="img:statics/icons/success.svg"/>
          <!-- </div> -->
        </q-card-section>

        <q-card-section>
          <p>Вы зарегистрированы игроком в команду № {{ team }} на матч {{ match.city }} / {{ match.adress }} / {{ match.date }} / {{ match.time }}</p>
          <p>Если у Вас изменятся планы, пожалуйста, отмените участие в личном кабинете или написав нам СМС с текстом "Отмена" с указанного при регистрации номера на номер <a href="tel:+380997342723">+38(099) 734 27 23</a>. После отмены участия зарегистрироваться снова Вы сможете не ранее, чем через сутки.</p>
          <p>Пожалуйста, сообщайте об отмене участия, так как это важно другим игрокам.</p>
          <!-- <p>Вам будет отправлен шаблон сообщения для приглашения друзей в мессенджере или по СМС.</p> -->
          <p>В случае регистрации менее 10-ти человек <!-- (2 команды) --> матч отменяется. За 2 часа до начала матча Вы получите СМС и письмо на электронную почту с уведомлением.</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: ['match', 'team'],
  data () {
    return {
      alert: true
      // teamNumber: 1
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="sass">
  .success-icon
    width: 80px
    height: 80px
    margin: auto
    img
      width: 100%
      height: 100%
</style>
