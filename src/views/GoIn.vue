<template>
  <div class="go-in">
    <!-- <banner img="../assets/img/bgtop.jpg" title="公司简介" /> -->
    <el-carousel class="forImg" height="800px">
      <el-carousel-item v-for="item in Img" :key="item">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="section">
      <div class="section-content">
          <div class="content-course">
          <div class="top">
            <h3>企业简介</h3>
            <p>Company introduction</p>
            <div class="border"></div>
            <div class="timeline"></div>
          </div>
          <div  class="company">
            <p>道本君逸：道是本质，是无所不在的真理。</p>
            <p>道本君逸成立于2008年，专注女性生殖生命力健康管理与婚姻幸福文化传播。</p>
            <p>以普及女性健康管理、女性生殖抗衰、美臀抗衰、情感教育、婚姻幸福等系列营销品牌教育为主，传播女性健康美丽文化，缔造幸福女性为宗旨，打造女性由内而外的身、心、灵生殖生命力健康管理机构。
            </p>
            <p>公司注重产品的专业化与高品质，每一款产品都经过严格的临床实验和成熟的市场验证才引进，推出适合女性群体的生殖抗衰产品。
            </p>
            <p>公司以全新的人性化管理制度，凝聚了多名优秀的科研、生产技术和管理人才，拥有强
            大的销售队伍及一批由博士教授级著名保健专家、生物工程专家组成的生物工程学、中医药
            学的国家级专家智囊团队；并以准确的市场定位和独到的营销模式与全国千家美容院代理商
            结成渠道合作伙伴,每年不间断为数十万中青年女性提供全球最先近的抗衰老理念及一对一
            的个性化调理方案，帮助更多的女性建立正确的生殖健康管理观念。以造福亿万女性家庭健
            康，共享甜蜜圆满人生为使命，提高全球女性婚姻幸福指数！</p>
          </div>
        </div>
        <div class="content-course">
          <div class="top">
            <h3>发展历程</h3>
            <p>DEVELOPMENT</p>
            <div class="border"></div>
            <div class="timeline"></div>
          </div>
          <div class="course-time">
            <swiper  :options="swiperOption">
              <swiper-slide v-for="(item,index) in courseList" :key="index">
                <div class="title">{{item.Year}}年</div>
                <div class="font14" style="padding-top:10px">{{item.Content}}</div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <img src="../assets/img/hai.png" alt="" v-if="showVideo" class="point" @click="toPlay">
        <div class="p-video" >
          <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions" v-show="!showVideo">

          </video-player>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jiti from '../assets/img/jiti.jpg';
