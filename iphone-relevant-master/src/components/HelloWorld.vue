<template>
  <div>
    <x-header title="越狱工具" :left-options="{showBack: false}"></x-header>

    <group v-for="item in list" :key="item.id">
      <cell-box :link="pathurl + item.url" is-link>
        {{item.name}}
      </cell-box>
    </group>

  </div>
</template>

<script>
  import data from '../common/json/data.json';
  export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [],
      pathurl: ''
    }
  },
  created() {
    const url = this.$route.path
    if (url !== '/mt' && url !== '/jfq' && url !== '/sb' && url !== '/oy') {
      this.$router.push({path: '/404'})
    } else {
      this.pathurl = url
      this.list = data.page
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
