<template>
  <el-container id="app">
    <el-main>
      <img class="app__logo" alt="Vue logo" src="@/assets/logo.png">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <call-to-action title="Sample CTA"/>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

</template>

<script src="./app.js"></script>
