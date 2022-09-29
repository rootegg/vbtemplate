<template>
  <div>{{ name }}, hi，vue!</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      name: 'jack'
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background-color: blue;
}
</style>
