<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    border
    lazy
    :load="load"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
  >
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="school" label="学校" width="180"> </el-table-column>
    <el-table-column prop="job" label="公司" width="180"> </el-table-column>
    <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "tableSpeacail",
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          school:"南京邮电大学",
          job:"nttdata",
          sex:"男",
          address: "上海市普陀区金沙江路 1518 弄",
          hasChildren: true,
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          school:"南京邮电大学",
          job:"nttdata",
          sex:"男",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          school:"南京邮电大学",
          job:"nttdata",
          sex:"男",
          address: "上海市普陀区金沙江路 1519 弄",
          hasChildren: true,
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          school:"南京邮电大学",
          job:"nttdata",
          sex:"男",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    load(tree, treeNode, resolve) {
      let content;
      if (tree.id == 1) {
        content = [
          {
            id: 11,
            date: "2016-05-01",
            name: "alex",
            school:"南京邮电大学",
          job:"nttdata",
          sex:"男",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            id: 12,
            date: "2016-05-01",
            name: "alex",
            school:"南京邮电大学",
          job:"nttdata",
          sex:"男",
            address: "上海市普陀区金沙江路 1519 弄",
          },
        ];
      } else {
        content = [
          {
            id: 31,
            date: "2016-05-01",
            name: "blex",
            school:"南京邮电大学",
          job:"nttdata",
          sex:"男",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            id: 32,
            date: "2016-05-01",
            name: "blex",
            school:"南京邮电大学",
          job:"nttdata",
          sex:"男",
            address: "上海市普陀区金沙江路 1519 弄",
          },
        ];
      }
      setTimeout(() => {
        resolve(content);
      }, 1000);
    },
  },
};
</script>

<style>
</style>