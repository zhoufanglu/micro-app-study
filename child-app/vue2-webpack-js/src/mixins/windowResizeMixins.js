const windowResizeMixins = {
  data() {
    return {
      window: 0,
      winHeight: 0
    }
  },
  created() {
    window.addEventListener("resize", this.fn)
    console.log("mixins-created")
  },
  methods: {
    fn() {
      console.log(14, window.innerWidth)
    }
  }
}
export default windowResizeMixins
