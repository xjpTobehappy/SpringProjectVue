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
        <el-header height="80px">我的管理系统</el-header>
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

<!--将js代码抽取出去  然后直接引入文件就好-->
<script src="./first.js"></script>

<!--抽取css样式直接导入-->
<style src="./first.css" ></style>
