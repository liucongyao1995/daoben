<template>
  <div class="NewsDetails mt80">
   <div class="content" v-html="tableData.informationDetail"></div>
  </div>
</template>

<script>

export default {
  name: "NewsDetails",
  data() {
    return {
      id:'',
      tableData:[]
    };
  },

  mounted() {
    this.id =this.$route.query.id;
    this.getData();
  },
  methods: {
    async getData(){
      let res= await this.$http.post(`api/v1/DaoBen/queryInformationById?id=${this.id}`)
      if(res.data.msg=='ok'){
         this.tableData =res.data.result;
      }
      // .then(res=>{
      //   if(res.data.msg =='ok'){
      //     this.tableData =res.data.result;
      //   }
      // })
    }
  }
};
</script>

<style lang="scss" scoped>
.NewsDetails{
  height: 100%;
  width: 100%;
  .content{
    width: 600px;
    margin: 0 auto;

  }
}
</style>