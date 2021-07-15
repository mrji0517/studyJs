<template>
  <div class="wrapper">
    <div class="header">
        我是头部内容
    </div>
    <div class="center"></div>
    <div class="fotter"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  padding-right: 20px;
  .header{
      width: 100%;
      height: 20%;
      font-size: 30px;
      background: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
  }
}
</style>