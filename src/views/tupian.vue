<template>
  <div class="contact">
    <div class="mt60">
      <div class="content-course">
        <div class="top">
          <h3>照片</h3>
          <p>picture</p>
          <div class="border"></div>
          <div class="course">
            <el-row type="flex" class="mt20" justify="space-between" >
              <el-col :span="6">
                <div class="img"></div>           
              </el-col>
              <el-col :span="6">
                <div class="img"></div>           
              </el-col>
              <el-col :span="6">
                <div class="img"></div>           
              </el-col>
              <el-col :span="6">
                <div class="img"></div>           
              </el-col>
              
            </el-row>
          </div>
        
        </div>
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
    updated() {

    window.scroll(0,0);

  },
  methods:{
    toDetails(){
      this.$router.push('/newsDetails')
    }
  }
}
</script>

 <style lang="scss" scoped>
 .eee{
   background-color: #eee;
 }
 .mt20{
   margin-top: 20px;
 }
 .p10{
   padding: 10px;
 }
  .textCenter{
    text-align: center;
  }
 .top {
  h3,
  p {
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
  .border {
    border-bottom: 1px solid #3c6088;
    width: 15%;
    margin: 0 auto;
  }
}
.contact{
    width: 100%;
    height: 100%;
    .mt60{
      margin-top: 60px;
      .content-course {
        padding: 50px 0;
        .course{
          width: 1000px;
          // height: 400px;
          margin: 20px auto;
          .xingfu{ 
            img{
              text-align: center;
              width: 100%;
            }
          }
          .img:hover{
            transform: scale(1.4);
          }
          .img{
            width: 100%;
            height: 256px;
            background: url('../assets/img/1.jpg') no-repeat;
            background-size: cover;
            // background-color: red;
            cursor: pointer;
            transition: all 0.6s;
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
     background-color: #fff;
 }
 .el-main{
   overflow:visible
 }
</style>