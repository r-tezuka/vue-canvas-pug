<template lang="pug">
div
  canvas#canvas(width='600', height='400')
  p x1: {{ x1 }}
    input(v-model='x1')
  p y1: {{ y1 }}
    input(v-model='y1')
  p x2:
    input(v-model='x2')
  p y2:
    input(v-model='y2')
</template>

<script>
export default {
  data() {
    return {
      x1: 50,
      y1: 100,
      x2: 250,
      y2: 100
    }
  },
  mounted() {
  const canvas = document.getElementById('canvas');
  canvas.width = 600;
  canvas.height = 400;
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  ctx.fillRect(100-5, 20-5, 10, 10);
  ctx.fillRect(150-5, 100-5, 10, 10);
  ctx.fillRect(50-5, 100-5, 10, 10);
  //新しいパスを開始する
  ctx.beginPath();
  ctx.moveTo(100,20);
  ctx.lineTo(150,100);
  ctx.lineTo(50,100);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(this.x1,this.y1);
  ctx.bezierCurveTo(100,20,200,20,this.x2,this.y2);
  ctx.stroke();
  console.log('x1:'+this.x1);
  }
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>