<template lang="pug">
div
  p
    input#conditions.cubic.bezier(type='checkbox' v-model='conditions.cubic.bezier')
    label(for='conditions.cubic.bezier') display cubicBezier
  p
    input#conditions.cubic.rationalBezier(type='checkbox' v-model='conditions.cubic.rationalBezier')
    label(for='conditions.cubic.rationalBezier') display rationalBezier
  div(v-for='(vertex, index) in this.vertices.cubic')
    p point{{index}} x:{{vertex.point.x}} y:{{vertex.point.y}} weight: <input v-model=vertex.point.w>
    p handle{{index}} x:{{vertex.handle.x}} y:{{vertex.handle.y}} weight: <input v-model="vertex.handle.w"> 
  canvas#canvas(@mousedown='onDown', @mouseup='onUp', @mouseout='onUp', @mousemove='onMove')
</template>

<script>
export default {
  data() {
    return {
      conditions: {
        cubic: {
          bezier: false,
          rationalBezier: false
        },
        quadratic: {
          bezier: false,
          rationalBezier: false
        }
      },
      vertices: {
        cubic: [
          {
            point: {
              x: 150,
              y: 100,
              w: 1
            },
            handle: {
              x: 200,
              y: 50,
              w: 1
            }
          },
          {
            point: {
              x: 350,
              y: 100,
              w: 1
            },
            handle: {
              x: 300,
              y: 50,
              w: 1
            }
          }
        ],
        quadratic: [
          {
            x: 550,
            y: 100,
            w: 1
          },
          {
            x: 750,
            y: 100,
            w: 1
          },
          {
            x: 650,
            y: 100,
            w: 1
          }
        ]
      },
      cubicBezierCurve: [],
      cubicRationalBezierCurve: []
    }
  },
  mounted() {
    this.dragging = false;
    this.conditions.cubic.bezier = true;
    this.draw();
  },
  methods: {
    draw: function() {
      this.canvas = document.getElementById('canvas');
      this.canvas.width = 1200;
      this.canvas.height = 800;
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      for(let i in this.vertices.cubic) {
        this.ctx.fillStyle = "rgb(0, 0, 0)";
        this.ctx.fillRect(this.vertices.cubic[i].point.x-5, this.vertices.cubic[i].point.y-5, 10, 10);
        this.ctx.fillStyle = "rgb(0, 0, 255)";
        this.ctx.fillRect(this.vertices.cubic[i].handle.x-5, this.vertices.cubic[i].handle.y-5, 10, 10);
        this.ctx.strokeStyle = "rgb(0, 0, 255)";
        this.ctx.beginPath();
        this.ctx.moveTo(this.vertices.cubic[i].point.x, this.vertices.cubic[i].point.y);
        this.ctx.lineTo(this.vertices.cubic[i].handle.x, this.vertices.cubic[i].handle.y)
        this.ctx.stroke();
      }
      if (this.conditions.cubic.bezier) {
        this.drawCubicBezier();
      }
      if (this.conditions.cubic.rationalBezier) {
        this.drawRationalBezier();
      }
    },

    drawCubicBezier: function() {
      this.cubicBezierCurve = [];
      for(let i = 0; i <= 100; i++) {
        const t = 0.01*i;
        const x0 = this.vertices.cubic[0].point.x;
        const x1 = this.vertices.cubic[0].handle.x;
        const x2 = this.vertices.cubic[1].handle.x; 
        const x3 = this.vertices.cubic[1].point.x;
        const xt = (1-t)**3*x0+3*(1-t)**2*t*x1+3*(1-t)*t**2*x2+t**3*x3;
        const y0 = this.vertices.cubic[0].point.y;
        const y1 = this.vertices.cubic[0].handle.y;
        const y2 = this.vertices.cubic[1].handle.y; 
        const y3 = this.vertices.cubic[1].point.y;
        const yt = (1-t)**3*y0+3*(1-t)**2*t*y1+3*(1-t)*t**2*y2+t**3*y3;
        this.cubicBezierCurve.push({ x:xt, y:yt });
      }
      this.ctx.strokeStyle = "rgb(0, 0, 0)";
      this.ctx.beginPath();
      this.ctx.moveTo(this.cubicBezierCurve[0].x, this.cubicBezierCurve[0].y);
      for(var j in this.cubicBezierCurve) {
        this.ctx.lineTo(this.cubicBezierCurve[j].x, this.cubicBezierCurve[j].y);
      }
      this.ctx.stroke();
    },

    drawRationalBezier: function() {
      this.cubicRationalBezierCurve = [];
      for(let i = 0; i <= 100; i++) {
        const t = 0.01*i;
        const w0 = this.vertices.cubic[0].point.w;
        const w1 = this.vertices.cubic[0].handle.w;
        const w2 = this.vertices.cubic[1].handle.w;
        const w3 = this.vertices.cubic[1].point.w;
        const x0 = this.vertices.cubic[0].point.x;
        const x1 = this.vertices.cubic[0].handle.x;
        const x2 = this.vertices.cubic[1].handle.x; 
        const x3 = this.vertices.cubic[1].point.x;
        const xtc = (1-t)**3*x0*w0+3*(1-t)**2*t*x1*w1+3*(1-t)*t**2*x2*w2+t**3*x3*w3;
        const xtp = (1-t)**3*w0+3*(1-t)**2*t*w1+3*(1-t)*t**2*w2+t**3*w3;
        const xt = xtc/xtp;
        const y0 = this.vertices.cubic[0].point.y;
        const y1 = this.vertices.cubic[0].handle.y;
        const y2 = this.vertices.cubic[1].handle.y; 
        const y3 = this.vertices.cubic[1].point.y;
        const ytc = (1-t)**3*y0*w0+3*(1-t)**2*t*y1*w1+3*(1-t)*t**2*y2*w2+t**3*y3*w3;
        const ytp = (1-t)**3*w0+3*(1-t)**2*t*w1+3*(1-t)*t**2*w2+t**3*w3;
        const yt = ytc/ytp;
        this.cubicRationalBezierCurve.push({ x:xt, y:yt });
      }
      this.ctx.strokeStyle = "rgb(255, 0, 0)";
      this.ctx.beginPath();
      this.ctx.moveTo(this.cubicRationalBezierCurve[0].x, this.cubicRationalBezierCurve[0].y);
      for(var j in this.cubicRationalBezierCurve) {
        this.ctx.lineTo(this.cubicRationalBezierCurve[j].x, this.cubicRationalBezierCurve[j].y);
      }
      this.ctx.stroke();
    },
  
    onDown: function(e) {
      var offsetX = this.canvas.getBoundingClientRect().left;
      var offsetY = this.canvas.getBoundingClientRect().top;

      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;
      for(var i in this.vertices.cubic) {
        const point = this.vertices.cubic[i].point;
        const handle = this.vertices.cubic[i].handle;
        if (point.x-5 < x && (point.x + 5) > x && point.y-5 < y && (point.y + 5) > y) {
          this.dragging = true;
          this.target = this.vertices.cubic[i].point
          this.relX = this.target.x - x;
          this.relY = this.target.y - y;
        }
        if (handle.x-5 < x && (handle.x + 5) > x && handle.y-5 < y && (handle.y + 5) > y) {
          this.dragging = true;
          this.target = this.vertices.cubic[i].handle
          this.relX = this.target.x - x;
          this.relY = this.target.y - y;
        }
      }
    },

    onMove: function(e) {
      var offsetX = this.canvas.getBoundingClientRect().left;
      var offsetY = this.canvas.getBoundingClientRect().top;

      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;

      if (this.dragging) {
        this.target.x = x + this.relX;
        this.target.y = y + this.relY;
        this.draw();
      }
    },

    onUp: function() {
      this.dragging = false;
    },
  },
  watch: {
    vertices: {
      handler: function() {
      this.draw();
      },
      deep: true
    },
    conditions: {
      handler: function() {
        this.draw();
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.canvas {
  border: 1px solid #000;
}
</style>