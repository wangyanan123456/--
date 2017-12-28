<template>
  <div class="head">
   <ul>
     <li>
       <div class="felx">
         <div class="left">
           <div class="zhandian">711(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right">
           <div>抢单</div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
     </li>

      <li>
       <div class="felx">
         <div class="left">
           <div class="zhandian">711(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right">
           <div>抢单</div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
     </li>

      <li>
       <div class="felx">
         <div class="left">
           <div class="zhandian">711(竞园店)</div>
           <div class="palce">竞园艺术中心32C</div>
           <div class="palce">宋先生 <span>18831241245</span></div>
         </div>
         <div class="right">
           <div>抢单</div>
         </div>
       </div>
       <div class="down">今日<span class='time'>09:00</span>前送达 订单金额<span class='price'>¥21.00</span></div>
     </li>
   </ul>
   <div class="last">
     <div class="pull">
       <img src='../assets/img/pull.png'>
     </div>
     <p>下拉加载更多</p>
   </div>
   
  </div>
</template>
<script type="text/javascript">
  export default {
    name: '	QiangDan',
     data:function(){
    	return{

    	}
    },
    methods:{
    	
    }
   
  }
</script>

<style scoped>
  .head{
    width:100%;
    height:81.3vh;
    padding-top: 1.23rem;
    background: #EFEFF4;
    text-align: left;
   }
   ul{
    margin-left: 0.31rem;
   }
   li{
    width:5.4rem;
    background: #fff;
    margin-bottom: 0.23rem;
   }
   .felx{
    display: flex;
    border-bottom: 1px solid #e5e5e5;
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
    width:1.25rem;
    height: 0.53rem;
    background: url('../assets/img/back.png') no-repeat;
    background-size: 100% 100%;
    line-height: 0.53rem;
    text-align: center;
    font-size: 15px;
    color: #fff;
    margin-left: 0.47rem;
    margin-top: 0.45rem;
  }
  .down{
    padding-left: 0.23rem;
    padding-top: 0.17rem;
    padding-bottom: 0.22rem;
    font-size: 0.22rem;
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
  .pull img{
    width:0.28rem;
    height: 0.22rem;
    margin: 0 auto;
  }
   .last p{
    width:100%;
    font-size: 0.19rem;
    color: #008CFF;
    text-align: center;
   margin-top: 0.22rem;
   }
</style>