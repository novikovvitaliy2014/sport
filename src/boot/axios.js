// import Vue from 'vue'
import axios from 'axios'

// "async" is optional
export default async ({ Vue }) => {
  Vue.prototype.$axios = axios
}
