<template>
  <div>
    <x-header title="下载越狱软件"></x-header>

    <group v-for="item in breakoutData" :key="item.id">
      <cell-box :link="pathurl + item.url" is-link>
        {{item.name}}
      </cell-box>
    </group>

  </div>
</template>

<script>
  import data from '../common/json/data.json';
  export default {
  name: 'breakout',
  data () {
    return {
      breakoutData: [],
      pathurl: ''
    }
  },
  created() {
    const url = this.$route.path
    if (!url.startsWith('/sb') && !url.startsWith('/mt') && !url.startsWith('/jfq') && !url.startsWith('/oy')) {
      this.$router.push({path: '/404'})
    } else {
      if (url.startsWith('/sb')) {
        this.pathurl = '/sb'
      } else if (url.startsWith('/mt')) {
        this.pathurl = '/mt'
      } else if (url.startsWith('/jfq')) {
        this.pathurl = '/jfq'
      } else if (url.startsWith('/oy')) {
        this.pathurl = '/oy'
      }
    }
    this.breakoutData = data.breakout
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
