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
          x: 10,
          y: 10
        },
        {
          x: 100,
          y: 30
        },
        {
          x: 200,
          y: 30
        },
        {
          x: 300,
          y: 10
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
      this.canvas.width = 640
      this.canvas.height = 480
      document.body.appendChild(this.canvas)
      this.ctx = this.canvas.getContext('2d')
      const w = this.pointWidth

      // draw handles
      this.drawHandle(this.points[0], this.points[1]);
      this.drawHandle(this.points[3], this.points[2]);

      // draw points
      this.points.forEach(p => {this.ctx.fillRect(p.x-w/2, p.y-w/2, w, w)})

      // draw bezier curve
      this.ctx.beginPath();
      this.ctx.moveTo(this.points[0].x, this.points[0].y);
      this.ctx.bezierCurveTo(this.points[1].x, this.points[1].y, this.points[2].x, this.points[2].y, this.points[3].x, this.points[3].y);
      this.ctx.stroke();
    },

    drawHandle(from, to) {
    this.ctx.beginPath();
    this.ctx.moveTo(from.x, from.y);
    this.ctx.lineTo(to.x, to.y);
    this.ctx.stroke();
    },

    down: function(e) {
      var offsetX = this.canvas.getBoundingClientRect().left
      var offsetY = this.canvas.getBoundingClientRect().top

      const x = e.clientX - offsetX
      const y = e.clientY - offsetY
      this.points.forEach(p => {this.objDrag(p, x, y)})
    },
    
    objDrag: function(point, x, y) {
      const w = this.pointWidth
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

      const x = e.clientX - offsetX
      const y = e.clientY - offsetY

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