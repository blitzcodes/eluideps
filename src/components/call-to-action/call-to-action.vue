<template>
  <el-card class="call-to-action">
    <div class="call-to-action__title">{{title}}</div>
    <img src="//element.eleme.io/static/hamburger.50e4091.png" class="image">
    <div>
      <span>Yummy hamburger</span>
      <div class="bottom clearfix">
        <time class="time">{{ currentDate }}</time>
        <el-button type="text" class="button">Operating button</el-button>
      </div>
    </div>
  </el-card>
</template>

<script src="./call-to-action.js"></script>
