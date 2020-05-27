<template>
  <div>
        注意事项：echarts类图表使用的时候因为需要挂载到某个元素上，<br>
        所以要在第一次渲染完成后的生命周期调用，<br>
        在渲染之前的生命周期调用获取不到元素。<br>
        vue生命周期---mounted（挂载之后）<br>
        react生命周期---componentdidmount(第一次渲染完成之后)<br>
        <div id="echarts" style="height:500px;width:500px"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
export default {
  name: "highcharts",
  data() {
    return {
      options: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)"
            }
          }
        ]
      }
    };
  },
  methods: {
    createHighcharts() {
      var chart = Highcharts.chart("echarts", this.options);
    }
  },
  mounted() {
    this.createHighcharts();
  }
};
</script>
