<template>
  <div class="head">
   
    <div class="box">
     
     <ul>
      <li class="one" @click.stop="naviTo({path: '/qiangdan2'})">
        <div class="img">
          <img src="../assets/img/qd.png" class="oneimg">
        </div>
        <div>抢单</div>
      </li>
      <li class="two" @click.stop="naviTo({path: '/goodsback'})">
        <div class="img" >
          <img src="../assets/img/tuihuo.png" class="twoimg">
        </div>
        <div>商品退货</div>
      </li>
       <li class="two" @click.stop="naviTo({path: '/goodstuihuo'})">
        <div class="img">
          <img src="../assets/img/pandian.png" class="twoimg">
        </div>
        <div>商品回收</div>
      </li>
     </ul>
      
    
  </div>
      
    <router-view />
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
  export default {
    name: 'JobTai',
    data:function(){
    	return{
        tx:'抢单'
    	}
    },
    mounted(){
      this.$store.state.count = '工作台 '
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
    /*height: 110%;*/
    background: #EFEFF4;
    /*overflow: auto;*/
   	height: 84vh;
   }
   .one{
     padding-top: 0.22rem;
      height: 1.72rem;
      margin-top: 0.25rem;
   }
   .two{
    padding-top: 0.35rem;
    height: 1.6rem;
    margin-top: 0.25rem;
   }
   li{
    width:5.4rem;
   
    background: #fff;
    margin:  0 auto;
    border-radius: 0.1rem;
   
  }
  li div{
    width:100%;
    text-align: center;
  }
  .oneimg{
    width:0.62rem;
    height: 0.81rem;
    background-size: 100% 100%;
    margin:0 auto;
    margin-bottom: 0.1rem;
  }
 .twoimg{
    width:0.55rem;
    height: 0.55rem;
    background-size: 100% 100%;
    margin:0 auto;
    margin-bottom: 0.15rem;
  }
  li div{
    font-size:0.38rem;
  }
</style>