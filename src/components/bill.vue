<template>
  <div class="head">
   <ul class="title">
   		<li @click='change()' :class="{'bottom':todayActive}">配送中</li>
   		<li @click='change2()' :class="{'bottom':!todayActive}">已完成</li>
   </ul>
   <ul class="content">
     <li >
       <div class="felx">
         <div class="left">
           <div class="zhandian">71122(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
     </li>

      <li>
       <div class="felx">
         <div class="left">
           <div class="zhandian">71133(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
     </li>

      <li>
       <div class="felx">
         <div class="left">
           <div class="zhandian">71155(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
     </li>
   </ul>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'Bill',
    data:function(){
    	return{
    		todayActive:true,
    		
    	}
    },
    methods:{
    	change(){
			
			this.todayActive =true
			
		},
		change2(){
			console.log(8)
			this.todayActive =false
		}
    }
    
  }
</script>

<style scoped>
   .head{
   	padding-top:1.8rem;
   	width:100%;
    height:81.3vh;
    background: #EFEFF4;
    text-align: left;
   }
   .title{
   	display: flex;
   	padding-top: 0.08rem;
   	padding-bottom: 0.08rem;
   	width:100%;
   	background:#101013;
   	opacity: 0.9;
   	position: fixed;
   	top:1rem;
   	z-index: 1000;
   }
   .title li{
   	height: 0.35rem;
   	border-right:1px solid #fff;
   	line-height: 0.35rem;
   	width:2.91rem;
   	font-size: 0.28rem;
   	color:#fff;
   	text-align: center;
   }
   .title li:last-child{
   	border:none;
   }
   .content{
    margin-left: 0.31rem;
   }
   .content li{
    width:5.4rem;
    background: #fff;
    margin-bottom: 0.23rem;
   }
   .felx{
    display: flex;
    padding-left: 0.23rem;
    padding-bottom: 0.16rem;
   }
   .left{
    width:3.12rem;
   }
  .zhandian{
    margin-top: 0.23rem;
    font-size: 0.28rem;
    color: #333;
  }
  .palce{
    font-size: 0.22rem;
    color: #666;
    margin-top: 0.1rem;
  }
  .palce span{
    display: inline-block;
    margin-left: 0.23rem;
  }
  .right div{
    width:0.94rem;
    height: 0.94rem;
    background: url('../assets/img/songing.png') no-repeat;
    background-size: 100% 100%;
    line-height: 0.53rem;
    text-align: center;
    font-size: 15px;
    color: #fff;
    margin-left: 0.6rem;
    margin-top: 0.25rem;
  }
  .down{
    padding-left: 0.23rem;
    padding-bottom: 0.22rem;
    font-size: 0.22rem;
    margin-top: 0.27rem;
  }
  .time{
    display: inline-block;
    color: red;
    
    margin-top:0.08rem;
  }
  .last{
    width:100%;
    margin:0 auto;
  }
  .bottom{
	color: red;
	border-bottom: 3px solid red;
	}
 
</style>