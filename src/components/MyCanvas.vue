<template lang="pug">
  canvas.canvas(width='200', height='200')
</template>

<script>
export default {
  props: {
    radius: {
      type: Number,
      default: 50
    }
  },
  watch: {
    radius() {
      this.draw(this.radius)
   }
  },
  methods: {
    draw(radius) {
      this.ctx.beginPath()
      this.ctx.clearRect(0, 0, 200, 200)
      this.ctx.arc(100, 100, radius, 0, Math.PI * 2)
      this.ctx.fill()
    }
  },
  mounted() {
    // mounted 以降で canvas の DOM にアクセスできる
    // CreateJS などを使うときにも、ここで canvas と紐付ける
    // console.log(this.$el)
    this.ctx = this.$el.getContext('2d')
    //this.ctx.fillRect(0,0,80,80);
    //this.ctx.fillRect(100,0,80,80);
    // this.draw(this.radius)
    this.$el.addEventListener('click', (e) => {
      console.log(e.clientY);
      this.ctx.strokeRect(e.clientX-190, e.clientY-500, 10, 10);
    });
  }

}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>