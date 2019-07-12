<template>
  <div>
    <x-header title="IOS-12"></x-header>
    <el-container>
      <el-aside width="20%">
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/pattern_left.png" style="width: 90%">
      </el-aside>
      <el-main>
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/chimera.png" style="width: 80px; height: 80px; border-radius: 17.54%; margin-top: 80px">
        <p style=" font-size: 1.5em">chimera</p>
        <p>适用于IOS 12.0-12.1.2</p>
        <x-button type="warn" style="border-radius: 99px;width: 70%;margin-top: 20px" link="itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/matengxiang001/iPhoneBreakOut/master/chimera.plist">安装</x-button>
        <p style="margin-top: 40px">1.1.0 - 87 MB</p>
        <p>更新于: 2019 - 07 - 12</p>
      </el-main>
      <el-aside width="20%">
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/pattern_right.png" style="width: 90%">
      </el-aside>
    </el-container>
    <nv-top></nv-top>
    <div v-for="item in pathData" :key="item.id">
      <img :src="item.url" style="width: 80%;height: 80%;margin-top: 20px">
    </div>
  </div>
</template>
<script>
  import nvTop from '../components/backtotop.vue';
  import data from '../common/json/data.json';
  export default {
    name: 'Chimera',
    components: {
      nvTop
    },
    data () {
      return {
        pathData: [],
      }
    },
    created() {
      this.pathData = data.chimera
    }
  }
</script>
