<template>
  <div class="head">
   <!-- <h1 @click='toQiangdan'>这是抢单页面</h1> -->
  <div class="backto" @click.stop="naviTo({path: '/'})">
    <img src="../assets/img/backto.png">
    <div>返回</div>
  </div>
    <ul>
     <li @click.stop="naviTo({path: '/tuihuo'})">
        <div>
          <img src="../assets/img/qd.png">
        </div>
        <div class="zhandian">小麦竞园店</div>
        <div class="detail">详情></div>
      </li>
      <li>
        <div>
          <img src="../assets/img/hs.png">
        </div>
        <div class="zhandian">花花便利店</div>
        <div class="detail">详情></div>
      </li>
       <li>
        <div>
          <img src="../assets/img/th.png">
        </div>
        <div class="zhandian">解忧杂货铺</div>
        <div class="detail">详情></div>
      </li>
      
    </ul>
    <router-view />
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'GoodsTuiHuo',
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
      },
      backto:function() {
        console.log(999)
       window.location.href='../html/goodsback2.html'; 
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
   .detail{
    color:#999;
    margin-left: 1.5rem;
   }
   .zhandian{
    width:2.5rem;
    text-align: left;
   }
   .backto{
    position: fixed;
    top:0.25rem;
    z-index: 1000;
    color: #fff;
    display: flex;
   }
   .backto img{
    width:0.16rem;
    height: 0.28rem;
    background-size: 100% 100%;
   }
   .backto div{
    margin-top: 0.25rem;
    font-size: 0.25rem;
   }
 
</style>