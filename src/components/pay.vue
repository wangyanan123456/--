<template>
  <div class="head">
   <!-- <h1 @click='toQiangdan'>这是抢单页面</h1> -->
   <div class='head2' v-if='apper'>
   	
   </div>
   <div class="money" v-if='apper'>
   		<div class="paying">现金支付</div>
   		<div class="bottom">
      <div class="speak">
        ￥<input type="number" placeholder='请输入金额' v-model = 'rmb'>
      </div>
        <div style="display:flex">
          <div class="esc" >取消</div><div class="sure" @click='sure'>确定</div>
        </div>
   			
   		</div>
   	</div>
 
    <ul>
     <li>
	     <div class="top">
	     	<div>
	          <img src="../assets/img/qd.png">
	        </div>
	        <div class="zhandian">小麦竞园店</div>
	        <div class="detail">付款</div>
	        <div class="down" @click='turn' v-if='show'>
	        	<img src="../assets/img/down.png" >
	        </div>
	         <div class="down"  @click='turned' v-if='!show'>
	        	<img src="../assets/img/up.png" >
	        </div>
	        
	     </div>
	     <div class="show" v-if='!show'>
	     	 <div class="pay">本次应付<span>￥100.00元</span></div>
	     	 <div class="pay">上期欠款<span>￥100.00元</span></div>
	     	 <div class="pay" style="border-bottom: 1px solid #e5e5e5;padding-bottom: 0.16rem" >本次退货<span style='color:red'>-￥100.00元</span></div>
	     	 <div class="pay2" >本次实付<span>￥100.00元</span></div>
	     	 <div>
	     	 	<img src="../assets/img/pay.png">
	     	 </div>
	     	 <div class="payText">微信或支付宝扫码付款</div>
	     	<div class="top2" @click='money'>
		     	<div class="qd">
		          <img src="../assets/img/moneyPay.png">
		        </div>
		        <div class="">使用现金支付</div>
		        <div class="down2">
		        	<img src="../assets/img/paying.png" >
		        </div> 
	     	</div>
	     </div>
        
      </li>
      <li>
	     <div class="top">
	     	<div>
	          <img src="../assets/img/qd.png">
	        </div>
	        <div class="zhandian">小麦竞园店</div>
	        <div class="detail">付款</div>
	        <div class="down">
	        	<img src="../assets/img/down.png" >
	        </div>
	        
	     </div>
	     <div class="show">
	     	 <!-- <div>本次应付</div> -->
	     </div>
        
      </li>
      <li>
	     <div class="top">
	     	<div>
	          <img src="../assets/img/qd.png">
	        </div>
	        <div class="zhandian">小麦竞园店</div>
	        <div class="detail">付款</div>
	        <div class="down">
	        	<img src="../assets/img/down.png" >
	        </div>
	        
	     </div>
	     <div class="show">
	     	 <!-- <div>本次应付</div> -->
	     </div>
        
      </li>
      
    </ul>
    <div  class="toast" v-if='waring'>{{text}}</div>
    <router-view />
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'GoodsBack',
    data:function(){
    	return{
    		show:true,
    		apper:false,
    		rmb:'',
    		text:'',
    		waring:false
    	}
    },
    methods:{
    	turn:function(){
    		this.show = false
    	},
    	turned:function(){
    		this.show = true
    	},
    	money:function(){

    		this.apper = true
    	},
    	sure:function(){
    		
    		if(!this.rmb || this.rmb<0){
    			console.log('err')
    			this.text = '请填写实收现金金额'
	           	this.waring = true;
	           var that = this;
	          setTimeout(function(){
	              that.waring = false
	          },1000)
    			return
    		}else{
    			console.log(this.rmb)
    			this.text = '支付成功'
	           	this.waring = true;
	           var that = this;
	          setTimeout(function(){
	              that.waring = false
	              that.apper = false
	          },1000)
    		}
    		
    	}
    
    }
   
  }
</script>

<style scoped>
  	.head2{
  		width:100%;
  		height: 100vh;
  		background: #000;
  		opacity: 0.75;
		position: absolute;
		/*top:10px;*/
		z-index: 2000;
		top:-0.01rem;
  	}
   .head{
   	padding-top: 1.23rem;
   	text-align: left;
   }
   li{
    width:100%;
    line-height: 0.92rem;
    font-size: 0.31rem;
    color: #333;
    border-bottom: 1px solid #E5E5E5;
   }
  .top{
  	display: flex;
  	width:100%;
  }
  .top img{
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
   .down img{
   	width:0.19rem;
   	height: 0.12rem;
   	
   }
   .down{
   	margin-top: 0.16rem;
   }
   .show{
   	text-align: left;
   }
   .pay,.pay2{
   	font-size: 0.22rem;
   	color:#666;
   	height: 0.39rem;
   	line-height: 0.39rem;
   	margin-left: 0.23rem;
   }
   .pay span{
   	display: inline-block;
   	margin-left: 3.5rem;
	
   }
   .pay2 span{
    display: inline-block;
   	margin-left: 3.2rem;
    }
   .pay2{
   	font-size: 0.28rem;
   	margin-top: 0.16rem;
   }
   .show img{
   	width:2.34rem;
   	height: 2.34rem;
   	margin: 0.16rem auto;
   }
   .payText{
   	text-align: center;
   	font-size: 0.22rem;
   	color:#666;
   	line-height: 0.31rem;
   	margin-bottom: 0.08rem;
   }
   .top2{
   	display: flex;
   }
   .qd img{
   	 width:0.39rem;
    height: 0.5rem;
    margin-top: 0.23rem;
    margin-left: 0.23rem;
    margin-right: 0.14rem;
   }
   .down2{
   	margin-left: 2.94rem;
   }
   .down2 img{
   	width:0.25rem;
   	height: 0.2rem;
   	margin-top:0.4rem;

   }
   .toast{
    width:3.75rem;
    height:0.94rem;
    background:#000;
    opacity: 0.7;
    color: #fff;
    text-align: center;
    line-height: 0.94rem;
    font-size: 0.27rem;
    border-radius: 0.08rem;
    position: fixed;
    top:3.59rem;
    z-index: 4000;
    left: 1.2rem;
   }
   .money{
    width:3.91rem;
    height: 3.4rem;
    position: absolute;
    top:2.58rem;
    left: 1.03rem;
    z-index: 3000;
   }
   .paying{
   	width:3.91rem;
   	height: 0.91rem;
   	background: #5B8CFF;
   	font-size: 0.34rem;
   	line-height: 0.91rem;
   	text-align: center;
   	color: #fff;
   	border-radius: 0.11rem 0.11rem 0 0;
   }
   .bottom{
   	width:3.91rem;
   	height: 2.38rem;
   	background: #fff;
   	border-radius: 0 0 0.11rem 0.11rem;
   }
   .bottom input{
   	width:2rem;
   	height: 0.69rem;
   	border:none;
   	font-size: 0.27rem;
   	margin-top: 0.41rem;
    /*border:1px solid red;*/
   }
   .sure{
   	width: 1.7rem;
   	height: 0.67rem;
   	margin: 0.38rem auto;
   	background: #5B8CFF;
  	font-size: 0.34rem;
  	color: #fff;
  	text-align: center;
  	line-height: 0.67rem;
  	border-radius: 0.06rem;
   }
   .esc{
    width: 1.7rem;
    height: 0.67rem;
    margin: 0.38rem auto;
    background: #E5E5E5;
    font-size: 0.38rem;
    color: #999;
    text-align: center;
    line-height: 0.67rem;
    border-radius: 0.06rem;
   }
   .speak{
    width:70%;
    padding-left: 30%;
   }

</style>