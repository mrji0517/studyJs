<template>
  <div class="wrapper">
    <div class="table">
      <el-table
        :data="tableData"
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        :max-height="tableHeight"
        style="width: 100%"
      >
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="school" label="学校">
        </el-table-column>
        <el-table-column prop="job" label="公司"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="button">
      <el-button @click="addTen">more...</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableT",
  data() {
    return {
      loading: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          school: "南京邮电大学",
          job: "nttdata",
          sex: "男",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          school: "南京邮电大学",
          job: "nttdata",
          sex: "男",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          school: "南京邮电大学",
          job: "nttdata",
          sex: "男",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          school: "南京邮电大学",
          job: "nttdata",
          sex: "男",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  computed: {
    tableHeight() {
      let tmp = window.screen.height - 255;
      return tmp;
    },
  }, 
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    addTen() {
      this.loading = true;
      setTimeout(this.fn, 1000);
    },
    fn() {
      this.loading = false;
      for (let i = 0; i < 9; i++) {
        this.tableData.push({
          date: "2016-05-17",
          name: "Alex",
          school: "北京邮电大学",
          job: "nttdata",
          sex: "女",
          address: "上海市普陀区金沙江路 3000 弄",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;

  .button {
    width: 100%;

    button {
      border: 0;
      border-radius: 0;
      height: 50px;
      border-bottom: 1px solid #ccc;
      width: 100%;
    }
  }
}
</style>
