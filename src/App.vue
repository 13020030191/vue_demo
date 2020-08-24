<template>
  <div id="app">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      msg: '这是自己玩的vue项目, 发誓不用vue-cli222'
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  color: red
}
</style>
