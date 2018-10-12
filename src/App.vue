<template>
  <div id="app">
    <!-- <addblog></addblog> -->
    <!-- <showblogs></showblogs> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  components: {
     AddBlog,ShowBlogs,BlogHeader
  }
}
</script>

<style>


</style>
