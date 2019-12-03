<template>
  <div class="contact mt80" v-loading="loading">
    <img :src="img" alt="" class="w100">
    <div v-html="detail"></div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      loading:true,
      id:'',
      detail:'',
      img:'',
    };
  },

  methods:{
    getData(id){
      this.loading=true;
      this.$http.post(`api/v1/DaoBen/queryLecturerById?id=${id}`).then(res=>{
        if(res.data.msg=='ok'){
          this.detail = res.data.result.lecturerDetail;
          this.img="http://106.52.31.88:7088/images"+res.data.result.lecturerBackgroundImg;
          this.loading=false;
        }
      })
    }
  },
  mounted(){
    this.id = this.$route.query.id;
    this.getData(this.id)
  }
}
</script>

 <style lang="scss" scoped>
 
</style>