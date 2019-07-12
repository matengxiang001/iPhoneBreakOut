<template>
  <div>
    <x-header :title="sourceData.name"></x-header>
    <x-button type="warn" style="border-radius: 99px;width: 30%;margin-top: 40px" :link="sourceData.url">添加</x-button>

    <div style="margin-top: 20px">
      <h2>前言</h2>
      <p>添加软件源需要输入URL</p>
      <p>该功能可以一键添加源</p>
      <p>Sileo添加需确保手机无Cydia残留</p>
      <p>若无法添加，可复制链接手动添加</p>
      <p style="color: red">{{sourceData.sourceUrl}}</p>
      <x-button id="btn" class="copy" :data-clipboard-text="sourceData.sourceUrl" style="border-radius: 99px;width: 35%;margin-top: 20px" @click.native="copy" type="warn">复制链接</x-button>
      <h2>步骤</h2>
      <div v-for="item in sourceData.images" :key="item.id">
        <img :src="item.url" style="width: 80%;height: 80%;margin-top: 20px">
      </div>
      <nv-top></nv-top>
    </div>
  </div>
</template>

<script>
  import nvTop from '../components/backtotop.vue';
  import Clipboard from 'clipboard';
  import data from '../common/json/data.json';
  export default {
  name: 'addSource',
  components: {
    nvTop
  },
  data () {
    return {
      sourceData: {
        name: '',
        url: '',
        sourceUrl: '',
        images: []
      },
    }
  },
  created() {
    const url = this.$route.path
    const sid = this.$route.query.id
    if (!url.startsWith('/sb') && !url.startsWith('/mt') && !url.startsWith('/jfq') && !url.startsWith('/oy')) {
      this.$router.push({path: '/404'})
    } else {
      if (sid === 1){
        if (url.startsWith('/sb')) {
          this.sourceData = data.source1.sb
        } else if (url.startsWith('/mt')) {
          this.sourceData = data.source1.mt
        } else if (url.startsWith('/oy')) {
          this.sourceData = data.source1.oy
        } else if (url.startsWith('/jfq')) {
          this.sourceData = data.source1.jfq
        }
      } else if (sid === 2){
        if (url.startsWith('/sb')) {
          this.sourceData = data.source2.sb
        } else if (url.startsWith('/mt')) {
          this.sourceData = data.source2.mt
        } else if (url.startsWith('/oy')) {
          this.sourceData = data.source2.oy
        } else if (url.startsWith('/jfq')) {
          this.sourceData = data.source2.jfq
        }
      } else if (sid === 3){
        if (url.startsWith('/sb')) {
          this.sourceData = data.source3.sb
        } else if (url.startsWith('/mt')) {
          this.sourceData = data.source3.mt
        } else if (url.startsWith('/oy')) {
          this.sourceData = data.source3.oy
        } else if (url.startsWith('/jfq')) {
          this.sourceData = data.source3.jfq
        }
      } else if (sid === 4){
        if (url.startsWith('/sb')) {
          this.sourceData = data.source4.sb
        } else if (url.startsWith('/mt')) {
          this.sourceData = data.source4.mt
        } else if (url.startsWith('/oy')) {
          this.sourceData = data.source4.oy
        } else if (url.startsWith('/jfq')) {
          this.sourceData = data.source4.jfq
        }
      }
    }
  },
  methods: {
    copy() {
      //检测是否兼容
      const _this = this
      var copy = Clipboard.isSupported()
      let clipboard = new Clipboard('.copy');
      clipboard.on('success', function (e) {
        _this.$vux.toast.text('复制成功', 'middle')
        clipboard.destroy()
      });
      clipboard.on('error', function (e) {
        this.$vux.toast.text('复制失败', 'middle')
        clipboard.destroy()
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
