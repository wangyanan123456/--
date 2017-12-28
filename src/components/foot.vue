<template>
  <div class="footer">
    <ul>
      <li >
        <router-link to = '/'>
          <div  class="img1" :style = "{background: $route.path === '/' ? '../assets/img/foot11.png' : '../assets/img/foot1.png'}"></div>
          <p :style="{color: $route.path === '/' ? 'red' : '#999'}">工作台</p>
        </router-link>
      </li>
      <li >
        <router-link to="/bill">
        <div  class="img2" :style = "{background: $route.path === '/bill' ? '../assets/img/foot22.png' : ''}"></div>
          <p :style="{color: $route.path === '/bill' ? 'red' : '#999'}">订单</p>
        </router-link>
      </li>
      <li >
        <router-link  to='/pay'>
        <div  class="img3" :style = "{background: $route.path === '/pay' ? '../assets/img/foot33.png' : ''}"></div>
           <p :style="{color: $route.path === '/pay' ? 'red' : '#999'}">付款</p>  
        </router-link>
      </li>
     
    </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Foot'
  }
</script>

<style scoped>
    .footer{
      position: fixed;
      bottom: 0rem;
      font-size: 0.2rem;
      background: red;
      height: 0.7rem; 
      padding-top: 0.07rem;
      width:100%;     
      /*line-height: 0.6rem;*/
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
   background: url('../assets/img/foot1.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;
  }
  .img2{
    background: url('../assets/img/foot2.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;

  }
  .img3{
    background: url('../assets/img/foot3.png') ;
    background-size: 100% 100%;
    height: 0.38rem;
    width:0.34rem;
    margin: 0 auto;

  }
  
 
</style>