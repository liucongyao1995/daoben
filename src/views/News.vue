<template>
  <div class="news mt80">
  <img src="../assets/img/gaoguan.jpg" alt="" class="w100">
  <div class="top">
    <h3>最新资讯</h3>
    <p>lecturer</p>
    <div class="border"></div>
  </div>
  <div class="lecturer">
    <div class="pic">
      <div :key="index" class="ttt textCenter" v-for="(item,index) in lecturer" @click="toDetails(item)">
        <img :src="'http://106.52.31.88:7088/images'+item.lecturerImg" alt="" class="yyy">
        <p class="mt10">{{item.lecturerName}}</p>
        <p class="mt10">{{item.lecturerIntroductionOne}}</p>
        <p class="mt10 mb10">{{item.lecturerIntroductionTwo}}</p>
        <el-button plain size="mini"  @click="toDetails(item)">查看更多</el-button>
      </div> 
    </div>
    </div>
  </div>
</template>

<script>
import jpg from '@/assets/img/1.jpg';
export default {
  name: "news",
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
   
  },
  mounted() {
  },

};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.news {
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
    }
  }
  }
}
</style>