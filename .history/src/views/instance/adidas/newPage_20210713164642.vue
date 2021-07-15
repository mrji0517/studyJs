<template>
  <div class="wrapper">
    <div class="header">
        header...
    </div>
    <div class="center">
        center....
    </div>
    <div class="footer">
        footer....
    </div>
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
  font-size: 30px;
  display: flex;
  flex-direction: column;
  .header{
      width: 100%;
      height: 20%;
      font-size: 30px;
      background: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .center{
      width: 100%;
      height: 40%;
  }
.footer{
    flex: 1;
}
}
</style>