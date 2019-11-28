<template>
  <div id="app">
    <!-- <el-container> -->
      <el-header v-if="!isPhone">
        <div class="logo">
          <img src="./assets/img/logo.png" alt />
        </div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
      
          active-text-color="#619783"
        >
          <el-menu-item index="/goin">首页</el-menu-item>
          <el-menu-item index="/want">明星产品</el-menu-item>
          <el-submenu index="/dujia">
            <template slot="title">独家品牌</template>
             <el-menu-item index="/dujia/kecheng">课程</el-menu-item>
             <el-menu-item index="/tupian">图片</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="/dujia">
          
          <template slot="title">独家品牌</template>
             <el-menu-item index="/dujia-kecheng">课程</el-menu-item>
          </el-menu-item> -->

          <el-menu-item index="/case">技术支持</el-menu-item>
          <el-submenu index="/contact">
            <template slot="title">联系我们</template>
             <el-menu-item index="/news">最新资讯</el-menu-item>
             <el-menu-item index="/contact">联系我们</el-menu-item>
          </el-submenu>
          <!-- <el-menu-item index="/contact">联系我们</el-menu-item> -->
          <!-- <el-menu-item index="/want">私享•源动力生殖生命力管理</el-menu-item> -->
        </el-menu>
      </el-header>
      
      <van-dropdown-menu v-if="isPhone">
        <!-- <div class="logo">
          <img src="./assets/img/logo.png" alt />
      </div> -->
        <van-dropdown-item v-model="value1" :options="option1" @change='change(value1)'/>
      </van-dropdown-menu>
      <!-- <el-main>
       
      </el-main> -->
       <router-view />
      <!-- <div class="footer">
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
        <div class="copyright">
          <span>所有画作归道本君逸版权所有，侵权必究</span>
        </div>
      </div> -->
    <!-- </el-container> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false,
      isPhone:false,
       value1: 0,
         option1: [
        { text: '首页', value: 0,index: '/goin'},
        { text: '创始人故事', value: 1,index:'/product' },
        { text: '品牌文化', value: 2,index:'/download' },
        { text: '婚姻幸福银行', value: 3,index:'/news' },
        { text: '专家团队', value: 4,index:'/case' },
        { text: '私享•源动力生殖生命力管理', value: 5,index:'/want' }
      ],
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    },
    change(value){
      // window.console.log(value);
      this.$router.push({
        path: this.option1[value].index
      });
    }
  },
  mounted(){
    // 判断是否是移动端
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
      this.isPhone=true;
    }
    if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
      this.isPhone=false;
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
.logo {
    width: 65px;
    padding: 10px;
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
  width: 100%;
  height: 100%;
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
  height: 80px !important;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  opacity: 0.8;
  z-index: 10000;
  border-bottom: 1px solid #ccc;
  font-size: 20px;
  background-color: #fff;
  .logo {
    width: 88px;
    padding: 10px;
    img {
      width: 100%;
      line-height: 60px;
    }
  }
}
.el-main {
  padding: 0 !important;
  width: 100%;
  height: 100%;
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
<style lang="scss">
.el-submenu__title{
  font-size: 20px !important;
}
.el-menu-item{
  font-size: 20px !important;
}
.el-menu{
  background-color: transparent !important;
  // font-size: 20px;
  padding: 20px;
  font-weight: 600;
}
</style>