<template>
  <div>
    <p>标题：{{name}}</p>
    <p>扶持类型：{{support_type}}</p>
    <p>发文单位：{{source}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableDetail",
  data() {
    return {
      policyId: null,
      name:'',
      source:'',
      support_type:'',
    };
  },
  created() {
    this.policyId = this.$route.params.id;
  },
  mounted(){
    this.getDetail();
  },
  methods: {
    getDetail() {
      axios
        .get("/customer/api/v1/customer/bpolicy/" + this.policyId)
        .then(res => {
          if (res.code == 200) {
              this.name = res.result.name;
              this.source = res.result.source;
              this.support_type = res.result.support_type;
          }
        });
    }
  }
};
</script>
