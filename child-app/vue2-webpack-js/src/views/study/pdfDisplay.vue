<template>
  <div class="p-name">
    <canvas
      style="border: solid 1px red"
      v-for="page in pdf_pages"
      :id="'the-canvas' + page"
      :key="page"
    ></canvas>
  </div>
</template>
<script>
//引入pdf.js
import PDFJS from "pdfjs-dist"
// eslint-disable-next-line no-unused-vars
import workerSrc from "pdfjs-dist/build/pdf.worker.entry"

export default {
  name: "pdfDisplay",
  data() {
    return {
      path: "/pdfDisplay",
      pdf_pages: 0 //pdf页数
    }
  },
  created() {
    this.loadTestCanvas()
  },
  methods: {
    loadTestCanvas() {
      const url = "/static/SE_BOOKING_GEN_SHAASCAVAN1000069.pdf" //pdf地址
      let loadingTask = PDFJS.getDocument(url) //url的方式，下面介绍base64方式
      loadingTask.promise.then((pdf) => {
        this.pdfDoc = pdf
        this.pdf_pages = this.pdfDoc.numPages
        this.$nextTick(() => {
          //这边pdf就一页，默认为1页
          this._renderPage(1)
        })
      })
    },
    _renderPage(num) {
      //渲染pdf页
      const that = this
      this.pdfDoc.getPage(num).then((page) => {
        let canvas = document.getElementById("the-canvas" + num)
        let ctx = canvas.getContext("2d")
        let dpr = window.devicePixelRatio || 1
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1
        let ratio = dpr / bsr
        let viewport = page.getViewport({ scale: 1 }) //缩放默认为1
        console.log(85, page)

        canvas.width = viewport.width * ratio
        canvas.height = viewport.height * ratio

        canvas.style.width = viewport.width + "px"

        that.pdf_div_width = viewport.width + "px"

        canvas.style.height = viewport.height + "px"

        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport
        }
        page.render(renderContext)
        if (this.pdf_pages > num) {
          this._renderPage(num + 1)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.p-name {
}
</style>
