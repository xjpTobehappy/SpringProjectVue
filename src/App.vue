<template>
  <!--这个标签是html5的模板标签   这个标签中的内容默认是不显示的
    我们的页面只有一个  index.html  app.vue这里面的内容就是显示在index.html中的

    这里面写的东西   全部拿到以后放在index.html中  就是这么个逻辑  就这么悟吧

    template只能有一个跟标签 ！！！！！！！！！！！

    vue后缀名  是vue的组件文件  这个文件中 包含三块信息
      template：页面的html文件
      script：编写js的
      style：编写这个页面的样式
  -->
<div class="box">
  <!--表示可变-->
  <router-view/>
</div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
body,html,.box{
  width: 100%;
  height: 100%;
}
</style>
