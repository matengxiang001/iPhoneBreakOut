<template>
  <div>
    <x-header title="一键安装软件源"></x-header>
    <group v-for="item in list" :key="item.id">
      <!--<cell-box :link="item.url"  is-link>-->
      <cell-box>
        <a :href="item.url" target="_blank" style="text-decoration: none">{{item.name}}</a>
      </cell-box>
    </group>
  </div>
</template>

<script>
  import data from '../common/json/data.json';
  export default {
  name: 'breakoutRelevant',
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
      this.list = data.relevantData
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
