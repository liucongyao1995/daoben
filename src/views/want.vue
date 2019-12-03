<template>
  <div class="download ">
    <!-- <banner img="../assets/img/appDown.jpg" title="私享•源动力生殖生命力管理" /> -->
      <div class="download-section " v-loading="loading">
        <div class="download-section-content mt80 w60">
          
          <img src="../assets/img/wuyuan.jpg" alt="" >
          <div @click="toqq('#hexie')" class="hexie"></div>
          <div @click="toqq('#yang')" class="yang"></div>
          <div @click="toqq('#jiankang')" class="jiankang"></div>
          <div @click="toqq('#dongli')" class="dongli"></div>
          <div @click="toqq('#kang')" class="kang"></div>
          <img src="../assets/img/26.png" alt="" >
          <img src="../assets/img/jingyuan.jpg" alt="" id="hexie">
          <img src="../assets/img/27.png" alt="" >
          <img src="../assets/img/28.png" alt="">
          <img src="../assets/img/29.png" alt="">
          <img src="../assets/img/30.png" alt="">
          <img src="../assets/img/31.png" alt="" id="yang">
          <img src="../assets/img/32.png" alt="">
          <img src="../assets/img/33.png" alt="" >
          <img src="../assets/img/34.png" alt="" >
          <img src="../assets/img/35.png" alt="" id="jiankang">
          <img src="../assets/img/361.png" alt="" >
          <img src="../assets/img/37.png" alt="" id="dongli">
          <img src="../assets/img/38.png" alt="" >
          <img src="../assets/img/39.png" alt="">
          <img src="../assets/img/40.png" alt="" id="kang">
          <img src="../assets/img/41.png" alt="">
          </div>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      loading: false,
    }
  },
  methods:{
    toqq(id){
    document.querySelector(id).scrollIntoView();
    }
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
      width: 100%;
      .download-section-content {
        width: 400px;
        margin: 0 auto;
        background-color: #fff;
        text-align: center;
      }
    }
  }
}
.download {
  width: 100%;
  height: 100%;
  &-section {
    width: 100%;
    &-content {
      width: 100%;
      margin: 0 auto;
      background-color: #fff;
      text-align: center;
      position: relative;
      .hexie{
        position: absolute;
        top: 420px;
        left: 22%;
        width: 110px;
        border-radius: 50%;
        height: 110px;
        cursor: pointer;
      }
      .yang{
        position: absolute;
        top: 204px;
        left: 25%;
        width: 110px;
        border-radius: 50%;
        height: 110px;
        cursor: pointer;
      }
      .jiankang{
        position: absolute;
        top: 70px;
        left: 46%;
        width: 110px;
        border-radius: 50%;
        height: 110px;
        cursor: pointer;
      }
      .dongli{
        position: absolute;
        top: 202px;
        left: 762px;
        width: 110px;
        border-radius: 50%;
        height: 110px;
        cursor: pointer;
      }
      .kang{
        position: absolute;
        top: 420px;
        left: 70%;
        width: 110px;
        border-radius: 50%;
        height: 110px;
        cursor: pointer;
      }
      img{
          width: 100%
      }
    }
  }
}
  
</style>