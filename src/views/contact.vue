<template>
  <div class="contact mt80">
    <div class="content">
      <div class="flexRol">
        <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:600px;width:480px" @click="getClickInfo" class="pd10">
          <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
          <bm-map-type  :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
          <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
          <bm-marker  :position="{lng: center.lng, lat: center.lat}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
        </baidu-map>
        <div class=" pd10">
          <h3 class="color">联系我们</h3>
          <div class="mt60">
            <p class="pd10">公司名称：深圳市道本君逸贸易有限公司</p>
            <p class="pd10">电话：0755-89516382</p>
            <p class="pd10">地址：广东省深圳市龙岗区布吉街道万科红立方大厦1508</p>
            <p class="pd10">所有画作归道本君逸版权所有，侵权必究</p>
            <div class="pic mt80 pd10">
              <span class="mt80">官方公众号</span>
              <img src="../assets/img/erweima.png" alt="" class="">
            </div>
          </div>
        </div>
        <!-- <div class="pic">
          <img src="../assets/img/erweima.png" alt="">
        </div>
        <div class="title">
          <p>深圳市道本君逸贸易有限公司</p>
          <p>电话：0755-89516382</p>
          <p>地址：广东省深圳市龙岗区布吉街道万科红立方大厦1508</p>
          <p>所有画作归道本君逸版权所有，侵权必究</p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import zx1 from '../assets/img/zixun1.png'
import zx2 from '../assets/img/zixun2.png'
export default {
  data() {
    return {
      imgList:[zx1,zx2],
      center: {lng:0, lat:0},
      zoom:20
    };
  },
  methods:{
    getClickInfo(e){
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
    handler ({BMap, map}) {
      this.center.lng =114.136215
      this.center.lat =22.604231
      this.zoom =this.zoom
    }
  },
  mounted(){
    (function(m, ei, q, i, a, j, s) {
        m[i] = m[i] || function() {
            (m[i].a = m[i].a || []).push(arguments)
        };
        j = ei.createElement(q),
            s = ei.getElementsByTagName(q)[0];
        j.async = true;
        j.charset = 'UTF-8';
        j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
        s.parentNode.insertBefore(j, s);
    })(window, document, 'script', '_MEIQIA');
    _MEIQIA('entId', 179029);
  }
}
</script>
 <style lang="scss" scoped>
 
.contact{
    width: 100%;
    height: 100%;
    .biaoti{
      display: flex;
      flex-direction: column;
      height: 400px;
      justify-content: center
    }
    .content{
      position: relative;
      top: 400px;
      margin: 0 auto;
      .flexRol{
        display: flex;
        justify-content: center;
        .pic{
          display: flex;
          // justify-content: center;
          img{
            width: 170px;
            height: 170px;
            padding: 10px;
          }
        }
        .title{
          display: flex;
          flex-direction: column;
          justify-content: center;
          p{
            padding: 4px;
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
    //  background: url('../assets/img/lianxiwo.png') no-repeat center;
    //  background-size: cover;
 }
//  .el-main{
//    overflow:visible;
//  }
</style>