<template>
  <div class="head">
   <!-- <h1 @click='toQiangdan'>这是抢单页面</h1> -->
  
    <ul>
     <li @click.stop="naviTo({path: '/qiangdan2'})">
        <div>
          <img src="../assets/img/qd.png">
        </div>
        <div>抢单</div>
      </li>
      <li>
        <div>
          <img src="../assets/img/hs.png">
        </div>
        <div>商品回收</div>
      </li>
       <li>
        <div>
          <img src="../assets/img/th.png">
        </div>
        <div>商品退货</div>
      </li>
      
    </ul>
    <router-view />
  </div>
</template>
<script type="text/javascript">
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
      },
      naviTo({path, query}) {
        this.$router.push({
          path, query
        })
      }
    }
   
  }
</script>

<style scoped>
   .head{
   	padding-top: 1.23rem;
   	/*height: 80vh;*/
   }
   li{
    display: flex;
    width:100%;
    height: 0.92rem;
    line-height: 0.92rem;
    font-size: 0.31rem;
    color: #333;
    border-bottom: 1px solid #E5E5E5;
   }
   img{
    width:0.39rem;
    height: 0.5rem;
    margin-top: 0.23rem;
    margin-left: 0.23rem;
    margin-right: 0.14rem;
   }
 
</style>