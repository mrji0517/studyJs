<template>
  <div class="wrapper">
    <div class="header">延用原来的头部内容...</div>
    <transition name="el-zoom-in-top">
      <div class="center" v-show="pack">
        <div id="left"></div>
        <div class="right">与原右侧页面不变...</div>
      </div>
    </transition>
    <div class="btn">
      <span class="iconB" @click="pack = !pack">
        <el-icon class="el-icon-caret-bottom" v-if="!pack"></el-icon>
        <el-icon class="el-icon-caret-top" v-if="pack"></el-icon>
      </span>
    </div>
    <div class="footer">
      <div class="title">POS DETAILS</div>
      <div class="table">
        <div class="content">
          <div class="row" v-for="i of 4" :key="i">
            <template v-if="footData.length && i !== 4">
              <p v-for="a of 3" :key="a">
                <span class="txt"> {{ footData[i * 3 - 4 + a].txt }}: </span>
                <span class="val">
                  {{ footData[i * 3 - 4 + a].val }}
                </span>
              </p>
            </template>
            <template v-if="footData.length && i === 4">
              <p>
                <span class="txt">
                  {{ footData[9].txt }}
                </span>
                <span class="val">
                  {{ footData[9].val }}
                </span>
              </p>
            </template>
          </div>
        </div>
      </div>
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
    window.addEventListener("resize", () => {
      this.chartResize();
    });
  },
  methods: {
    getFootData() {
      this.pieData = JSON.parse(JSON.stringify(footD)).data.two;
      this.footData = JSON.parse(JSON.stringify(footD)).data.one;
    },
    initChart() {
      var chartDom = document.getElementById("left");
      this.myChart = this.$echarts.init(chartDom);
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
            name: "PIE",
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
    chartResize() {
      if (this.myChart) {
        this.myChart.resize();
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  padding-right: 20px;
  font-size: 30px;
  .header {
    width: 100%;
    height: 160px;
    font-size: 30px;
    background: #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #979797;
    margin-bottom: 20px;
  }
  .center {
    width: 100%;
    height: 300px;
    display: flex;
    border: 1px solid #979797;
    #left {
      flex: 1;
      margin-right: 38px;
    }
    .right {
      flex: 2;
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .footer {
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    margin-top: 20px;
    border: 1px solid #979797;
    .title {
      height: 49px;
      width: 100%;
      line-height: 50px;
      padding-left: 20px;
      border-bottom: 1px solid #ececec;
    }
    .table {
      height: 350px;
      width: 100%;
      padding: 53px;
      .content {
        width: 100%;
        height: 100%;
        border: 1px solid #979797;
        display: flex;
        flex-direction: column;
        .row {
          height: 53px;
          line-height: 53px;
          display: flex;
          border-bottom: 1px solid #979797;
          &:nth-of-type(4) {
            border: 0;
            flex: 1;
          }
        }
      }
    }
    .txt {
      height: 100%;
      text-align: center;
      color: #999;
      width: 168px;
      background: #fee7c5;
      border-right: 1px solid #979797;
    }
    .val {
      flex: 1;
      padding-left: 16px;
      font-size: 18px;
      font-weight: 500;
      border-right: 1px solid #979797;
    }
    p {
      flex: 1;
      display: flex;
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