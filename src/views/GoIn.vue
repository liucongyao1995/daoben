<template>
  <div class="go-in">
    <banner img="../assets/img/bgtop.jpg" title="公司简介" />
    <div class="section" v-loading="loading">
      <div class="section-content">
        <div class="content-summary">
          <div class="summary-left">
            <!-- <p class="title">公司简介</p> -->
            <p class="eTitle">助力国家经济发展，共创女性幸福事业</p>
            <p class="content">
              当今社会，随着女性的压力越来越大，既要承担工作的压力，又要承担家庭的压力，
              让女性备受生殖健康的困扰。根据数据调查显示，在成年女性中，90%以上的女性朋友
              患有不同程度的生殖健康问题，85.6%的离异是因为夫妻生活不和谐所致。对此，联合国
              秘书长曾在人口与发展问题特别会议中表示“国际社会在妇女生殖健康等方面面临很大挑
              战，女性生殖健康问题已经成为全球不得不认真面对的重大课题”；国家人口计生委近年
              也提出了工作目标和任务，呼吁社会“关爱女性，关注生殖健康，提高国民健康水平”。
              而在我国，拥有13.8亿人口的大国，近7亿女性、3.5亿个家庭，从经济角度分析，有
              三分之一的财富是由女性市场产生的，展望生殖健康产业市场，正以每年30%-50%的速
              度增加女性根源产业链，未来定是女性市场的下一个新的财富增长点。
            </p>
            <!-- <p class="title">公司简介</p> -->
            <p class="eTitle">一站式服务，全方位幸福解决方案</p>
            <p class="content">
              道本君逸，拥有一群精于医术更诚于品德的权威学者、专科专家；历经多年沉淀、潜心研
              发，不断创造出高标准、高品质、高安全的生殖产品系列。始终如一的科学信仰， 成就中坚品
              牌力量，使我们始终屹立于生殖健康领域前端。我们帮助亿万女性，建立正确的生殖保养观念，
              为女性朋友打造生殖生命力健康管理”五源”的幸福解决方案，守护女性根源之美。
              1、提供“私享·净源性健康管理”解决方案
              2、提供“私享·舒源性经养管理”解决方案
              3、提供“私享·悦源性和谐管理”解决方案
              4、提供“私享·唤源性抗衰管理”解决方案
              5、提供“私享·固源性动力管理”解决方案
            </p>
          </div>
          <div class="summary-right">
            <img src="../assets/img/logo.png" alt />
          </div>
        </div>
        <el-divider class="el-divider-active">
          <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
        </el-divider>
        <!-- 发展历程 -->
        <div class="content-course">
          <div class="top">
            <h3>发展历程</h3>
            <p>DEVELOPMENT</p>
            <div class="border"></div>
            <div class="timeline"></div>
          </div>
          <div class="course-time">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide v-for="(item,index) in courseList" :key="index">
                <div class="time-show">
                  <div class="time-show-item" v-for="(courseOne,one) in item" :key="one">
                    <div class="item-top" :class="{'order-top' : one%2===1}"></div>
                    <el-divider>
                      <i class="el-icon-mobile-phone"></i>
                    </el-divider>
                    <div class="item-bottom" :class="{'order' : one%2===1}">
                      <div class="item-bottom-content">
                        <p>{{courseOne.Content}}</p>
                        <p>{{courseOne.Year}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </div>

        <div class="content-culture">
          <h3>企业文化</h3>
          <h3>CULTURE</h3>
          <p>道本君逸：道是本质，是无所不在的真理。</p>
          <span>道本君逸成立于2008年，专注女性生殖生命力健康管理与婚姻幸福文化传播。</span>
          <span>以普及女性健康管理、女性生殖抗衰、美臀抗衰、情感教育、婚姻幸福等系列营销品牌教育为主，传播女性健康美丽文化，缔造幸福女性为宗旨，打造女性由内而外的身、心、灵
          生殖生命力健康管理机构。
          </span>
          <span>公司注重产品的专业化与高品质，每一款产品都经过严格的临床实验和成熟的市场验证才引进，推出适合女性群体的生殖抗衰产品。</span>
          <span>公司以全新的人性化管理制度，凝聚了多名优秀的科研、生产技术和管理人才，拥有强
大的销售队伍及一批由博士教授级著名保健专家、生物工程专家组成的生物工程学、中医药
学的国家级专家智囊团队；并以准确的市场定位和独到的营销模式与全国千家美容院代理商
结成渠道合作伙伴,每年不间断为数十万中青年女性提供全球最先近的抗衰老理念及一对一
的个性化调理方案，帮助更多的女性建立正确的生殖健康管理观念。以造福亿万女性家庭健
康，共享甜蜜圆满人生为使命，提高全球女性婚姻幸福指数！</span>
        </div>
        <!-- 公司荣誉 -->
        <!-- <div class="content-honor">
          <div class="honor-big-img">
            <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
              <img v-lazy="dialogUrl" alt />
            </el-dialog>
          </div>
          <div class="top">
            <h3>公司荣誉</h3>
            <p>HONOR</p>
            <div class="border"></div>
          </div>
          <ul class="honor-show">
            <li v-for="(honor,index) in honorList" :key="index">
              <img
                v-lazy="imgserver+honor.Img"
                @click="dialogTableVisible = true ;dialogUrl = imgserver + honor.Img;dialogTitle= honor.Remark"
              />
            </li>
          </ul>
          <p>点击图片查看大图</p>
        </div> -->
        <!-- 团队风采 -->
        <div class="content-team">
          <div class="top">
            <h3>团队风采</h3>
            <p>TEAM</p>
          </div>
          <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="(team,index) in teamItem" :key="index">
              <div class="swiper-img" v-lazy:background-image="team.Img"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- 合作伙伴 -->
        <!-- <div class="content-partner">
          <div class="top">
            <h3>合作伙伴</h3>
            <p>RARTNERS</p>
            <ul class="partner-img">
              <li v-for="(partner,i) in partnerImg" :key="i">
                <img v-lazy="imgserver+partner.Img" alt />
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import jiti from '../assets/img/jiti.jpg';
import gaoguan from '../assets/img/gaoguan.jpg';
import yier from '../assets/img/12.jpg';
import Banner from "../components/Banner";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Banner,
    swiper,
    swiperSlide
  },
  data() {
    return {
      loading: true,
      honorList: [],
      partnerImg: [],
      courseList: [
        [
          {
            Content:'道本君逸成立，重磅推出私密抗衰项目',
            Year:'2008'
          },
          {
            Content:'产品配方荣获国家专利对于女性私密健康和年轻态有卓越的效果打造内在健康、外在性感的精致女人',
            Year:'2010'
          },
        ],
        [ 
          {
            Content:'《婚姻幸福银行》创立，国内注有商标教育品牌以传播婚姻幸福为宗旨',
            Year:'2012'
          },
          {
            Content:'全面完善生殖健康品项，呵护女性同年被授予”捐资助学突出贡献企业”',
            Year:'2015'
          },
        ],
        [ 
        {
          Content:'引进美臀抗衰、盆骨闭合项目立志于传播女性生殖健康管理',
          Year:'2016'
        },
        {
          Content:'授予”大爱传播企业”让更多的女性学会经营，婚姻中的智慧和幸福感',
          Year:'2017'
        },
        ],
        [ 
        {
          Content:'夯实年：三年内成为广东省内生殖年轻态健康管理品牌荣获美美企业管理：“优秀企业文化奖”',
          Year:'2019'
        }
     
        ],      
      ],
      teamItem: [
        {Img:jiti},
        {Img:gaoguan},
        {Img:yier},

      ],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      dialogTableVisible: false,
      dialogUrl: "",
      dialogTitle: ""
    };
  },
  mounted() {
    this.$http
      .all([
        this.$http.get("Honor/GetHonorAll"),
        this.$http.get("Enterprise/GetEnterpriseAll"),
        this.$http.get(`Team/GetTeamAll`),
        this.$http.get(`Course/GetCourseAll`)
      ])
      .then(
        this.$http.spread(
          (responseHonor, responseEnterprise, responseTeam, responseCourse) => {
            this.honorList = responseHonor.data;
            this.partnerImg = responseEnterprise.data;
            // this.teamItem = responseTeam.data;

            var groupCount = Math.ceil(responseCourse.data.length / 2);
            window.console.log(groupCount);
            for (let i = 0; i < groupCount; i++) {
              let img2 = [];
              for (let j = 0; j < 2; j++) {
                if (responseCourse.data.length - 1 >= i * 2 + j) {
                  img2.push(responseCourse.data[i * 2 + j]);
                }
              }
              // this.courseList.push(img2);
            }
            window.console.log(this.courseList);
            this.loading = false;
          }
        )
      );
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
  background-color: #14679f;
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
        .course-time {
          width: 100%;
          height: 400px;
          margin: 20px auto;
          .swiper-container {
            height: 100%;
          }
          .time-show {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            .time-show-item {
              width: 350px;
              height: 100%;
              overflow: hidden;
              display: flex;
              flex-direction: column;

              .item-top,
              .item-bottom {
                height: 190px;
              }
              .item-bottom {
                // display: flex;
                // align-content: center;
                .item-bottom-content {
                  background-color: #1667a0;
                  margin: 20px 0;
                  p {
                    color: #fff;
                    text-align: center;
                    padding: 5px;
                  }
                }
              }
            }
          }
        }
      }

      //企业文化
      .content-culture {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 12px;
        background-color: #c2daeb;
        h3 {
          color: #3c6088;
          font-size: 16px;
        }
        p {
          color: #3c6088;
          font-size: 10px;
          padding: 0;
        }
        span {
          font-weight: 400;
          line-height: 26px;
          font-size: 10px;
          padding: 0;
        }
      }

      //公司荣誉
      .content-honor {
        padding: 50px 0;
        .honor-show {
          width: 1000px;
          margin: 30px auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: flex-start;

          li {
            width: 220px;
            height: 320px;
            margin-left: 15px;
            list-style: none;
            border: 1px solid palegoldenrod;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        p {
          text-align: center;
          color: #3c6088;
        }
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
      //合作伙伴
      .content-partner {
        padding: 50px 0;
        .partner-img {
          width: 950px;
          margin: 20px auto;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            width: 107px;
            height: 107px;
            list-style: none;
            margin: 10px 25px;

            img {
              width: 100%;
              height: 100%;
              border: 1px solid rgb(194, 218, 235);
            }
          }
        }
      }
    }
  }
}
@keyframes imgboxkey {
  0% {
    border: solid rgb(29, 66, 185) 2px;
  }
  40% {
    border: solid rgb(255, 255, 255) 2px;
  }
  60% {
    border: solid rgb(255, 255, 255) 2px;
  }
  100% {
    border: solid rgb(29, 66, 185) 2px;
  }
}

