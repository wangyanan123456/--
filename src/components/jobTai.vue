<template>
  <div class="head">
   <h1 @click='toQiangdan'>这是抢单页面</h1>
   <h2>商品盘点</h2>
    <h2>商品退货</h2>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
// import QiangDan from '@/components/qiangdan.vue'
  export default {
    name: 'JobTai',
    data:function(){
    	return{

    	}
    },
    methods:{
    	toQiangdan:function(){
    		this.$router.push({
					path: 'qiangdan',
					
				})
    	}
    }
   
  }
</script>

<style scoped>
   
 
</style>