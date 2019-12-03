<template>
  <div class="jishu mt80">
    <div class="content" v-html="tableData.detial"></div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      id:'',
      tableData:[]
    };
  },
  methods:{
    getData(){
      this.$http.post(`api/v1/DaoBen/queryCourseById?id=${this.id}`).then(res=>{
        if(res.data.msg=='ok'){
          this.tableData =res.data.result
        }
      })
    }
  },
  mounted(){
    this.id =this.$route.query.id;
    this.getData();
  }
}
</script>

 <style lang="scss" scoped>
 body{
     width: 100%;
     height: 100%;
 }
.jishu{
    width: 100%;
    height: 100%;   
  .content{
    width: 1000px;
    margin: 0 auto;
  }
}
</style>