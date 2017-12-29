<template>
  <div class="head">
  <div class="backto" @click.stop="naviTo({path: '/goodsback'})">
    <img src="../assets/img/backto.png">
    <div>返回</div>
  </div>
   <ul>
     <li>
         <div class="left">
           <div class="zhandian">黑眼豆豆（1只装）</div>
           <div class="palce">规格：100g/袋</div>
       </div>
       <div class="down">
           <div class="money">铺货：<span class='time'>{{number}}</span>个</div>
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
           <div class="money">铺货：<span class='time'>{{number}}</span>个</div>
            <div class="jisuan">
              <div class="jian">－</div>
              <input  placeholder='0' >
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
           <div class="money">铺货：<span class='time'>{{number}}</span>个</div>
            <div class="jisuan">
              <div class="jian" @click='jian'>－</div>
              <input type="number"  value="" v-model="num" placeholder='0'>
               <div class="add" @click='add'>＋</div>
            </div>
        </div>
     </li>

      
   </ul>
   <div class="reason">退货理由</div>
   <textarea  rows='5' cols='57' v-model='messg' placeholder='请输入退货原因'></textarea>
   <div class="submit" @click='submit'>提交</div>
   
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'GoodsBackList',
     data:function(){
    	return{
          num:'',
          messg:'',
          number:10
    	}
     
    },
     methods:{
        add:function(){
          this.num = parseInt(this.num)+1
          console.log(this.num)
        },
        jian:function(){
          if(this.num<1){
            this.num = 0;
            return
          }
          this.num = parseInt(this.num)-1
          console.log(this.num)
        },
        naviTo({path, query}) {
          this.$router.push({
            path, query
          })
        },
        submit:function(){
          console.log(this.messg.length)
          if(this.messg.length<20 || this.messg.length>200 || this.num>this.number){
            console.log('不可以提交')
          }

          
        },
    }
   
  }
</script>

<style scoped>
  .head{
    width:100%;
    /*height:81.3vh;*/
    height: 100%;
    padding-top: 1.23rem;
    background: #EFEFF4;
    text-align: left;
    padding-bottom: 1.56rem;
   }
    .backto{
    position: fixed;
    top:0.25rem;
    z-index: 1000;
    color: #fff;
    display: flex;
    margin-left: 0.16rem;
   }
   .backto img{
    width:0.16rem;
    height: 0.28rem;
    background-size: 100% 100%;
    margin-top: 0.24rem;
    margin-right: 0.08rem;
   }
   .backto div{
    margin-top: 0.25rem;
    font-size: 0.25rem;
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
    width:0.5rem;
    margin-top:0.08rem;
    text-align: center;
  }
  .jisuan{
    display: flex;
    margin-left: 2.34rem;
  }
  input{
    border:none;
    width:0.52rem;
    height: 0.32rem;
    padding-left: 0.1rem;
    color:#333;
    font-size: 0.28rem;
    border:1px solid #e5e5e5;
    margin-left: 0.05rem;
    margin-right: 0.05rem;
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
    padding-top: 0.2rem;
  }
  .submit{
    width:1.56rem;
    height: 0.62rem;
    background: url('../assets/img/submit.png') no-repeat;
    background-size: 100% 100%;
    text-align: center;
    line-height: 0.62rem;
    color: #fff;
    font-size: 0.28rem;
    margin:  0 auto;
  }
</style>