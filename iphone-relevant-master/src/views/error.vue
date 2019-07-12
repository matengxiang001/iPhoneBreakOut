<template>
  <div style="background:#f0f2f5;margin-top: -20px;">
        <img style="width: 100%" :src="img_404" alt="404">
  </div>
</template>

<script>
import img_404 from '../assets/404_images/404.jpg'

export default {
  name: 'error',
  data() {
    return {
      img_404
    }
  }
}
</script>

<style scoped>

</style>
