<template>
  <div class="case mt80">
      <img src="../assets/img/gaoguan.jpg" alt="" class="w100">
      <div class="top">
        <h3>公司赋能讲师团</h3>
        <p>lecturer</p>
        <div class="border"></div>
      </div>
      <!-- 讲师介绍 -->
      <div class="lecturer">
        <div class="pic">
          <div :key="item" class="ttt" v-for="item in 9" >
            <div class="yyy"></div>
            <p>宋 姝慧</p>
            <p>深圳市道本君逸贸易有限公司总裁、《婚姻幸福银行》创始人</p>
            <p>美国心理学家约翰·格雷亲授-幸福人生教练</p>
            <p>美国爱家婚恋协会辅导师</p>
            <p>女性生命成长智慧女神</p>
          </div> 
        </div>
      </div>

      <div class="top">
        <h3>专家团</h3>
        <p>Expert group</p>
        <div class="border"></div>
      </div>
      <!-- 讲师介绍 -->
      <div class="lecturer">
        <div class="pic">
          <div :key="item" class="ttt" v-for="item in 9" >
            <div class="yyy"></div>
            <p>吕 伟</p>
            <p>精通亚太地区医学，藏医七经八脉传承人</p>
            <p>凭借对方磁场感应你的身体，健康状况了然于胸</p>
            <p>擅长调理七经八脉</p>
            <p>感受一生从未体会过的愉悦和轻松，重塑身、心、灵健康体魄</p>
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
  mounted() {

  }
};
</script>

 <style lang="scss" scoped>
 @media screen and (min-width:300px) and (max-width:600px){
  .case {
    width: 100%;
    height: 100%;
    background-color: #14679f;
    .case-section {
      width: 100%;
      .case-section-content {
        width: 400px;
        min-height: 1000px;
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
.case {
  width: 100%;
  height: 100%;
  .lecturer{
    width: 1000px;
    margin: 20px auto;
    
    .pic{
      width: 100%;
      .ttt{
        width: 230px;
        margin: 10px;
        height: 602px;
        display: inline-block;
        background-color: #e4f4f4;
        cursor: pointer;
        transition: all 0.6s;
        .yyy{
        width: 230px;
        height: 396px;
        background: url(../assets/img/song.jpg) center;
        background-size: cover;
      }
      
      }
      .ttt:hover{
        transform: scale(1.2);
        // opacity: 0.8;
      }
    }
  }
}
</style>