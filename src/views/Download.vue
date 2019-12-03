<template>
  <div class="download">
    <banner img="../assets/img/appDown.jpg" title="品牌文化" />
      <div class="download-section" v-loading="loading">
        <div class="download-section-content">
          <img src="../assets/img/23.png" alt="">
          <img src="../assets/img/24.png" alt="">
          <img src="../assets/img/25.png" alt="">
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
  components: {
    Banner
  }
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
      width: 400px;
      .download-section-content {
        width: 400px;
        margin: 0 auto;
        background-color: #fff;
        text-align: center;
        img{
          width: 100%;
        }
      }
    }
  }
}
.download {
  width: 100%;
  height: 100%;
  background-color: #14679f;
  position: relative;
  overflow: hidden;
  &-section {
    width: 100%;
    &-content {
      width: 1240px;
      margin: 0 auto;
      background-color: #fff;
      text-align: center;

    }
  }
}
  
</style>