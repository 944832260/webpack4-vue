<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="标题" @click="router(row, column, cell, event)" >
      <template slot-scope="scope">
        <a @click="router(scope.row)" style="color:blue;cursor: pointer;">{{scope.row.name}}</a>
      </template>
    </el-table-column>
    <el-table-column prop="support_type" label="支持类型"></el-table-column>
    <el-table-column prop="preferential" label="补贴金额"></el-table-column>
    <el-table-column prop="declare_end" label="结束时间" width="180"></el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  name: "Table",
  data() {
    return {
      tableData: []
    };
  },
  created(){
    this.getTableList()
  },
  methods:{
    getTableList(){
      axios.get('/customer/api/v1/customer/bpolicy',{
        page:1,
        per_page:5,
      }).then(res=>{
        if (res.code == 200) {
          this.tableData = res.result.items;
        }
      })
    },
    router(row){
      this.$router.push('/admin/table/' + row.id)
    }
  }
  
};
</script>