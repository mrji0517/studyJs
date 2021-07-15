<template>
  <div class="wrapper">
    <div class="header">header...</div>
    <div class="center">center....</div>
    <div class="footer">
      <p v-for="(i, index) in footData" :key="index" :style="{width:i.w}">
        <span class="txt">
          {{ i.txt }}:
        </span>
        <span class="val">
          {{ i.val }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import footD from "../../../data/adidas"
export default {
  name:"adidasPage",
  data() {
    return {
      footData: [],
    };
  },
  mounted() {
    console.log(footD);
    this.getFootData()
  },
  methods: {
    getFootData(){
        this.footData=JSON.parse(JSON.stringify(footD)).data.one
    }
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  padding-right: 20px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 20%;
    font-size: 30px;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center {
    width: 100%;
    height: 40%;
  }
  .footer {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    line-height: 40px;
    .txt{
      color: #999;
    }
    .val{
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>