<template>
  <div class="wrapper">
    <div class="header">header...</div>
    <transition name="el-zoom-in-top" >
      <div class="center" v-if="pack">
        center...
      </div>
    </transition>
    <div class="btn">
      <span class="iconB" @click="pack = !pack">
        <el-icon class="el-icon-caret-bottom" v-if="!pack"></el-icon>
        <el-icon class="el-icon-caret-top" v-if="pack"></el-icon>
      </span>
    </div>
    <div class="footer">
      <p v-for="(i, index) in footData" :key="index" :style="{ width: i.w }">
        <span class="txt"> {{ i.txt }}: </span>
        <span class="val">
          {{ i.val }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import footD from "../../../data/adidas";
export default {
  name: "adidasPage",
  data() {
    return {
      footData: [],
      pack: true,
    };
  },
  mounted() {
    console.log(footD);
    this.getFootData();
  },
  methods: {
    getFootData() {
      this.footData = JSON.parse(JSON.stringify(footD)).data.one;
    },
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
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    transition: all 2s;
    .txt {
      color: #999;
    }
    .val {
      font-size: 18px;
      font-weight: bold;
    }
    p {
      display: inline-block;
      height: 48px;
      line-height: 48px;
    }
  }
  .btn {
    width: 100%;
    text-align: center;
    .iconB {
      border-radius: 0 0 38px 38px;
      margin: 0 auto;
      display: block;
      width: 76px;
      height: 12px;
      font-size: 12px;
      line-height: 12px;
      cursor: pointer;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
    }
  }
}
</style>