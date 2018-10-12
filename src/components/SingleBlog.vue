<template>
	<div id="single-blog">
		<h3>{{blog.title}}</h3>
		<article>{{blog.body}}</article>
	</div>
</template>

<script>
	export default{
		name: 'single-blog',
		data(){
			return{
				id: this.$route.params.id,
				blog: {}
			}
		},
		created(){
			this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
				this.blog = data.body;
			})
			
		}
	}
</script>

<style scoped>
	#single-blog{
		max-width: 598px;
		margin: 0 auto;
		padding: 20px;
		background-color: #eee;
		border:1px dotted #aaa;
	}
</style>