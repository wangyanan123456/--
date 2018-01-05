<template>
  <div class="footer">
    <ul>
      <li @click='go'>
          <div  :class="($route.path === '/' || $route.path === '/qiangdan2' || $route.path === '/goodsback' || $route.path === '/goodstuihuo')?'img1':'img4'"  ></div>
          
          <p :style="{color: ($route.path === '/'|| $route.path === '/qiangdan2' || $route.path === '/goodsback' || $route.path === '/goodstuihuo') ? '#008CFF' : '#999'}">工作台</p>
      </li>
      <li  @click='go2'>
        <div  :class=" ($route.path === '/bill' )?'img2':'img5'" ></div>
          <p :style="{color: $route.path === '/bill' ? '#008CFF' : '#999'}">订单</p>
      </li>
      <li  @click='go3'>
        <div  :class="$route.path === '/pay'?'img3':'img6'" ></div>
           <p :style="{color: $route.path === '/pay' ? '#008CFF' : '#999'}">付款</p>  
      </li>
     
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Foot',
    data:function(){
      return{
      }
    },
    methods:{
      go:function(){
        
        this.$router.push('/')
      },
      go2:function(){
        this.$router.push('/bill')
      },
      go3:function(){
        this.$router.push('/pay')
      }
    }
  }
</script>

<style scoped>
    .footer{
      position: fixed;
      bottom: 0rem;
      font-size: 0.2rem;
      background: #fff;
      height: 0.7rem; 
      padding-top: 0.07rem;
      width:100%;     
    }
  .footer ul{
    display: flex;
  }
  .footer li{
    margin-left: 0.8rem;
    margin-right: 0.7rem;
  }
  .footer p{
   font-size: 0.17rem;
  }
  
  .img1{
   background: url('../assets/img/foot11.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;
  }
  .img2{
    background: url('../assets/img/foot22.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;

  }
  .img3{
    background: url('../assets/img/foot33.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;

  }
  .img4{
   background: url('../assets/img/foot1.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;
  }
  .img5{
    background: url('../assets/img/foot2.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;

  }
  .img6{
    background: url('../assets/img/foot3.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;

  }
  
  
 
</style>