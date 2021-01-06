<template>
  <div class="first-box">
    <!--这是划区-->
    <el-container>
      <!--左部-->
      <el-aside width="200px">
        <!--在上面写一个登录头像和名字-->
        <div class="title-wrapper">
          <img src="../../assets/jpg.jpg" alt="">
          <span>这是管理系统</span>
        </div>

        <!--取消掉呢个滚动条-->
        <el-scrollbar class="scrollbar">
          <!--导航窗格-->
          <!--默认那个亮 数字对应的index的取值 但是不能是可展开的-->
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
          >
            <!--不能展开的-->
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">系统首页</span>
            </el-menu-item>

            <!--可展开的-->
            <el-submenu index="2">

              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品相关</span>
              </template>

              <el-menu-item index="2-1">
                <i class="el-icon-menu"></i>
                <span slot="title">品牌管理</span>
              </el-menu-item>

              <el-menu-item index="2-2">
                <i class="el-icon-menu"></i>
                <span slot="title">分类管理</span>
              </el-menu-item>

              <el-menu-item index="2-3">
                <i class="el-icon-menu"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>

            </el-submenu>

            <!--不可点击的  disabled 这个属性一加就不能点击了 -->
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">运营商管理</span>
            </el-menu-item>

          </el-menu>
        </el-scrollbar>
      </el-aside>


      <el-container>
        <!--头部-->
        <el-header height="100px">我的管理系统</el-header>
        <!--中间块-->
        <el-main>
          <div class="main-body">
            <!--设置为可变-->
            <router-view/>
          </div>
        </el-main>
      </el-container>

    </el-container>

  </div>
</template>

<script>
export default {
  name: "first"
}
</script>

<style scoped>
/*头部*/
.el-header {
  background-color: #F56C6C;
  color: white;
  text-align: center;
  /*垂直居中  高是多少他就是多少*/
  line-height: 99.8px;
}


/*左部样式去*/
.el-aside {
  background-color: white;
  color: #444;
}

/* 这是头像 */
.title-wrapper {
  line-height: 99.8px;
  background-color: #F56C6C;
}

/*头像*/
.title-wrapper img {
  width: 45px;
  height: 45px;
  border-radius: 50%; /*这是圆角*/
  vertical-align: middle;
  margin: 0 8px 0 10px;
}

/*字体*/
.title-wrapper span {
  font-weight: 700;
  color: white;
  font-size: 18px;
}
/*去除外部滚动条*/
.scrollbar{
  height: calc(100% - 110px);
  width: 100%;
}



/*中间块*/
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
  overflow: hidden;
}
.el-container{
  height: 100%;
}
/*设置中间内部内容*/
.main-body{
  background-color: #fff;
  height: 100%;
  margin: 10px 5px 10px 5px ;
  padding: 20px 0px 0px 20px;
}


/*设置样式  这样就可以调整成满屏*/
.first-box {
  height: 100%;
}

.el-container {
  height: 100%;
}

</style>