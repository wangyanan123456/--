<template>
  <div class="head">
  <div class="backto" @click.stop="naviTo({path: '/goodstuihuo'})">
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
            <!-- <div class="jisuan"> 剩下<span class='last'></span>个</div> -->
             <div class="jisuan">
              剩下<input type="number"  v-model="num" placeholder='0' >个
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
              剩下<input  type="number"  placeholder='0' >个
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
              剩下<input type="number"   placeholder='0' >个
            </div>
            
        </div>
     </li>

      
   </ul>
   <div class="submit" @click='submit'>提交</div>
   <div  class="toast" v-if='apper'>{{text}}</div>
   
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'TuiHuo',
     data:function(){
      return{
          num:'',
          number:1022,
          apper:false,
          text:''
      }
     
    },
     methods:{
        naviTo({path, query}) {
          this.$router.push({
            path, query
          })
        },
        submit:function(){
          if( this.num>this.number){
             this.apper = true;
             this.text='提交失败'
             var that = this;
            setTimeout(function(){
                that.apper = false
            },1000)
          }else{
            console.log(90)
            this.text='提交成功'
             var that = this;
             this.apper = true;
            setTimeout(function(){
                that.apper = false
            },1000)
          }

          
        },
    }
   
  }
</script>

<style scoped>
  .head{
    width:100%;
    height:70vh;
    /*height: 100%;*/
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
    height: 1.88rem;
    background: #fff;
    padding-top: 0.23rem;
    margin-bottom: 0.23rem;
    padding-left: 0.31rem;
    /*border:1px solid red;*/
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
    padding-top: 0.2rem;
    padding-bottom: 0.22rem;
    font-size:0.28rem;
    display: flex;
  }
  .money{
    font-size: 0.28rem;
    color:#666;
  }
  .time{
    display: inline-block;
    color: #666;
    width:0.62rem;
    height: 0.3rem;
    text-align: center;
  }
  .jisuan{
    display: flex;
    margin-left: 1.5rem;
  }
  input{
    border:none;
    width:1.09rem;
    height:0.47rem;
    padding-left: 0.1rem;
    color:#333;
    font-size: 0.28rem;
    border:1px solid #e5e5e5;
    margin-left: 0.05rem;
    margin-right: 0.05rem;
    margin-top: -0.1rem;
  }
  .add,.jian{
    width:0.38rem;
    height: 0.38rem;
    background:   #5B8CFF ;
    color: #fff;
    text-align: center;
    line-height: 0.38rem;
  }
  .submit{
    width:100%;
    height: 0.77rem;
    background: #5B8CFF;
    background-size: 100% 100%;
    text-align: center;
    line-height: 0.77rem;
    color: #fff;
    font-size: 0.28rem;
    margin:  0.45rem auto;
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
    z-index: 1000;
    left: 1.2rem;
   }
</style>