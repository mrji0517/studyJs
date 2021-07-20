<template>
  <div class="wrapper">
    <div class="header">header...</div>
    <transition name="el-zoom-in-top">
      <div class="center" v-show="pack">
        <div id="left"></div>
        <div class="right"></div>
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
      pieData: [],
      footData: [],
      pack: true,
      myChart: null,
    };
  },
  mounted() {
    this.getFootData();
    this.initChart();
    if(this.myChart){
        this.myChart.resize();
    }
  },
  methods: {
    getFootData() {
      this.pieData = JSON.parse(JSON.stringify(footD)).data.two;
      this.footData = JSON.parse(JSON.stringify(footD)).data.one;
    },
    initChart() {
      var chartDom = document.getElementById("left");
      this.myChart = this.$echarts.init(chartDom);
       let listener= function () {
3       this.myChat.resize()
4 }
5 window.addEventListener('resize', listener)
      let option = {
        title: {
          text: "Left New Css",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
          show: false,
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "60%"],
            data: this.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      this.myChart.setOption(option);
     
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
    display: flex;
    #left {
      flex: 1;
      margin-right: 38px;
    }
    .right {
      flex: 2;
      background: #eee;
    }
  }
  .footer {
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
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