import baima from '../assets/img/bgtop.jpg';
import shidafuneng from '../assets/img/shidafuneng.jpg';
import zhuanzhu from '../assets/img/zhuanzhu.jpg';
import sixiang from '../assets/img/sixiang.jpg';
import gaoguan from '../assets/img/gaoguan.jpg';
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      showVideo:true,
      videoSrc: "http://106.52.31.88:8080/examples/move.mp4",
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0, 4.0, 8.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: "http://106.52.31.88:8080/examples/move.mp4" //url地址
          }
        ],
        poster: "../assets/img/logo.png", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true //全屏按钮
        }
      },
      Img:[zhuanzhu,baima,sixiang],
      loading: true,
      honorList: [],
      partnerImg: [],
      courseList: [
        {
          Content:'道本君逸成立，重磅推出私密抗衰项目',
          Year:'2008'
        },
        {
          Content:'产品配方荣获国家专利对于女性私密健康和年轻态有卓越的效果打造内在健康、外在性感的精致女人',
          Year:'2010'
        },
        {
          Content:'《婚姻幸福银行》创立，国内注有商标教育品牌以传播婚姻幸福为宗旨',
          Year:'2012'
        },
        {
          Content:'全面完善生殖健康品项，呵护女性同年被授予”捐资助学突出贡献企业”',
          Year:'2015'
        },
        {
          Content:'引进美臀抗衰、盆骨闭合项目立志于传播女性生殖健康管理',
          Year:'2016'
        },
        {
          Content:'授予”大爱传播企业”让更多的女性学会经营，婚姻中的智慧和幸福感',
          Year:'2017'
        },
        {
          Content:'夯实年：三年内成为广东省内生殖年轻态健康管理品牌荣获美美企业管理：“优秀企业文化奖”',
          Year:'2019'
        }  
      ],
      teamItem: [{Img:jiti},{Img:gaoguan}],
      swiperOption: {
        autoplay:{
          dely:1000
        },
        slidesPerView : 6,
        slidesPerGroup : 1,
    
      },
      dialogTableVisible: false,
      dialogUrl: "",
      dialogTitle: ""
    };
  },
  mounted() {
    
  },
  methods:{
    toPlay(){
      this.showVideo=false;
      this.$refs.videoPlayer.player.play();
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
  .go-in {
  width: 100%;
  height: 100%;
  background-color: #005737;
  .banner{
    height: 160px;
    .banner-title{
      font-size: 30px;
      line-height: 160px !important;
    } 
  }
  .section {
    width: 100%;
    .section-content {
      width:100%;
      margin: 0 auto;
      background-color: #fff;
      .content-summary {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px 0;
        .summary-left {
          width: 100%;
          .title {
            font-size: 25px;
            color: #e13834;
          }
          .eTitle {
            font-size: 17px;
            color: #e13834;
            padding: 20px 0;
          }
          .content {
            color: #14679f;
            font-size: 10px;
            text-indent: 25px;
            line-height: 30px;
            padding: 12px
          }
        }
        .summary-right {
          width: 99%;
          height: 310px;
          border: 2px solid #1d42b9;
          border-radius: 10px;
          margin-top: 10px;
          text-align: center;
          img {
            width: 360px;
            height: 270px;
            margin-top: 20px;
          }
        }
      }
      //发展历程
      .content-course {
        padding: 0;
      }
      //团队风采
      .content-team {
        padding: 0 0;
        .swiper-img {
          height: 400px;
          background: no-repeat center;
          background-size: cover;
        }
      }
    }
  }
}
.el-divider--horizontal {
  margin: 1px 0;
}
.order {
  order: -1;
}
.order-top {
  order: 1;
}
.el-divider {
  background-color: red;
  height: 3px;
  .el-divider__text {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0px;
    color: #fff;
    border: 3px solid red;
  }
}
.el-divider-active {
  background-color: #3c6088;
}
.honor-big-img {
  width: 100%;
  height: 100%;
  z-index: 10;
  text-align: center;
  padding-bottom: 20px;
  padding: 5%;
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;

    .el-dialog__body {
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
}
.go-in {
  width: 100%;
  height: 100%;
  .forImg{
    margin-top: 80px;
    img{
    width: 100%;
    height: 100%;
    }
  }
  background-color: #005737;  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .section {
    width: 100%;
    &-content {
      width:100%;
      margin: 0 auto;
      background-color: #fff;
      .content-summary {
        //height: 500px;
        display: flex;
        justify-content: space-around;
        padding: 100px 0;
        .summary-left {
          width: 600px;
          .title {
            font-size: 25px;
            color: #e13834;
          }
          .eTitle {
            font-size: 17px;
            color: #e13834;
            padding: 20px 0;
          }
          .content {
            color: #14679f;
            font-size: 14px;
            text-indent: 25px;
            line-height: 30px;
          }
        }

        .summary-right {
          width: 400px;
          height: 310px;
          border: 2px solid #1d42b9;
          //animation: imgboxkey 4s infinite;
          border-radius: 10px;
          margin-top: 80px;
          text-align: center;

          img {
            width: 360px;
            height: 270px;
            margin-top: 20px;
            //animation: imgbo 4s infinite;
          }
        }
      }

      //发展历程
      .content-course {
        padding: 50px 0;
        .company{
           width: 1000px;
          height: 400px;
          margin: 20px auto;
          p{
            text-align: left;
            padding: 15px;
          }
        }
        .course-time {
          width: 1000px;
          height: 400px;
          margin: 20px auto;

          .title{
            font-size: 24px;
            line-height: 30px;
            color: #00b5c3;
            text-align: center;
            padding-bottom: 10px;
            position: relative;
            border-bottom: 1px solid #00b5c3;
          }
          .title:after{
            content: "";
            position: absolute;
            left: 50%;
            bottom: -5px;
            background: #00b5c3;
            width: 10px;
            height: 10px;
            border-radius: 12px;
            margin-left: -10px;
          }
        }
      }
      //团队风采
      .content-team {
        padding: 50px 100px;
        .swiper-img {
          height: 400px;
          background: no-repeat center;
          background-size: cover;
        }
      }
    }
  }
}
.el-divider--horizontal {
  margin: 1px 0;
}
.order {
  order: -1;
}
.order-top {
  order: 1;
}
.el-divider {
  background-color: red;
  height: 3px;
  .el-divider__text {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 0px;
    color: #fff;
    border: 3px solid red;
  }
}
.el-divider-active {
  background-color: #3c6088;
}
.honor-big-img {
  width: 100%;
  height: 100%;
  z-index: 10;
  text-align: center;
  padding-bottom: 20px;
  padding: 5%;
  //background-color: #14679f;
  .el-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;

    .el-dialog__body {
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
</style>