<template>
  <div class="news">
    <banner title="婚姻幸福银行" />
    <div class="news-section" v-loading="loading">
      <div class="news-section-content">
        <img src="../assets/img/21.png" alt="">
         <div class="content-team">
          <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="(team,index) in teamItem" :key="index">
              <div class="swiper-img" v-lazy:background-image="team.img"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <img src="../assets/img/22.png" alt="">
             <div class="content-team">
          <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="(team,index) in teamItem" :key="index">
              <div class="swiper-img" v-lazy:background-image="team.img"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jpg from '@/assets/img/1.jpg';
import Banner from "../components/Banner";
export default {
  name: "news",
  components: {
    Banner
  },
  data() {
    return {
      loading: true,
      newsList: [],
      newstype: 1,
      teamItem:[
        {img:jpg},
        {img:jpg},
        {img:jpg},
        {img:jpg},
        {img:jpg}
        ]
    };
  },
  methods: {
    loadData() {
      this.loading = true;
      this.$http
        .get(`News?type=${this.newstype}&num=6`)
        .then(response => {
          //console.log(response);
          this.newsList = response.data;
          this.loading = false;
          //window.console.log(this.newsList);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  },
  mounted() {
    this.loadData();
  },
  watch: {
    newstype(type) {
      window.console.log(type);
      this.loadData();
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
@media screen and (min-width:300px) and (max-width:800px){
  .news {
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
  .news-section {
    width: 100%;
     .news-section-content {
      width: 400px;
      margin: 0 auto;
      background-color: #fff;
      text-align: center;
      img{
        width: 100%;
      }
      .content-team {
        padding: 0;
        /deep/.el-carousel__container{
          height: 180px;
        }
        .swiper-img {
          height:180px;
          background: no-repeat center;
          background-size: contain;
        }
      }
  }
  .text-decoration {
    text-decoration: none;
  }
}
}
}
.news {
  width: 100%;
  height: 100%;
  background-color: #14679f;
  position: relative;
  overflow: hidden;
  &-section {
    width: 100%;
    &-content {
      width: 1240px;
      //height: 1600px;
      margin: 0 auto;
      background-color: #fff;
      text-align: center;
      // border: 1px solid red;
          .content-team {
        padding: 50px 100px;
        .swiper-img {
          height: 400px;
          background: no-repeat center;
          background-size: cover;
        }
      }

      // .content-nav {
      //   width: 400px;
      //   height: 55px;
      //   margin: 0 auto;
      //   display: flex;
      //   //justify-content: center;
      //   align-items: center;
      //   position: relative;
      //   bottom: 30px;
      //   border: 1px solid red;

      //   &-btn {
      //     width: 50%;
      //     height: 100%;
      //     display: flex;
      //     align-items: center;
      //     justify-content: center;
      //     background-color: #e4e4e4;
      //     transition: all 0.2s;
      //   }

      //   .content-nav-active {
      //     background-color: red;
      //     color: #fff;
      //   }
      // }

      // .content-nav-item {
      //   width: 1070px;
      //   margin: 0 auto;
      //   display: flex;
      //   justify-content: flex-start;
      //   flex-wrap: wrap;
      //   //border: 1px solid blue;

      //   .item-list {
      //     width: 330px;
      //     height: 500px;
      //     display: flex;
      //     flex-direction: column;
      //     justify-content: center;
      //     align-items: center;
      //     margin: 10px 10px;
      //     border: 1px solid #15669e;

      //     &:hover {
      //       border: 1px solid #fff;
      //       box-shadow: 0 0 5px 2px #bfd3e0;
      //     }
      //     .item-img {
      //       width: 300px;
      //       height: 210px;
      //       background-color: #cecece;
      //       background-repeat: no-repeat;
      //       background-size: cover;
      //       background-position: center;
      //       background-origin: content-box;
      //     }

      //     &-title {
      //       width: 300px;
      //       height: 60px;
      //       color: #15669e;
      //       font-size: 22px;
      //       padding: 0 10px;
      //       margin: 20px 0;
      //       overflow: hidden;
      //       text-overflow: ellipsis;
      //       border-left: 1px solid #15669e;
      //     }

      //     &-content {
      //       width: 273px;
      //       height: 100px;
      //       font-size: 14px;
      //       color: gray;

      //       // 文本长度处理 begin
      //       overflow: hidden;
      //       text-overflow: ellipsis;
      //       display: -webkit-box;
      //       -webkit-line-clamp: 5;
      //       -webkit-box-orient: vertical;
      //       white-space: normal !important;
      //       word-wrap: break-word;
      //       // 文本长度处理 ending
      //     }

      //     &-more {
      //       width: 273px;
      //       padding-top: 20px;
      //       display: flex;
      //       justify-content: flex-start;
      //       align-items: center;

      //       img {
      //         width: 12px;
      //         height: 12px;
      //       }
      //       span {
      //         color: #e13834;
      //         padding: 0 5px;
      //       }
      //     }
      //   }
      // }
    }
  }
  .text-decoration {
    text-decoration: none;
  }
}
</style>