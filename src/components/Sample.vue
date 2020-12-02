<template lang='pug'>
div
  canvas#canvas(@mousedown='down', @mouseup='up', @mouseout='up', @mousemove='move')
</template>

<script>
export default {
  data() {
    return {
      points: [
        {
          x: 150,
          y: 100
        },
        {
          x: 200,
          y: 100
        },
        {
          x: 250,
          y: 100
        }
      ],
    }
  },
  mounted() {
    this.dragging = false
    this.pointWidth = 10
    this.draw()
  },
  methods: {
    draw: function() {
      this.canvas = document.getElementById('canvas')
      this.canvas.width = 1200
      this.canvas.height = 800
      document.body.appendChild(this.canvas)
      this.ctx = this.canvas.getContext('2d')
      let w = this.pointWidth
      this.points.forEach(p => {this.ctx.fillRect(p.x-w/2, p.y-w/2, w, w)})
    },

    down: function(e) {
      var offsetX = this.canvas.getBoundingClientRect().left
      var offsetY = this.canvas.getBoundingClientRect().top

      let x = e.clientX - offsetX
      let y = e.clientY - offsetY
      this.points.forEach(p => {this.objDrag(p, x, y)})
    },
    
    objDrag: function(point, x, y) {
      let w = this.pointWidth
      if (point.x-w/2 < x && (point.x + w/2) > x && point.y-w/2 < y && (point.y + w/2) > y) {
        this.dragging = true
        this.target = point
        this.relX = this.target.x - x
        this.relY = this.target.y - y
      }
    },

    move: function(e) {
      var offsetX = this.canvas.getBoundingClientRect().left
      var offsetY = this.canvas.getBoundingClientRect().top

      let x = e.clientX - offsetX
      let y = e.clientY - offsetY

      if (this.dragging) {
        this.target.x = x + this.relX
        this.target.y = y + this.relY
        this.draw()
      }
    },

    up: function() {
      this.dragging = false
    }
  }
}
</script>