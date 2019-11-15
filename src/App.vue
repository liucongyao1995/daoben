<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./assets/img/logo.png" alt />
        </div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
        >
          <el-menu-item index="/goin">首页</el-menu-item>
          <el-menu-item index="/product">创始人故事</el-menu-item>
          <el-menu-item index="/download">品牌文化</el-menu-item>
          <!-- <el-menu-item index="/case">专家团队</el-menu-item> -->
          <el-menu-item index="/news">婚姻幸福银行</el-menu-item>
          <el-menu-item index="/case">专家团队</el-menu-item>
          <el-menu-item index="/want">私享•源动力生殖生命力管理</el-menu-item>
          <!-- <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/news">新闻资讯</el-menu-item>
          <el-menu-item index="/product">产品中心</el-menu-item>
          <el-menu-item index="/case">经典案例</el-menu-item>
          <el-menu-item index="/goin">走进科建</el-menu-item>
          <el-menu-item index="/download">下载APP</el-menu-item> -->
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer" v-show="isShow">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>联系我们</p>
              <span>深圳市道本君逸贸易有限公司</span>
              <span>电话：0755-89516382</span>
              <span>地址：广东省深圳市龙岗区布吉街道万科红立方大厦1508</span>
            </li>
          </ul>
          <img src="./assets/img/erweima.png" alt />
        </div>
        <!-- <div class="copyright">
          <span>所有画作归道本君逸版权所有，侵权必究</span>
        </div> -->
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  }
};
</script>

<style lang="scss">
@media screen and (min-width:300px) and (max-width:800px){
  * {
  padding: 0;
  margin: 0;
  }
html,body {
  height: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width:300px !important;
  margin: 0 auto;
  .logo {
    width: 65px;
    padding: 10px;
    img {
      width: 100%;
      line-height: 60px;
    }
  }
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  height: 116px;
  overflow: hidden;
  background-color: #14679f;
  .footer-content {
    width: 376px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;
        p {
          font-size: 10px;
          color: #d4edff;
          padding: 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 0;
          font-size: 10px;
        }
      }
    }
    img {
      width: 70px;
      height: 70px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
  
}
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1240px;
  margin: 0 auto;


  .logo {
    width: 65px;
    padding: 10px;
    img {
      width: 100%;
      line-height: 60px;
    }
  }
}
.el-main {
  padding: 0 !important;
}
.footer {
  width: 100%;
  max-height: 216px;
  overflow: hidden;
  background-color: #14679f;
  &-content {
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}
</style>
