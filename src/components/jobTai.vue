<template>
  <div class="head">
   <!-- <h1 @click='toQiangdan'>这是抢单页面</h1> -->
  
   <!--  <ul>
     <li @click.stop="naviTo({path: '/qiangdan2'})">
        <div>
          <img src="../assets/img/qd.png">
        </div>
        <div>抢单</div>
      </li>
      <li @click.stop="naviTo({path: '/goodsback'})">
        <div>
          <img src="../assets/img/hs.png">
        </div>
        <div>商品退货</div>
      </li>
       <li @click.stop="naviTo({path: '/goodstuihuo'})">
        <div>
          <img src="../assets/img/th.png">
        </div>
        <div>商品回收</div>
      </li>
      
    </ul> -->
    <div class="box">
     
     <ul>
      <li class="one" @click.stop="naviTo({path: '/qiangdan2'})">
        <div class="img">
          <img src="../assets/img/qd.png">
        </div>
        <div>抢单</div>
      </li>
      <li class="two" @click.stop="naviTo({path: '/goodsback'})">
        <div class="img" >
          <img src="../assets/img/tuihuo.png">
        </div>
        <div>商品退货</div>
      </li>
       <li class="two">
        <div class="img">
          <img src="../assets/img/pandian.png" @click.stop="naviTo({path: '/goodstuihuo'})">
        </div>
        <div>商品盘点</div>
      </li>
     </ul>
      
    
  </div>
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
   	padding-top: 1rem;
    width:100%;
    height: 100%;
    background: #EFEFF4;
    /*overflow: auto;*/
   	height: 80vh;
   }
   li{
    width:5.23rem;
    height: 1.88rem;
    background: #fff;
    margin:  0 auto;
    padding-top: 0.22rem;
    border-radius: 0.1rem;
    margin-top: 0.32rem;
  }
  li div{
    width:100%;
    text-align: center;
  }
  li img{
    width:0.68rem;
    height: 0.68rem;
    margin:0 auto;
    margin-bottom: 0.1rem;
  }
  li div{
    font-size: 0.48rem;
  }
</style>