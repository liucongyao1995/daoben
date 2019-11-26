<template>
  <div class="tupian mt60">
   <div class="top">
      <h3>照片</h3>
      <p>picture</p>
      <div class="border"></div>
    </div>
    <div class="course">
      <div class="pic">
        <img src="../assets/img/1.jpg" alt=""  v-for="item in 20" :key="item">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
    };
  },
   
  methods:{
   
  }
}
</script>

 <style lang="scss" scoped>
  .border {
    border-bottom: 1px solid #3c6088;
    width: 15%;
    margin: 0 auto;
  }
 .top {
  h3,p {
    text-align: center;
    color: #3c6088;
    font-weight: 400;
    padding: 10px 0;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
}
.tupian{
  .course{
    width: 1000px;
    margin: 20px auto;
    .pic{
      width: 100%;
      img{
        width: 230px;
        padding: 10px;
      }
      img:hover{
        opacity: 0.8;
      }
    }
  }
}

</style>
<style lang="scss">
body{
     width: 100%;
     height: 100%;
     background-color: #fff;
 }
</style>