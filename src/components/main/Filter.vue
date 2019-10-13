<template>
  <div class="filter">
    <!-- <label class="filter">
      {{ name }} -->
      <q-select :value="value"
                @input="$emit('input', $event.target.value)"
                :options='options'
                :label="label"
                />
        <!-- <option value="">Все варианты</option>
        <option v-for="item in items" :key="item.name">{{ item }}</option> -->

    <!-- </label> -->
  </div>
</template>

<script>
export default {
  props: [ 'name', 'items', 'value' ],
  data () {
    return {
      options: this.items,
      label: this.name
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.filter
  margin-top: 100px
</style>
