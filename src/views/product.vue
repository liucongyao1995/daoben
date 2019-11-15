<template>
  <div class="product">
    <banner img="../assets/img/bgtop.jpg" title="创始人故事" />
    <div class="product-content" v-loading="loading">
      <div class="p-video">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </div>
      <div class="quotation">
        <img src="../assets/img/13.png" alt="">
        <img src="../assets/img/14.png" alt="">

      </div>
      <!-- 智慧女神 -->
      <div class="target">
        <h3 class="title">智慧女神</h3>
        <div class="target-img">
          <img src="../assets/img/nvshen.jpg" alt />
        </div>
      </div>
      <!--语录  -->
      <div class="quotation">
        <div >
        <img src="../assets/img/36.png" alt="">
        </div>
        <div>
          <img src="../assets/img/11.png" alt="">
        </div>
           <div>
              <img src="../assets/img/12.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  data() {
    return {
      loading: true,
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
        //poster: "../assets/img/home_top.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  components: {
    Banner
  },
  created() {
    this.$http
      .get(
        "DataDictionary/GetDataDictionaryAll?key=%E4%BA%A7%E5%93%81%E8%A7%86%E9%A2%91%E9%93%BE%E6%8E%A5"
      )
      .then(response => {
        this.videoSrc = response.data[0].Content;
        window.console.log(this.videoSrc);
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
.product {
  width: 100%;
  height: 100%;
  background-color: #14679f;
  .banner{
    height: 160px;
    .banner-title{
        font-size: 30px;
      line-height: 160px;
  
    }
  }
  .product-content {
    width:400px;
    margin: 0 auto;
    background-color: #fff;
  }
  .p-video {
    width: 360px;
    margin: 0 auto;
    padding: 10px 0;
  }
}


//传统管理模式不足
.lacking {
  height: 420px;
  padding: 20px 0;
  .story{
    padding: 40px;
    p{
      text-indent: 2em;
      padding: 4px;
      font-size: 20px;
    }
  }
}
//平台目标
.target {
  margin-top: 50px;
  &-img {
    margin-top: 50px;
    text-align: center;
    width: 100%;
    img{
      width: 100%;
    }
  }
}
.quotation{
  width: 100%;
 img{
   width: 100%;
 }
}
//公共样式
.title,
.eTitle {
  font-size: 34px;
  font-weight: 400;
  color: #333;
  text-align: center;
}
.eTitle {
  font-size: 30px;
  padding: 10px 0;
}

}

.product {
  width: 100%;
  height: 100%;
  background-color: #14679f;
}

.product-content {
  width: 1240px;
  margin: 0 auto;
  background-color: #fff;
}

.p-video {
  width: 1000px;
  margin: 0 auto;
  padding: 60px 0;
}

//传统管理模式不足
.lacking {
  height: 420px;
  padding: 20px 0;
  .story{
    padding: 40px;
    p{
      text-indent: 2em;
      padding: 4px;
      font-size: 20px;
    }
  }

}

//平台目标
.target {
  margin-top: 50px;
  &-img {
    margin-top: 50px;
    text-align: center;
    width: 100%;
    img{
      width: 100%;
    }
  }
}
.quotation{
  width: 100%;
 img{
   width: 100%;
 }
}



//公共样式
.title,
.eTitle {
  font-size: 34px;
  font-weight: 400;
  color: #333;
  text-align: center;
}
.eTitle {
  font-size: 30px;
  padding: 10px 0;
}
</style>