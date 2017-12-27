<template>
  <div class="footer">
    <ul>
      <li >
        <router-link to = '/'>
            <!-- <div  class="img" :style = "{background: $route.path === '/' ? '/img/icon_home_press@2x.png' : ''}"></div> -->
          <p :style="{color: $route.path === '/' ? 'red' : ''}">工作台</p>
        </router-link>
      </li>
      <li >
        <router-link to="/bill">
          <p :style="{color: $route.path === '/bill' ? 'red' : ''}">订单</p>
        </router-link>
      </li>
      <li >
        <router-link  to='/pay'>
           <p :style="{color: $route.path === '/pay' ? 'red' : ''}">付款</p>  
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
      background: #fff;
      height: 0.6rem;
      line-height: 0.6rem;
    }
  .footer ul{
    display: flex;
  }
  .footer li{
    margin-left: 0.9rem;
    margin-right: 0.8rem;
  }
  .footer p{
    color: #000;
  }
 
</style>