@keyframes imgbo {
  0% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px #ababab;
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
}
.el-divider--horizontal {
  margin: 1px 0;
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
// .swiper-button-disabled {
//   display: none;
// }
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
}

.go-in {
  width: 100%;
  height: 100%;
  background-color: #14679f;
  // position: relative;
  // overflow: hidden;
  .section {
    width: 100%;
    &-content {
      width: 1240px;
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
        .course-time {
          width: 1000px;
          height: 400px;
          margin: 20px auto;
          .swiper-container {
            height: 100%;
          }
          .time-show {
            width: 700px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            .time-show-item {
              width: 350px;
              height: 100%;
              overflow: hidden;
              display: flex;
              flex-direction: column;

              .item-top,
              .item-bottom {
                height: 190px;
              }
              .item-bottom {
                // display: flex;
                // align-content: center;
                .item-bottom-content {
                  background-color: #1667a0;
                  margin: 20px 0;
                  p {
                    color: #fff;
                    text-align: center;
                    padding: 15px;
                  }
                }
              }
            }
          }
        }
      }

      //企业文化
      .content-culture {
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 100px;
        background-color: #c2daeb;
        h3 {
          color: #3c6088;
          font-size: 26px;
        }
        p {
          color: #3c6088;
          font-size: 26px;
          padding: 5px 0;
        }
        span {
          font-weight: 400;
          line-height: 36px;
          font-size: 18px;
          padding: 5px 0;
        }
      }

      //公司荣誉
      .content-honor {
        padding: 50px 0;
        .honor-show {
          width: 1000px;
          margin: 30px auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-content: flex-start;

          li {
            width: 220px;
            height: 320px;
            margin-left: 15px;
            list-style: none;
            border: 1px solid palegoldenrod;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        p {
          text-align: center;
          color: #3c6088;
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

      //合作伙伴
      .content-partner {
        padding: 50px 0;
        .partner-img {
          width: 950px;
          margin: 20px auto;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          li {
            width: 107px;
            height: 107px;
            list-style: none;
            margin: 10px 25px;

            img {
              width: 100%;
              height: 100%;
              border: 1px solid rgb(194, 218, 235);
            }
          }
        }
      }
    }
  }
}

@keyframes imgboxkey {
  0% {
    border: solid rgb(29, 66, 185) 2px;
  }
  40% {
    border: solid rgb(255, 255, 255) 2px;
  }
  60% {
    border: solid rgb(255, 255, 255) 2px;
  }
  100% {
    border: solid rgb(29, 66, 185) 2px;
  }
}

@keyframes imgbo {
  0% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
  50% {
    transform: scale(1.1);
    box-shadow: 0px 0px 10px 5px #ababab;
  }
  100% {
    transform: scale(1);
    box-shadow: 0px 0px 0px 0px #ababab;
  }
}
.el-divider--horizontal {
  margin: 1px 0;
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
// .swiper-button-disabled {
//   display: none;
// }
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