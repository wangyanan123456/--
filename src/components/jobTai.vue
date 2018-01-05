<template>
  <div class="head">
   
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
       <li class="two" @click.stop="naviTo({path: '/goodstuihuo'})">
        <div class="img">
          <img src="../assets/img/pandian.png" >
        </div>
        <div>商品盘点</div>
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