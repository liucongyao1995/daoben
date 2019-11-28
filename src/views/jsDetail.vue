<template>
  <div class="contact mt80">
    <div v-html="detail"></div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      id:'',
      detail:''
    };
  },

  methods:{
    getData(id){
      this.$http.post(`api/v1/DaoBen/queryLecturerById?id=${id}`).then(res=>{
        if(res.data.msg=='ok'){
          this.detail = res.data.result.lecturerDetail
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