<template>
  <div>
    <x-header title="一键安装软件源"></x-header>
    <group v-for="item in list" :key="item.id">
      <!--<cell-box :link="pathurl+item.url" is-link>-->
      <cell-box :link="{path:pathurl+item.url, query:{id:item.id}}" is-link>
        {{item.name}}
      </cell-box>
    </group>
  </div>
</template>

<script>
  import data from '../common/json/data.json';
  export default {
  name: 'sources',
  data () {
    return {
      list: [],
      pathurl: undefined
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
      this.list = data.sources
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
