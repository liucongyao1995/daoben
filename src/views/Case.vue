<template>
  <div class="case">
    <banner img="../assets/img/bgtop.jpg" title="专业团队" />
    <div class="case-section" v-loading="loading">
      <div class="case-section-content">
        <img src="../assets/img/16.png" alt="">
        <img src="../assets/img/17.png" alt="">
        <img src="../assets/img/18.png" alt="">
        <img src="../assets/img/19.png" alt="">
        <img src="../assets/img/20.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      loading: true,
      caseList: []
    };
  },
  mounted() {
    window.console.log("case");
    this.$http
      .get("Cases/GetCasesAll")
      .then(response => {
        //console.log(response);
        this.caseList = response.data;
        //window.console.log(this.caseList);
        this.loading = false;
      })
      .catch(function(error) {
        window.console.log(error);
      });
  }
};
</script>

 <style lang="scss" scoped>
 @media screen and (min-width:300px) and (max-width:600px){
  .case {
    width: 100%;
    height: 100%;
    .banner{
      height: 160px;
      .banner .banner-title{
        font-size: 30px;
        line-height: 160px;
      }
    }
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
  position: relative;
  overflow: hidden;
  background-color: #14679f;

  &-section {
    width: 100%;
    &-content {
      width: 1240px;
      min-height: 1000px;
      margin: 0 auto;
      background-color: #fff;
      text-align: center
      img{
        // width: 100%;
      }

      // &-list {
      //   width: 100%;
      //   height: 500px;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   border: 1px solid pink;

      //   img {
      //     width: 612px;
      //     height: 314px;
      //   }
      //   .content-list-abstract {
      //     width: 290px;
      //     height: 350px;
      //     padding: 0 20px;
      //     display: flex;
      //     flex-direction: column;
      //     justify-content: space-around;
      //     .abstract-title {
      //       line-height: 30px;
      //       font-size: 22px;
      //       color: #e13834;
      //     }
      //     .abstract-content {
      //       height: 150px;
      //       color: #484848;
      //       font-size: 15px;

      //       overflow: hidden;
      //       text-overflow: ellipsis;
      //       display: -webkit-box;
      //       -webkit-line-clamp: 7;
      //       -webkit-box-orient: vertical;
      //       white-space: normal !important;
      //       word-wrap: break-word;
      //       //border: 1px solid pink;
      //     }
      //     .more {
      //       display: flex;
      //       justify-content: flex-start;
      //       .text-decoration {
      //         text-decoration: none;

      //         span {
      //           color: #000;
      //         }
      //         img {
      //           width: 12px;
      //           height: 12px;
      //         }
      //       }
      //     }
      //   }
      //   .abstract-active {
      //     order: -1;
      //   }
      // }
    }
  }
}
</style>