<template>
  <div id="setting">
    <div>
      setting
      <el-select v-model="value" placeholder="请选择" @change="cha($event)">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" ></el-option>
      </el-select>
    </div>
    <div style="margin-top:50px">
      <p>count:{{$store.state.count}}</p>
      <el-button type="primary">+</el-button>
      <el-button type="primary">-</el-button>
    </div>
  </div>
</template>

<script>
import './setting.scss'
import store from '@store/store'
export default {
    name:'Setting',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        count:1,
      }
    },
    store,
    methods:{
        cha(a){
            console.log(a,'6666666666')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>