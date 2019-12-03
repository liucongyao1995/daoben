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
              <img :src="'http://106.52.31.88:7088/images'+list[0].img" alt=""  @click="toDetails(list[0].id)">
              <p>{{list[0].courseName}}</p>
              <div class="pd10">{{list[0].introduction}}</div>
            </el-row>
            <div class="pic">
              <div class="ttt" v-for="(item,index) in fristList" :key="index" style="font-size:10px">
                <img :src="'http://106.52.31.88:7088/images'+item.img" alt="" @click="toDetails(item.id)"/>
                <p class="font14">{{item.courseName}}</p>
                <div class="pd10 detail">{{item.introduction}}</div>
              </div> 
            </div>
          </div>
          <el-pagination background layout="prev, pager, next"  @current-change="handleCurrentChange"  :total="total" class="textCenter">
	        </el-pagination>
        </div>
    </div>
    </div>
    
  </div>
</template>
<script>

export default {
  data() {
    return {
      current:1,
      total:0,
      size:10,
      list:[{courseName:''}], //课程数据
      fristList:[]
    };
  },
  methods:{
    handleCurrentChange(val){
      this.current =val;
      this.getData();
		},
    toDetails(id){
      this.$router.push(
        {
          path:'/jishu',
          query:{
            id:id
          }
        }
      )
    },
    getData(){
       let params={
        current:this.current,
        size:this.size
      } 
      this.$http .post("api/v1/DaoBen/queryCourse",params).then(res => {
        this.list=res.data.result.records;
        this.fristList=res.data.result.records.slice(1);
        this.total = res.data.result.total;
      })
      .catch(function(error) {
        window.console.log(error);
      });
    }
  },
  created(){
     this.getData();
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
.contact{
    width: 100%;
    height: 100%;
    .mt60{
      margin-top: 60px;
      .content-course {
        padding: 50px 0;
        .course{
          width: 1000px;
          margin: 20px auto;
          .xingfu{ 
            background-color: #e4f4f4;
            img{
              text-align: center;
              width: 100%;
            }
          }
        .pic{
          .ttt{
            width: 230px;
            margin: 10px;
            height: 300px;
            display: inline-block;
            background-color: #e4f4f4;
            cursor: pointer;
            transition: all 0.6s;
            .detail{
              width: 210px;
              height: 28px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            img{
              width: 230px;
              height: 180px;
            }
        }
          img:hover{
            opacity: 0.8;
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