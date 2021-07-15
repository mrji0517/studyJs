<template>
  <div class="wrapper">
    <div class="header">header...</div>
    <transition name="el-zoom-in-top">
      <div class="center" v-if="pack">
        <div class="title">
          <div style="width: 480px;">
            Mege L1:
          </div>
          <div style="width: 950px">
            Tip L2:
          </div>
        </div>
        <div class="txPic">
          <div class="detail">
            <template v-for="(a,i) in centerText">
              <div :key="i" style="height: 40px;width: 100%;margin-bottom: 2px;display: flex;">
                <div style="flex: 1"></div>
                <div :style="{width:a.width,backgroundColor: a.bg,opacity:0.2*(i+1)}"></div>
                <div style="flex:1;padding-top: 32px">
                  <div :style="{backgroundColor: a.bg,opacity:0.2*(i+1)}" style="width: 100%;height: 1px;"></div>
                </div>
                <div style="width: 180px;display: flex;position: relative;">
                  <div style="flex:1;padding-top: 32px">
                    <div :style="{backgroundColor: a.bg,opacity:0.2*(i+1)}" style="width: 100%;height: 1px;"></div>
                  </div>
                  <div style="position: absolute;
                  font-size: 12px;
                  width: 100%;
                  top: 0;
                  left: 0;
                  height: 32px;
                  display: flex;
                  align-items: flex-end;
                  justify-content: space-between">
                    <div style="flex: 1;text-align: left">
                      {{a.name}}
                    </div>
                    <div style="width: 30px ;display: flex;justify-content: space-between">
                      <p>:</p>
                      <p>
                        {{a.value}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>

        </div>
        <div class="linePic">
          <template v-for="(v,k,i) in centerRightN">
            <div class="item" :style="{zIndex:v.order}">
              <div :style="{width:v.width,backgroundColor:v.bg}"
                   style="height: 44px;
                 color:#bcc3cd;
                 border-radius: 22px;
                 line-height: 44px;
                 text-align: right;
                 padding-right: 40px;
                 border: 2px solid #b6bdc8;">
                <div :class="v.cName">
                  <span>{{k}}:{{v.value}} {{v.bfb}}</span>
                  <img :src="v.img" alt="">
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </transition>
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
}
</style>