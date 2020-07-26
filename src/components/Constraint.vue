<template lang="pug">
div
  a Coming soon...
  canvas#canvas
</template>

<script>
export default {
  data() {
    return {
      dt: 0.01,
      cubic: {
        bezier: true,
        rationalBezier: true,
        gradingResult: false,
        numOfSize: 7,
        vertices: [
          {
            x: 150,
            y: 100,
            w: 1
          },
          {
            x: 350,
            y: 100,
            w: 1
          }
        ],
        handles: [
          {
            x: 200,
            y: 50,
            w: 2
          },
          {
            x: 300,
            y: 50,
            w: 2
          }
        ],
        pitches: [
          {
            x: 20,
            y: 0,
            w: 0,
            l: 0,
            a: 0
          },
          {
            x: 20,
            y: 0,
            w: 0,
            l: 0,
            a: 0
          }
        ]
      }
    }
  },
  mounted() {
    this.canvas = document.getElementById('canvas')
    this.canvas.width = 1200
    this.canvas.height = 800
    this.ctx = this.canvas.getContext('2d')
  }
}
</script>
