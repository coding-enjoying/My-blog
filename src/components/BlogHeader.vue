<template>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>博客</router-link>
				<router-link to="/add" exact>写博客</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default{
		name: 'blog-header'
	}
	
</script>

<style scoped>
	ul{
		list-style: none;
		text-align: center;
		margin: 0;
	}
	li{
		display: inline-block;
	}
	a{
		text-decoration: none;
		color: white;
		font-weight: bold;
		margin-right: 10px;
		padding: 6px 12px;
		border-radius: 5px;
	}
	nav{
		max-width: 600px;
		margin: 0 auto;
		padding: 20px;
		background-color: pink;
		text-align: center;
	}
	.router-link-active{
		background-color: crimson;
		opacity: 0.8;
		color: blue;
	}
</style>