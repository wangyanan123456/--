<template>
  <div class="head" >
   <!-- <h1 @click='toQiangdan'>这是抢单页面</h1> -->
  <div class="backto" @click.stop="naviTo({path: '/'})">
    <img src="../assets/img/backto.png">
    <div>返回</div>
  </div>
    <ul>
      <li>
        <a href="../../html/goodstuihuo.html">
           <div>
          <img src="../assets/img/qd.png">
        </div>
        <div class="zhandian">小麦竞园店1</div>
        <div class="detail">详情></div>
        </a>
      </li>
      <li>
        <a href="../../html/goodstuihuo.html">
           <div>
          <img src="../assets/img/qd.png">
        </div>
        <div class="zhandian">小麦竞园店2</div>
        <div class="detail">详情></div>
        </a>
      </li>
      <li>
        <a href="../../html/goodstuihuo.html">
           <div>
          <img src="../assets/img/qd.png">
        </div>
        <div class="zhandian">小麦竞园店3</div>
        <div class="detail">详情></div>
        </a>
      </li>
    
      
    </ul>
    <router-view />
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
  export default {
    name: 'GoodsBack',
    data:function(){
    	return{

    	}
    },
    mounted(){
      this.$store.state.count = '商品退货 '
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
   li a{
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
    top:0.15rem;
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