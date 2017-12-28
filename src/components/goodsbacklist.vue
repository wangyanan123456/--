<template>
  <div class="head">
   <ul>
     <li>
         <div class="left">
           <div class="zhandian">黑眼豆豆（1只装）</div>
           <div class="palce">规格：100g/袋</div>
       </div>
       <div class="down">
           <div class="money">￥<span class='time'>6.00</span>元</div>
            <div class="jisuan">
             <div class="jian">－</div>
              <input placeholder='0' value="">
             <div class="add">＋</div>
            </div>
        </div>
     </li>
      <li>
         <div class="left">
           <div class="zhandian">黑眼豆豆（1只装）</div>
           <div class="palce">规格：100g/袋</div>
       </div>
       <div class="down">
           <div class="money">￥<span class='time'>6.00</span>元</div>
            <div class="jisuan">
              <div class="jian">－</div>
              <input placeholder='0' value="">
               <div class="add">＋</div>
            </div>
        </div>
     </li>
      <li>
         <div class="left">
           <div class="zhandian">黑眼豆豆（1只装）</div>
           <div class="palce">规格：100g/袋</div>
       </div>
       <div class="down">
           <div class="money">￥<span class='time'>6.00</span>元</div>
            <div class="jisuan">
              <div class="jian" @click='jian'>－</div>
              <input placeholder='0' value="" v-model="num">
               <div class="add" @click='add'>＋</div>
            </div>
        </div>
     </li>

      
   </ul>
   <div class="reason">退货理由</div>
   <textarea  rows='5' cols='57' placeholder='请输入退货理由'></textarea>
   
   
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'GoodsBackList',
     data:function(){
    	return{
          num:0
    	}
     
    },
     methods:{
        add:function(){
          this.num = parseInt(this.num)+1
          console.log(this.num)
        },
        jian:function(){
          if(this.num<=1){
            this.num = 0;
            return
          }
          this.num = parseInt(this.num)-1
          console.log(this.num)
        }
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
   li{
    width:5.7rem;
    background: #fff;
    padding-top: 0.23rem;
    margin-bottom: 0.23rem;
    padding-left: 0.31rem;
   }
   .left{
    border-bottom:1px solid #e5e5e5;
    padding-bottom: 0.23rem;
   }
  .zhandian{
    font-size:0.28rem;
    color: #333;
    font-weight: bold;
  }
  .palce{
    font-size:0.19rem;
    color: #666;
    margin-top: 0.2rem;
  }
  .down{
    padding-top: 0.17rem;
    padding-bottom: 0.22rem;
    font-size: 0.22rem;
    display: flex;
  }
  .money{
    width:1.56rem;
  }
  .time{
    display: inline-block;
    color: red;
    
    margin-top:0.08rem;
  }
  .jisuan{
    display: flex;
    margin-left: 2.34rem;
  }
  input{
    border:none;
    width:0.5rem;
    height: 0.39rem;
    padding-left: 0.1rem;
    color:#333;
    font-size: 0.28rem;
  }
  .add,.jian{
    width:0.38rem;
    height: 0.38rem;
    background:   #5B8CFF ;
    color: #fff;
    text-align: center;
    line-height: 0.38rem;
  }
  .reason{
    margin-left: 0.31rem;
    font-size: 0.22rem;
    color: #333;
    margin-top: 0.23rem;
  }
  textarea{
    border:none;
    margin-top: 0.23rem;
    padding-left: 0.31rem;
    font-size: 0.19rem;
    color: #B2B2B2;
  }
</style>