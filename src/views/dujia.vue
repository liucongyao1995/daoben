<template>
  <div class="contact">
    <div class="mt60">
      <div class="content-course">
        <div class="top">
          <h3>课程</h3>
          <p>curriculum</p>
          <div class="border"></div>
          <div class="course">
            <!-- 版块 -->
            <el-row class="xingfu eee">
              <img src="../assets/img/1.jpg" alt=""  @click="toDetails">
              <p>婚姻幸福银行</p>
              <div>是女性展现美丽与智慧的秀场；是女性张扬活力、健康和自信的课堂；
              是女性体验高贵、荣耀、幸福的圣地！“旨在为更多女性建立正确的生活观、爱情观、家庭观和两性观，做一个内外兼修的美丽魅力女人，活出健康、美丽、快乐和自信”。
              </div>
              <div>人与人之间都有一个感情账户,一个微笑就是存了一笔爱的款项,一句尖酸刻薄的话等于提款。</div>
              <div>数不尽的掌声、共鸣、启发和感动的泪水，是每场《婚姻幸福银行》讲座的特有景色。为了让更多的女性身体更健康、家庭更幸福，我们定将全力以赴把爱一直传递下去！</div>
            </el-row>
            <!-- 1 -->
            <el-row type="flex" class="mt20" justify="space-between">
              <el-col :span="7"  class="eee" >
                <div class="img" @click="toDetails"></div>
                <p class="textCenter" @click="toDetails">爱上幸福季模式</p>
                <div style="font-size:10px">
                  <div class="p10">一套集拓客、留客、老带新、锁客、客情升级、到店率提升、充值、收现融为一体的高效营销模式。</div>
                  <div  class="p10">执行周期：30天-90天。</div>
                </div>
              </el-col>
              <el-col :span="7"  class="eee">
                <div class="img"></div>
                <p class="textCenter">21天业绩系统公司出货模型</p>
                <div style="font-size:10px">
                  <div  class="p10">1天业绩倍增系统模式</div>
                  <div  class="p10">主题：蓝丝带关爱女性生殖健康文化节</div>
                  <div  class="p10">适合对象：
                  1.新店：纳客、留客、转卡、开业庆典
                  2.老店：纳客、出货、做业绩、店庆主题沙龙
                  </div>
                </div>
              </el-col>
               <el-col :span="7"  class="eee">
                <div class="img"></div>
                <p class="textCenter">夫妻双修班</p>
                <div style="font-size:10px">
                  <div  class="p10">链接夫妻之间情感关系，形成夫妻之间的亲密关系。</div>
                </div>
              </el-col>
            </el-row>
            <!-- 2 -->
            <el-row type="flex" class="mt20" justify="space-between" >
              <el-col :span="7"  class="eee">
                <div class="img"></div>
                <p class="textCenter">幸福觉醒班</p>
                <div style="font-size:10px">
                  <div class="p10">更好让其学会情感智慧，更好的爱自己和学会用爱和情感来链接店内客户。</div>
                </div>
              </el-col>
              <el-col :span="7" class="eee">
                <div class="img"></div>
                <p class="textCenter">幸福小天使专家技术班</p>
                <div style="font-size:10px">
                  <div class="p10">专业和技术升级，让其学会公司产品的自销的能力</div>
                </div>
              </el-col>
               <el-col :span="7"  class="eee">
                <div class="img"></div>
                <p class="textCenter">丘比特天使成长训练营</p>
                <div style="font-size:10px">
                  <div class="p10">全方位打造联盟商美容师能力，增加与公司的粘性，让公司的产品出货变的更加通畅。</div>
                </div>
              </el-col>
            </el-row>
            <!-- 3 -->
            <el-row type="flex" class="mt20" justify="space-between" >
              <el-col :span="7" class="eee">
                <div class="img"></div>
                <p class="textCenter">企业文化构建与落地</p>
                <div style="font-size:10px">
                  <div class="p10">帮助公司联盟商打造属于它自己的企业文化体系，帮助店家解决产品以外问题，让公司与店家保持强粘性。</div>
                </div>
              </el-col>
              <el-col :span="7" class="eee">
                <div class="img"></div>
                <p class="textCenter">店内品项规划班</p>
                <div style="font-size:10px">
                  <div class="p10">帮助店家业绩规划，加强公司对加盟商的服务性</div>
                </div>
              </el-col>
              <el-col :span="7" class="eee">
                <div class="img"></div>
                <p class="textCenter">店庆年终答谢开业庆典活动的策划</p>
                <div style="font-size:10px">
                  <div class="p10">	回馈客户
                    	提高知名度
                    	带动销售
                    	巩固老客户
                    	开发新课源
                    	制造新鲜感
                    	普及美容知识
                    	培养顾客感情
                    </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
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