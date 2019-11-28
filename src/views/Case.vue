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
          <div :key="index" class="ttt textCenter" v-for="(item,index) in lecturer" @click="toDetails(item)">
            <!-- <div class="yyy"></div> -->
            <img :src="'http://106.52.31.88:7088/images'+item.lecturerImg" alt="" class="yyy">
            <p class="mt10">{{item.lecturerName}}</p>
            <p class="mt10">{{item.lecturerIntroductionOne}}</p>
            <p class="mt10 mb10">{{item.lecturerIntroductionTwo}}</p>
            <el-button plain size="mini"  @click="toDetails(item)">查看更多</el-button>
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
          <div :key="index" class="ttt textCenter" v-for="(item,index) in expert"  @click="toDetails(item)">
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
export default {
  data() {
    return {
      tableData:[],
      lecturer:[],
      expert:[]
    };
  },
  methods:{
    toDetails(item){
      this.$router.push({
        path:'/jsDetail',
        query:{
          id:item.id
        }
      })
    },
    getData(){
      this.$http.post('api/v1/DaoBen/queryLecturer').then(res=>{
          if(res.data.msg=='ok'){
            this.tableData=res.data.result;
            this.tableData.map(item=>{
              if(item.lecturerType=='lecturer'){
                this.lecturer.push(item)
              }
              if(item.lecturerType=='expert'){
                this.expert.push(item);
              }
            })
          }
      })
    }
  },
  mounted() {
    this.getData()
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