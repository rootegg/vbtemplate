<script>
export default {
  name: 'app',
  data() {
    return {
      name: 'jack'
    }
  },
  render() {
    return <div>{this.name}, hi，vue!</div>
  }
}
</script>

<style lang="scss" scoped>
div {
  background-color: blue;
}
</style>
