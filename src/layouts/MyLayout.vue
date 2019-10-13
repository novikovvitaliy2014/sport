<template>
  <q-layout view="hHh Lpr fFf"  class="shadow-2 rounded-borders">
    <q-header elevated class="header row">
      <section class="header-container col-11">
        <q-toolbar>
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
          >
            <q-icon name="menu"
            />
          </q-btn>
          <q-toolbar-title class="gt-xs">
            Menu
          </q-toolbar-title>
        </q-toolbar>
        <div class="header__logo">
          <router-link to="/"
             tag="p"
             >
            InCitySport
          </router-link>
          <div class="header__logo-icon">
          </div>
        </div>
        <!-- <div class="header__rules">
          <router-link to="/rules"
             tag="p"
             >
            Правила
          </router-link>
        </div> -->
      </section>
    </q-header>

    <q-drawer
      behavior="mobile"
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <router-link to="/"
               tag="p"
               >
              Главная
            </router-link>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="priority_high" />
          </q-item-section>
          <q-item-section>
            <router-link to="/rules"
               tag="p"
               >
              Правила
            </router-link>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="perm_identity" />
          </q-item-section>
          <q-item-section>
            <router-link to="/userData"
               tag="p"
               >
              Личный кабинет
            </router-link>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="mail_outline" />
          </q-item-section>
          <q-item-section>
              <router-link to="/contacts"
                 tag="p"
                 >
                Контакты
              </router-link>
            <!-- <q-item-label caption>incitysport@gmail.com</q-item-label> -->
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
  .header
    background: #fff
    color: $primary
  .header-container
    max-width: 1100px
    display: flex
    justify-content: space-between
    flex-wrap: no-wrap
    margin: 0 auto
  .header__logo-icon
    width: 30px
    background: url('../statics/icons/ball.svg') no-repeat
    background-size: 20px
    background-position: 5px 15px
  .header__rules,
  .header__logo
    max-width: 167px
    position: relative
    display: flex
    width: 30%
    @media (max-width $breakpoint-xs-max)
      width: 50%
    margin: 0
    cursor: pointer
    p
      margin: auto
      font-size: $font-size-h4
      font-family: Arial,Helvetica Neue,Helvetica,sans-serif
  .header__logo p
    font-style: italic
    font-size: $font-size-h2
    text-align: center
  .header__rules
    text-align: right
    padding-right: 5px
  .q-toolbar
    max-width: 120px
  .q-toolbar__title
    font-size: $font-size-h4
    font-family: Arial,Helvetica Neue,Helvetica,sans-serif
  .q-toolbar:hover .q-btn
    box-shadow: 0 0 1px 2px #fff
  .q-item__section p
    margin-bottom: 0
    color: $primary
    font-size: $font-size-h4
  .q-layout-padding
    padding: 0
</style>
