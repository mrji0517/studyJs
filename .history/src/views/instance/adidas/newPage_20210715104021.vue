<template>
  <div class="wrapper">
    <div class="header">
      <div class="process">
        <div class="line">
          <el-progress type="line"
                       color="#ff9700"
                       :percentage="percentage"
                       :stroke-width="2"
                       :format="format"></el-progress>
        </div>
        <div class="points">
          <div class="pointContent">
            <template v-for="i in process">
              <div :key="i.order">
                <p :class="[i.approvalResult=='3902'?'tg':i.approvalResult=='3901'?'common':'rj']"></p>
                <p class="txt">{{i.roleNameEN}}</p>
                <p v-if="i.approvalResult=='3902'" style="font-weight: 600;color: #75777a">
                  {{new Date(i.approveDate).toLocaleDateString().replace(/\//g, '/')}}
                </p>
                <div v-if="i.approvalResult=='3903'" style="display: flex;flex-direction: row">
                  <img src="../assets/icon/alert.png" alt="" style="margin-right: 8px">
                  <el-popover
                    placement="bottom"
                    v-model="visible">
                    <el-table
                      :data="tableData"
                      style="width: 100%">
                      <el-table-column
                        prop="date"
                        label="RejectDate"
                        width="120">
                      </el-table-column>
                      <el-table-column
                        prop="reason"
                        width="240"
                        label="RejectReason">
                      </el-table-column>
                    </el-table>
                    <span style="text-decoration:underline;color: #fe6060;cursor: pointer;"
                          slot="reference">See Rjt Rsn & Fbk</span>
                  </el-popover>
                </div>
            </template>
          </div>
        </div>
      </div>
      <div class="btns">
        <el-button slot="reference" type="success" @click="isSp=true">Approve</el-button>
        <el-popover
          width="300"
          v-model="visibleT">
          <p style="display: flex;flex-direction: column">
            <b>Comment</b>
            <el-input
              style="margin: 10px 0"
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="please enter content..."
              v-model="textarea">
            </el-input>
          </p>
          <div style="text-align: right; margin: 0">
            <el-button type="danger"
                       size="mini"
                       @click="visibleT = false">submit
            </el-button>
          </div>
          <el-button slot="reference" type="danger" plain>Reject</el-button>
        </el-popover>
      </div>
    </div></div>
    <div class="center">center....</div>
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