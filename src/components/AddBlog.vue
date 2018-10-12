<template>
  <div id="addBlog">
    <h2>添加博客</h2>
    <form v-if="!submitted">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />

      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>

    <div v-if="submitted">
      <h3>您的博客发布成功！</h3>
    </div>

    <div class="preview">
      <h3>博客总览</h3>
      <p>博客标题: {{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addBlog',
  data () {
    return {
      blog:{
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: ['Danny','Jenny','Liming'],
      submitted: false
    }
  },
  methods:{
    post: function(){
      //将数据post到jsonplaceholder中，实际开发中的数据库中
      this.$http.post('http://jsonplaceholder.typicode.com/posts',{
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      }).then(function(data){
        // console.log(data);
        this.submitted = true;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#addBlog *{
  box-sizing: border-box;
}
#addBlog{
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea, select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkboxes label{
  display: inline-block;
  margin-top: 0;
}
#checkboxes input{
  margin-right: 10px;
}
button{
  display: block;
  padding: 7px;
  margin: 10px 0;
  background-color: crimson;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
.preview{
  margin:30px 0;
  padding: 10px 20px;
  border: 1px dotted gray;
}
</style>
