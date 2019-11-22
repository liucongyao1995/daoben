<template>
  <div class="download">
    <!-- <banner img="../assets/img/appDown.jpg" title="私享•源动力生殖生命力管理" /> -->
      <div class="download-section" v-loading="loading">
        <div class="download-section-content">
          <img src="../assets/img/wuyuan.jpg" alt="">
          <img src="../assets/img/26.png" alt="">
          <img src="../assets/img/jingyuan.jpg" alt="">
          <img src="../assets/img/27.png" alt="">
          <img src="../assets/img/28.png" alt="">
          <img src="../assets/img/29.png" alt="">
          <img src="../assets/img/30.png" alt="">
          <img src="../assets/img/31.png" alt="">
          <img src="../assets/img/32.png" alt="">
          <img src="../assets/img/33.png" alt="">
          <img src="../assets/img/34.png" alt="">
          <img src="../assets/img/35.png" alt="">
          <img src="../assets/img/361.png" alt="">
          <img src="../assets/img/37.png" alt="">
          <img src="../assets/img/38.png" alt="">
          <img src="../assets/img/39.png" alt="">
          <img src="../assets/img/40.png" alt="">
          <img src="../assets/img/41.png" alt="">
          </div>
      </div>
    </div>
</template>
<script>
// import Banner from "../components/Banner";
export default {
  data(){
    return{
      loading: false,
    }
  },
  // components: {
  //   Banner
  // }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
@media screen and (min-width:300px) and (max-width:600px){
  .download {
    width: 100%;
    height: 100%;
    background-color: #14679f;
    .banner{
      height: 160px;
      .banner .banner-title{
        font-size: 30px;
        line-height: 160px;
      }
    }
    .download-section {
      width: 100%;
      .download-section-content {
        width: 400px;
        margin: 0 auto;
        background-color: #fff;
        text-align: center;
        // img{
        //     width: 100%
        // }
      }
    }
  }
}
.download {
  width: 100%;
  height: 100%;
  // background-color: #14679f;
  position: relative;
  overflow: hidden;

  &-section {
    width: 100%;
    //height: 1600px;

    &-content {
      width: 100%;
      //height: 1600px;
      margin: 0 auto;
      background-color: #fff;
      text-align: center;
      img{
          width: 100%
      }

    }
  }
}
  
</style>