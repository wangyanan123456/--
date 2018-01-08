<template>
  <div class="head">
   <ul class="title">
   		<li @click='change' >
   			<div :class="{'bottom':todayActive}">配送中</div>
   		</li>
   		<li @click='change2' >
   			<div :class="{'bottom':todayActive2}">已完成</div>
   		</li>
   		<!-- <li @click='change2' :class="{'bottom':todayActive2}"></li> -->
   </ul>
   <ul class="content" v-if='todayActive'>
    <li>
      <a href="../../html/billList.html">
        <div class="felx">
         <div class="left">
           <div class="zhandian">71133(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right2">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
      </a>
       
     </li>

      <li>
      <a href="../../html/billList.html">
        <div class="felx">
         <div class="left">
           <div class="zhandian">71133(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right2">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
      </a>
       
     </li>

      <li>
      <a href="../../html/billList.html">
        <div class="felx">
         <div class="left">
           <div class="zhandian">71133(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right2">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
      </a>
       
     </li>
   </ul>
   <ul class="content" v-if='todayActive2'>
    <li>
      <a href="../../html/billList.html">
        <div class="felx">
         <div class="left">
           <div class="zhandian">71133(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right2">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
      </a>
       
     </li>

      <li>
      <a href="../../html/billList.html">
        <div class="felx">
         <div class="left">
           <div class="zhandian">71133(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right2">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
      </a>
       
     </li>
      <li>
      <a href="../../html/billList.html">
        <div class="felx">
         <div class="left">
           <div class="zhandian">71133(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right2">
           <div></div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
      </a>
       
     </li>
   </ul>
  </div>
</template>
<script type="text/javascript">
import { mapState } from 'vuex'
  export default {
    name: 'Bill',
    data:function(){
    	return{
    		todayActive:true,
    		todayActive2:false
    		
    	}
    },
    mounted(){
      this.$store.state.count = '订单 '
    },
    methods:{
    	change:function(){
			
			this.todayActive =true
			this.todayActive2 = false
			
		},
		change2:function(){
			console.log(8)
			this.todayActive =false
			this.todayActive2 =true
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
   	top:1.05rem;
   	z-index: 1000;
   }
   .title li{
   	height: 0.36rem;
   	border-right:1px solid #fff;
   	line-height: 0.41rem;
   	width:2.91rem;
   	font-size: 0.28rem;
   	color:#999;
   	text-align: center;

   }
   .title div{
   		width:1rem;
   		margin: 0 auto;
   }
   .title li:last-child{
   	border-right:none;
   }
   .content{
    margin-left: 0.31rem;
   }
   .content  li{
    width:5.4rem;
    background: #fff;
    margin-bottom: 0.23rem;
   }
  .felx{
    display: flex;
    padding-left: 0.23rem;
    padding-bottom: 0.2rem;

    border-bottom: 1px solid #e5e5e5;
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
    margin-left: 0.8rem;
    margin-top: 0.25rem;
  }
  .right2 div{
    width:0.94rem;
    height: 0.94rem;
    background: url('../assets/img/songed.png') no-repeat;
    background-size: 100% 100%;
    line-height: 0.53rem;
    text-align: center;
    font-size: 15px;
    color: #fff;
    margin-left: 0.8rem;
    margin-top: 0.25rem;
  }
  .down{
     padding-left: 0.23rem;
    padding-top: 0.15rem;
    padding-bottom: 0.2rem;
    font-size: 0.22rem;
    color: #333;

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
    /*font-weight: bold;*/
	border-bottom: 2px solid #fff;
  color:#fff;
  font-weight: bold;

	}
	
 
</style>