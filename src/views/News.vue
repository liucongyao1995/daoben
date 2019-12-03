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
      <div :key="index" class="ttt textCenter" v-for="(item,index) in tableData" @click="toDetails(item)">
        <img :src="'http://106.52.31.88:7088/images'+item.informationImg" alt="">
        <p class="mt10">{{item.informationName}}</p>
        <!-- <p class="mt10">{{item.informationDetail}}</p> -->
        <p class="mt10 mb10 write font12">{{item.informationIntroduce}}</p>
      </div> 
    </div>
    <el-pagination background layout="prev, pager, next"  @current-change="handleCurrentChange"  :total="total" class="textCenter">
		</el-pagination>
  </div>
  </div>
</template>

<script>
import jpg from '@/assets/img/1.jpg';
export default {
  name: "news",
  data() {
    return {
      current:1,
      total:0,
      size:10,
      loading: true,
      tableData:[],
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
    handleCurrentChange(val){
      this.current =val;
      this.getData();
		},
    toDetails(item){
      this.$router.push({
        path:"/newsDetails",
        query:{
          id:item.id
        }
      });
    },
    getData(){
      let params={
        current:this.current,
        size:this.size
      }
     this.$http.post("api/v1/DaoBen/queryInformation",params).then(res=>{
       if(res.data.msg=='ok'){
         this.tableData=res.data.result.records;
         this.total=res.data.result.total;
       }
     })
   }
  },
  mounted() {
    this.getData();
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
      width: 300px;
      margin: 10px;
      display: inline-block;
      background-color: #e4f4f4;
      cursor: pointer;
      transition: all 0.6s;
      img{
      width: 300px;
      height: 396px;

      }
      
    }
    .ttt:hover{
      transform: scale(1.2);
    }
  }
  }
}
</style>