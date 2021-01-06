<template>
  <!--运营商管理-->
  <div class="entity-box">

    <!--操作的部分-->
    <div class="execute-box">
      <!--这个标签可以吧按钮之间的间距去掉-->
      <el-button-group>
        <!--这里面  有一些常用的样式直接看文档设置就好-->
        <el-button type="success" round size="small" style="margin-right: 3px">新建</el-button>
        <el-button type="primary" round size="small">删除</el-button>
      </el-button-group>
    </div>

    <!--搜索使用-->
    <div class="search-box"></div>

    <!--表格数据-->
    <div class="table-box">
      <!--stripe:设置为斑马线  border:设置表格框框-->
      <el-table :data="tableData" style="width: 100%" stripe border>
        <el-table-column type="selection"  align="center" width="55"/><!--这是多选框-->
        <el-table-column prop="date"  align="center" label="日期"/>
        <el-table-column prop="name"  align="center" label="姓名"/>
        <!--show-overflow-tooltip 当数据超过表格大小他就以点点点的显示  鼠标放过去弹窗展示-->
        <el-table-column prop="address"  align="center" show-overflow-tooltip label="地址"/>
        <el-table-column align="center" label="操作">
          <!--如果不用这个标签包裹  后续就无法进行点击取值  用上就好了-->
          <template>
            <el-button type="warning" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


    <!--分页-->
    <div class="page-box">
      <!--hide-on-single-page：当只有一页时分页是否隐藏   page-size：每页显示的个数  total：总条数   current-page：默认第几页亮-->
      <el-pagination
          hide-on-single-page="true"
          layout="prev, pager, next"
          :total="50">
      </el-pagination>
    </div>
  </div>

</template>

<script src="./supplier.js"></script>

<style scoped src="./supplier.css"></style>