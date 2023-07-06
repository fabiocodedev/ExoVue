<template>
    <div id="app">
		Bonjour {{ name }}
		<input type="text" id="name" v-bind:value="name"/>
	</div>
</template>

<script>
   var app = new Vue({ 
			el: '#app',
			data: {
				name: 'test'
			}
		});
</script>

<style lang="scss" scoped>

</style>