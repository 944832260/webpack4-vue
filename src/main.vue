<template>
  <div id="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style>
#main {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
}
</style>
