<template lang='pug'>
div
  span(class="col-1") 3次ベジェ曲線/ cubic: 
    input#cubic.bezier(type='checkbox' v-model='cubic.bezier')
    label(for='cubic.bezier') bezier
    input#cubic.rationalBezier(type='checkbox' v-model='cubic.rationalBezier')
    label(for='cubic.rationalBezier') rationalBezier
    div(v-for='(vertex, index) in this.cubic.vertices')
      div point{{index}} x:{{vertex.x}} y:{{vertex.y}} weight:
        input(type='number', v-model='vertex.w',style='width:40px;')
        input(type='range', max=10, step=0.1, v-model='vertex.w')
    div(v-for='(handle, index) in this.cubic.handles')
      div handle{{index}} x:{{handle.x}} y:{{handle.y}} weight:
        input(type='number', v-model='handle.w',style='width:40px;')
        input(type='range', max=10, step=0.1, v-model='handle.w')
  span(class="col-2") 2次ベジェ曲線 /quadratic: 
    input#quadratic.bezier(type='checkbox' v-model='quadratic.bezier')
    label(for='quadratic.bezier') bezier
    input#quadratic.rationalBezier(type='checkbox' v-model='quadratic.rationalBezier')
    label(for='quadratic.rationalBezier') rationalBezier
    div(v-for='(vertex, index) in this.quadratic.vertices')
      div point{{index}} x:{{vertex.x}} y:{{vertex.y}} weight:
        input(type='number', v-model='vertex.w',style='width:40px;')
        input(type='range', max=10, step=0.1, v-model='vertex.w')
    div(v-for='(handle, index) in this.quadratic.handles')
      div handle{{index}} x:{{handle.x}} y:{{handle.y}} weight:
        input(type='number', v-model='handle.w',style='width:40px;')
        input(type='range', max=10, step=0.1, v-model='handle.w')
  p
    span(class="col-3") 曲率 /curvature: 
      label(for='curvature.value') {{ curvature.value }}
      div
        label(for='curvature.t') position: 
        input(type='range', max=1, step=0.01, v-model='curvature.t')
        input#curvature.circle(type='checkbox' v-model='curvature.circle')
        label(for='curvature.circle') circle 
        div radius of curvature: {{ curvature.r }}
      label(for='curvature.dimension') dimension: 
        input#curvature.dimension.cubic(type='radio' v-model='curvature.dimension' value='cubic')
        label(for='curvature.dimension.cubic') cubic 
        input#curvature.dimension.quadratic(type='radio' v-model='curvature.dimension' value='quadratic')
        label(for='curvature.dimension.quadratic') quadratic 
      div
      label(for='curvature.curveType') curveType: 
        input#curvature.curveType.bezier(type='radio' v-model='curvature.curveType' value='bezier')
        label(for='curvature.curveType.bezier') bezier 
        input#curvature.curveType.rationalBezier(type='radio' v-model='curvature.curveType' value='rationalBezier')
        label(for='curvature.curveType.rationalBezier') rationalBezier       
    span(class="col-4")  3次有理ベジェ曲線をピッチでグレーディング /grading cubic rational bezier grading by pitch:
      div
        label(for='cubic.numOfSize') number of sizes: 
        input(type='number', v-model='cubic.numOfSize',style='width:40px;')
        input#cubic.gradingResult(type='checkbox' v-model='cubic.gradingResult')
        label(for='cubic.gradingResult') grading result
      b grading pitch
      div(v-for='(pitch, index) in this.cubic.pitches')
        div point{{index}} 
          label(for='pitch.x')  x:
          input(type='number', v-model='pitch.x',style='width:40px;')
          label(for='pitch.y')  y:
          input(type='number', v-model='pitch.y',style='width:40px;')
          label(for='pitch.l')  handle length:
          input(type='number', v-model='pitch.l',style='width:40px;')
          label(for='pitch.a')  angle:
          input(type='number', v-model='pitch.a',style='width:40px;')
          label(for='pitch.w')  weight:
          input(type='number', v-model='pitch.w',style='width:40px;')
  canvas#canvas(@mousedown='onDown', @mouseup='onUp', @mouseout='onUp', @mousemove='onMove')
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
        ],
      },
      quadratic: {
        bezier: true,
        rationalBezier: true,
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
            y: 50,
            w: 2
          }
        ],
      },
      curvature: {
        circle: true,
        t: 0.5,
        dimension: 'cubic',
        curveType: 'bezier'
      }
    }
  },
  mounted() {
    this.dragging = false
    this.draw()
  },
  methods: {
    getLength: function(v0, v1) {
      return Math.sqrt((v0.x-v1.x)**2+(v0.y-v1.y)**2)
    },
    getRadian: function(v0, v1) {
      return Math.atan2(v1.y-v0.y, v1.x-v0.x)
    },
    getAngle: function(v0, v1) {
      return this.getRadian(v0, v1) * 180 / Math.PI
    },

    drawCurve: function(curve, color) {
      this.ctx.strokeStyle = color
      this.ctx.beginPath()
      this.ctx.moveTo(curve[0].x, curve[0].y)
      for(var i in curve) {
        this.ctx.lineTo(curve[i].x, curve[i].y)
      }
      this.ctx.stroke()
    },

    drawPoint: function(x,y,color) {
      this.ctx.fillStyle = color
      this.ctx.fillRect(x-5, y-5, 10, 10)
    },
    draw: function() {
      this.canvas = document.getElementById('canvas')
      this.canvas.width = 1200
      this.canvas.height = 800
      document.body.appendChild(this.canvas)
      this.ctx = this.canvas.getContext('2d')
      if(this.cubic.bezier || this.cubic.rationalBezier){
        for(let i in this.cubic.vertices) {
          this.drawPoint(this.cubic.vertices[i].x, this.cubic.vertices[i].y, 'rgb(0, 0, 0)')
          this.drawPoint(this.cubic.handles[i].x, this.cubic.handles[i].y, 'rgb(0, 0, 255)')
          this.ctx.strokeStyle = 'rgb(0, 0, 255)'
          this.ctx.beginPath()
          this.ctx.moveTo(this.cubic.vertices[i].x, this.cubic.vertices[i].y)
          this.ctx.lineTo(this.cubic.handles[i].x, this.cubic.handles[i].y)
          this.ctx.stroke()
        }
        if (this.cubic.bezier) {
          const curve = this.getCubicBezier()
          this.drawCurve(curve, 'rgb(0, 0, 0)')
          if (this.curvature.circle && this.curvature.dimension == 'cubic' && this.curvature.curveType == 'bezier') {
            this.drawCurvatureCircle(curve)
          }
        }
        if (this.cubic.rationalBezier) {
          const curve = this.getCubicRationalBezier(this.cubic.vertices[0], this.cubic.vertices[1], this.cubic.handles[0], this.cubic.handles[1])
          this.drawCurve(curve, 'rgb(255, 0, 0)')
          if (this.curvature.circle && this.curvature.dimension == 'cubic' && this.curvature.curveType == 'rationalBezier') {
            this.drawCurvatureCircle(curve)
          }
          if(this.cubic.gradingResult){
            this.executeGrading()
          }
        }
      }

      if(this.quadratic.bezier || this.quadratic.rationalBezier){
        this.drawPoint(this.quadratic.handles[0].x, this.quadratic.handles[0].y, 'rgb(0, 0, 255)')
        this.ctx.strokeStyle = 'rgb(0, 0, 255)'
        for(let i in this.quadratic.vertices) {
          this.drawPoint(this.quadratic.vertices[i].x, this.quadratic.vertices[i].y, 'rgb(0, 0, 0)')
          this.ctx.fillStyle = 'rgb(0, 0, 255)'
          this.ctx.beginPath()
          this.ctx.moveTo(this.quadratic.vertices[i].x, this.quadratic.vertices[i].y)
          this.ctx.lineTo(this.quadratic.handles[0].x, this.quadratic.handles[0].y)
          this.ctx.stroke()
        }
        if (this.quadratic.bezier) {
          const curve = this.getQuadraticBezier()
          this.drawCurve(curve, 'rgb(0, 0, 0)')
          if (this.curvature.circle && this.curvature.dimension == 'quadratic' && this.curvature.curveType == 'bezier') {
            this.drawCurvatureCircle(curve)
          }          
        }
        if (this.quadratic.rationalBezier) {
          const curve = this.getQuadraticRationalBezier()
          this.drawCurve(curve, 'rgb(255, 0, 0)')
          if (this.curvature.circle && this.curvature.dimension == 'quadratic' && this.curvature.curveType == 'rationalBezier') {
            this.drawCurvatureCircle(curve)
          }  
        }
      }
    },

    getCubicBezier: function() {
      var curve = []
      var max = Math.round(1/this.dt)
      for(var i = 0; i <= max; i++) {
        const t = this.dt*i
        const x0 = this.cubic.vertices[0].x
        const x1 = this.cubic.handles[0].x
        const x2 = this.cubic.handles[1].x 
        const x3 = this.cubic.vertices[1].x
        const xt = (1-t)**3*x0+3*(1-t)**2*t*x1+3*(1-t)*t**2*x2+t**3*x3
        const y0 = this.cubic.vertices[0].y
        const y1 = this.cubic.handles[0].y
        const y2 = this.cubic.handles[1].y 
        const y3 = this.cubic.vertices[1].y
        const yt = (1-t)**3*y0+3*(1-t)**2*t*y1+3*(1-t)*t**2*y2+t**3*y3
        curve.push({ x:xt, y:yt })
      }
      return curve
    },

    getCubicRationalBezier: function(v0, v1, h0, h1) {
      var curve = []
      var max = Math.round(1/this.dt)
      for(var i = 0; i <= max; i++) {
        const t = this.dt*i
        const w0 = v0.w
        const w1 = h0.w
        const w2 = h1.w
        const w3 = v1.w
        const x0 = v0.x
        const x1 = h0.x
        const x2 = h1.x 
        const x3 = v1.x
        const xtc = (1-t)**3*x0*w0+3*(1-t)**2*t*x1*w1+3*(1-t)*t**2*x2*w2+t**3*x3*w3
        const xtp = (1-t)**3*w0+3*(1-t)**2*t*w1+3*(1-t)*t**2*w2+t**3*w3
        const xt = xtc/xtp
        const y0 = v0.y
        const y1 = h0.y
        const y2 = h1.y 
        const y3 = v1.y
        const ytc = (1-t)**3*y0*w0+3*(1-t)**2*t*y1*w1+3*(1-t)*t**2*y2*w2+t**3*y3*w3
        const ytp = (1-t)**3*w0+3*(1-t)**2*t*w1+3*(1-t)*t**2*w2+t**3*w3
        const yt = ytc/ytp
        curve.push({ x:xt, y:yt })
      }
      return curve
    },
  
    getQuadraticBezier: function() {
      var curve = []
      for(var i = 0; i <= 1/this.dt; i++) {
        const t = this.dt*i
        const x0 = this.quadratic.vertices[0].x
        const x1 = this.quadratic.handles[0].x
        const x2 = this.quadratic.vertices[1].x
        const xt = (1-t)**2*x0+2*(1-t)*t*x1+t**2*x2
        const y0 = this.quadratic.vertices[0].y
        const y1 = this.quadratic.handles[0].y
        const y2 = this.quadratic.vertices[1].y
        const yt = (1-t)**2*y0+2*(1-t)*t*y1+t**2*y2
        curve.push({ x:xt, y:yt })
      }
      return curve
    },

    getQuadraticRationalBezier: function() {
      var curve = []
      for(var i = 0; i <= 1/this.dt; i++) {
        const t = this.dt*i
        const w0 = this.quadratic.vertices[0].w
        const w1 = this.quadratic.handles[0].w
        const w2 = this.quadratic.vertices[1].w
        const x0 = this.quadratic.vertices[0].x
        const x1 = this.quadratic.handles[0].x
        const x2 = this.quadratic.vertices[1].x
        const xtc = (1-t)**2*x0*w0+2*(1-t)*t*x1*w1+t**2*x2*w2
        const xtp = (1-t)**2*w0+2*(1-t)*t*w1+t**2*w2
        const xt = xtc/xtp
        const y0 = this.quadratic.vertices[0].y
        const y1 = this.quadratic.handles[0].y
        const y2 = this.quadratic.vertices[1].y
        const ytc = (1-t)**2*y0*w0+2*(1-t)*t*y1*w1+t**2*y2*w2
        const ytp = (1-t)**2*w0+2*(1-t)*t*w1+t**2*w2
        const yt = ytc/ytp
        curve.push({ x:xt, y:yt })
      }
      return curve
    },

    drawCurvatureCircle: function(curve) {
      var i = Math.round(this.curvature.t*1/this.dt)
      this.drawPoint(curve[i].x, curve[i].y, 'rgb(0, 255, 0)')
      if (i == 0){
        i = 1
      }
      if (i == 1/this.dt){
        i = 1/this.dt - 1
      }
      var circle
      const dx = curve[i+1].x - curve[i-1].x
      const d2x = curve[i+1].x + curve[i-1].x - 2*curve[i].x
      const dy = curve[i+1].y - curve[i-1].y
      const d2y = curve[i+1].y + curve[i-1].y - 2*curve[i].y
      const dt = this.dt
      const cx = curve[i].x - ((dx/dt)**2+(dy/dt)**2)/(dx/dt*d2y/dt/dt-dy/dt*d2x/dt/dt)*dy/dt
      const cy = curve[i].y + ((dx/dt)**2+(dy/dt)**2)/(dx/dt*d2y/dt/dt-dy/dt*d2x/dt/dt)*dx/dt
      const cr = Math.abs((((dx/dt)**2 + (dy/dt)**2)**1.5)/(dx/dt*d2y/dt/dt-dy/dt*d2x/dt/dt))
      circle = ({ x:cx, y:cy, r:cr })
      this.drawPoint(circle.x, circle.y, 'rgb(0, 255, 0)')
      this.ctx.strokeStyle = 'rgb(0, 255, 0)'
      this.ctx.beginPath()
      this.ctx.moveTo(curve[i].x, curve[i].y)
      this.ctx.lineTo(circle.x, circle.y)
      this.ctx.stroke()
      this.ctx.beginPath()
      this.ctx.arc(circle.x, circle.y, circle.r, 0, 360)
      this.ctx.stroke()
      this.curvature.value = 1/circle.r
      this.curvature.r = circle.r
    },

    executeGrading: function() {
      const masterHandleRadians = [this.getRadian(this.cubic.vertices[0], this.cubic.handles[0]), this.getRadian(this.cubic.vertices[1], this.cubic.handles[1])]
      const masterHandleLengths = [this.getLength(this.cubic.vertices[0], this.cubic.handles[0]), this.getLength(this.cubic.vertices[1], this.cubic.handles[1])]
      for(let i=1; i < this.cubic.numOfSize; i++) {
        let v = [];
        let h = [];
        this.ctx.strokeStyle = 'rgb(0, 0, 255)'
        for(let j in this.cubic.vertices){
          const dx = parseFloat(this.cubic.pitches[j].x*i)
          const dy = parseFloat(this.cubic.pitches[j].y*i)
          const dw = parseFloat(this.cubic.pitches[j].w*i)
          const da = this.cubic.pitches[j].a/180*Math.PI*i
          const dl = this.cubic.pitches[j].l*i
          const vertex = {
            x: parseFloat(this.cubic.vertices[j].x) + dx,
            y: parseFloat(this.cubic.vertices[j].y) + dy,
            w: this.cubic.vertices[j].w
          }
          v.push(vertex)
          const handle = {
            x: vertex.x + (masterHandleLengths[j]+dl)*Math.cos(masterHandleRadians[j]+da),
            y: vertex.y + (masterHandleLengths[j]+dl)*Math.sin(masterHandleRadians[j]+da),
            w: parseFloat(this.cubic.handles[j].w) + dw
          }
          h.push(handle)
          this.ctx.beginPath()
          this.ctx.moveTo(vertex.x, vertex.y)
          this.ctx.lineTo(handle.x, handle.y)
          this.ctx.stroke()
        }
        const curve = this.getCubicRationalBezier(v[0], v[1], h[0], h[1])
        this.drawCurve(curve, 'rgb(255, 0, 0)')
      }
    },

    onDown: function(e) {
      var offsetX = this.canvas.getBoundingClientRect().left
      var offsetY = this.canvas.getBoundingClientRect().top

      let x = e.clientX - offsetX
      let y = e.clientY - offsetY
      for(let i in this.cubic.vertices) {
        const point = this.cubic.vertices[i]
        this.objDrag(point, x, y)
      }
      for(let i in this.cubic.handles) {
        const point = this.cubic.handles[i]
        this.objDrag(point, x, y)
      }
      for(let i in this.quadratic.vertices) {
        const point = this.quadratic.vertices[i]
        this.objDrag(point, x, y)
      }
      for(let i in this.quadratic.handles) {
        const point = this.quadratic.handles[i]
        this.objDrag(point, x, y)
      }
    },
    
    objDrag: function(point, x, y) {
        if (point.x-5 < x && (point.x + 5) > x && point.y-5 < y && (point.y + 5) > y) {
          this.dragging = true
          this.target = point
          this.relX = this.target.x - x
          this.relY = this.target.y - y
        }
    },

    onMove: function(e) {
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

    onUp: function() {
      this.dragging = false
    },
  },
  watch: {
    cubic: {
      handler: function() {
      this.draw()
      },
      deep: true
    },
    quadratic: {
      handler: function() {
        this.draw()
      },
      deep: true
    },
    curvature: {
      handler: function() {
        this.draw()
      },
      deep: true
    },
  }
}
</script>

<style scoped>
.col-1 {
    display: inline-block;
    width: 400px;
    vertical-align:top;
}
.col-2 {
    display: inline-block;
    width: 400px;
    vertical-align:top;
}
.col-3 {
    display: inline-block;
    width: 330px;
    vertical-align:top;
}
.col-4 {
    display: inline-block;
    width: 600px;
    vertical-align:top;
}
</style>