<template lang='pug'>
div
  p display 
  p cubic: 
    input#conditions.cubic.bezier(type='checkbox' v-model='conditions.cubic.bezier')
    label(for='conditions.cubic.bezier') bezier
    input#conditions.cubic.rationalBezier(type='checkbox' v-model='conditions.cubic.rationalBezier')
    label(for='conditions.cubic.rationalBezier') rationalBezier
  p quadratic:
    input#conditions.quadratic.bezier(type='checkbox' v-model='conditions.quadratic.bezier')
    label(for='conditions.quadratic.bezier') bezier
    input#conditions.quadratic.rationalBezier(type='checkbox' v-model='conditions.quadratic.rationalBezier')
    label(for='conditions.quadratic.rationalBezier') rationalBezier
  p parameters
  div(v-for='(vertex, index) in this.points.cubic.vertices')
    p
      div point{{index}} x:{{vertex.x}} y:{{vertex.y}} weight:
        input(type='number', v-model='vertex.w')
        input(type='range', max='10', step='0.1', v-model='vertex.w')
  div(v-for='(handle, index) in this.points.cubic.handles')
    p
      div handle{{index}} x:{{handle.x}} y:{{handle.y}} weight:
        input(type='number', v-model='handle.w')
        input(type='range', max='10', step='0.1', v-model='handle.w')
  canvas#canvas(@mousedown='onDown', @mouseup='onUp', @mouseout='onUp', @mousemove='onMove')
</template>

<script>
export default {
  data() {
    return {
      conditions: {
        cubic: {
          bezier: true,
          rationalBezier: true
        },
        quadratic: {
          bezier: false,
          rationalBezier: false
        }
      },
      points: {
        cubic: {
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
              w: 1
            },
            {
              x: 300,
              y: 50,
              w: 1
            }
          ]
        },
        quadratic: {
          vertices: [
            {
              x: 550,
              y: 100,
              w: 1
            },
            {
              x: 750,
              y: 100,
              w: 1
            }
          ],
          handles: [
            {
              x: 650,
              y: 100,
              w: 1
            }
          ]
        }
      },
      cubicBezierCurve: [],
      cubicRationalBezierCurve: []
    }
  },
  mounted() {
    this.dragging = false;
    this.draw();
  },
  methods: {
    draw: function() {
      this.canvas = document.getElementById('canvas');
      this.canvas.width = 1200;
      this.canvas.height = 800;
      document.body.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      if(this.conditions.cubic.bezier || this.conditions.cubic.rationalBezier){
        for(let i in this.points.cubic.vertices) {
          this.ctx.fillStyle = 'rgb(0, 0, 0)';
          this.ctx.fillRect(this.points.cubic.vertices[i].x-5, this.points.cubic.vertices[i].y-5, 10, 10);
          this.ctx.fillStyle = 'rgb(0, 0, 255)';
          this.ctx.fillRect(this.points.cubic.handles[i].x-5, this.points.cubic.handles[i].y-5, 10, 10);
          this.ctx.strokeStyle = 'rgb(0, 0, 255)';
          this.ctx.beginPath();
          this.ctx.moveTo(this.points.cubic.vertices[i].x, this.points.cubic.vertices[i].y);
          this.ctx.lineTo(this.points.cubic.handles[i].x, this.points.cubic.handles[i].y)
          this.ctx.stroke();
        }
        if (this.conditions.cubic.bezier) {
          this.drawCubicBezier();
        }
        if (this.conditions.cubic.rationalBezier) {
          this.drawCubicRationalBezier();
        }
      }
    },

    drawCubicBezier: function() {
      this.cubicBezierCurve = [];
      for(let i = 0; i <= 100; i++) {
        const t = 0.01*i;
        const x0 = this.points.cubic.vertices[0].x;
        const x1 = this.points.cubic.handles[0].x;
        const x2 = this.points.cubic.handles[1].x; 
        const x3 = this.points.cubic.vertices[1].x;
        const xt = (1-t)**3*x0+3*(1-t)**2*t*x1+3*(1-t)*t**2*x2+t**3*x3;
        const y0 = this.points.cubic.vertices[0].y;
        const y1 = this.points.cubic.handles[0].y;
        const y2 = this.points.cubic.handles[1].y; 
        const y3 = this.points.cubic.vertices[1].y;
        const yt = (1-t)**3*y0+3*(1-t)**2*t*y1+3*(1-t)*t**2*y2+t**3*y3;
        this.cubicBezierCurve.push({ x:xt, y:yt });
      }
      this.ctx.strokeStyle = 'rgb(0, 0, 0)';
      this.ctx.beginPath();
      this.ctx.moveTo(this.cubicBezierCurve[0].x, this.cubicBezierCurve[0].y);
      for(var j in this.cubicBezierCurve) {
        this.ctx.lineTo(this.cubicBezierCurve[j].x, this.cubicBezierCurve[j].y);
      }
      this.ctx.stroke();
    },

    drawCubicRationalBezier: function() {
      this.cubicRationalBezierCurve = [];
      for(let i = 0; i <= 100; i++) {
        const t = 0.01*i;
        const w0 = this.points.cubic.vertices[0].w;
        const w1 = this.points.cubic.handles[0].w;
        const w2 = this.points.cubic.handles[1].w;
        const w3 = this.points.cubic.vertices[1].w;
        const x0 = this.points.cubic.vertices[0].x;
        const x1 = this.points.cubic.handles[0].x;
        const x2 = this.points.cubic.handles[1].x; 
        const x3 = this.points.cubic.vertices[1].x;
        const xtc = (1-t)**3*x0*w0+3*(1-t)**2*t*x1*w1+3*(1-t)*t**2*x2*w2+t**3*x3*w3;
        const xtp = (1-t)**3*w0+3*(1-t)**2*t*w1+3*(1-t)*t**2*w2+t**3*w3;
        const xt = xtc/xtp;
        const y0 = this.points.cubic.vertices[0].y;
        const y1 = this.points.cubic.handles[0].y;
        const y2 = this.points.cubic.handles[1].y; 
        const y3 = this.points.cubic.vertices[1].y;
        const ytc = (1-t)**3*y0*w0+3*(1-t)**2*t*y1*w1+3*(1-t)*t**2*y2*w2+t**3*y3*w3;
        const ytp = (1-t)**3*w0+3*(1-t)**2*t*w1+3*(1-t)*t**2*w2+t**3*w3;
        const yt = ytc/ytp;
        this.cubicRationalBezierCurve.push({ x:xt, y:yt });
      }
      this.ctx.strokeStyle = 'rgb(255, 0, 0)';
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
      for(var i in this.points.cubic.vertices) {
        const point = this.points.cubic.vertices[i];
        const handle = this.points.cubic.handles[i];
        if (point.x-5 < x && (point.x + 5) > x && point.y-5 < y && (point.y + 5) > y) {
          this.dragging = true;
          this.target = this.points.cubic.vertices[i]
          this.relX = this.target.x - x;
          this.relY = this.target.y - y;
        }
        if (handle.x-5 < x && (handle.x + 5) > x && handle.y-5 < y && (handle.y + 5) > y) {
          this.dragging = true;
          this.target = this.points.cubic.handles[i]
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
    points: {
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