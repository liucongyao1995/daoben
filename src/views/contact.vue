<template>
  <div class="contact">
    <div class="mt60">
      <el-row>
        <el-col :span='12' class="textCenter">
          <div class="biaoti">
            <p class="font20 pd10">幸福丝带 健康抢购节</p>
            <hr>
          <p>2019年11月10-11日</p>
          </div>
          
        </el-col>
        <el-col :span='12'>
          <el-carousel height="800px">
            <el-carousel-item v-for="item in imgList" :key="item">
              <img :src="item" class="h100">
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div class="flexRol">
        <div class="pic">
          <img src="../assets/img/erweima.png" alt="">
        </div>
        <div class="title">
          <p>深圳市道本君逸贸易有限公司</p>
          <p>电话：0755-89516382</p>
          <p>地址：广东省深圳市龙岗区布吉街道万科红立方大厦1508</p>
          <p>所有画作归道本君逸版权所有，侵权必究</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import zx1 from '../assets/img/zixun1.png'
import zx2 from '../assets/img/zixun2.png'
export default {

  data() {
    return {
      imgList:[zx1,zx2]
    };
  },
}
</script>
 <style lang="scss" scoped>
 
.contact{
    width: 100%;
    height: 100%;
    .biaoti{
      display: flex;
      flex-direction: column;
      height: 400px;
      justify-content: center
    }
    .content{
      position: relative;
      top: 400px;
      margin: 0 auto;
      .flexRol{
        display: flex;
        justify-content: center;
        .pic{
          img{
            width: 170px;
            height: 170px;
            padding: 10px;
          }
        }
        .title{
          display: flex;
          flex-direction: column;
          justify-content: center;
          p{
            padding: 4px;
          }
        }

      }
    }
}
</style>
<style lang="scss">
body{
     width: 100%;
     height: 100%;
    //  background: url('../assets/img/lianxiwo.png') no-repeat center;
    //  background-size: cover;
 }
//  .el-main{
//    overflow:visible;
//  }
</style>