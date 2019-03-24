<template>
	<div>
		<el-tag
				v-for="tag in this.$store.state.dynamicTags"
				:key="tag"
				closable
				@close="handleClose(tag)">
			{{tag}}
		</el-tag>
	</div>
</template>

<script>
	
	export default {
		name: "test4",
		// data() {
		// 	return {
		// 		dynamicTags: [
		// 			{name: '1-1', type: ''},
		// 			{name: '标签二', type: ''},
		// 			{name: '标签三', type: ''},
		// 			{name: '标签四', type: ''},
		// 			{name: '标签五', type: ''}
		// 		]
		// 	};
		// },
		methods:{
			handleClose(tag) {
				this.$store.state.dynamicTags.splice(this.$store.state.dynamicTags.indexOf(tag), 1);
			}
		},
		mounted() {
			// console.log(this.$store.state.dynamicTags)
		}

	}
</script>

<style scoped>

</style>