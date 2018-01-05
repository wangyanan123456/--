import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import JobTai from '@/components/jobTai.vue'
import Bill from '@/components/bill.vue'
import Pay from '@/components/pay.vue'
import Qiang from '@/components/qiangdan.vue'
import GoodsBack from '@/components/goodsback.vue'
import GoodsTuiHuo from '@/components/goodstuihuo.vue'
export default new Router({
 routes:[
    {
      path:'/',
      component: JobTai
    },
    {
      path: '/qiangdan2',
      component: Qiang,
    },
     {
      path: '/goodsback',
      component: GoodsBack,
    },
    
    {
      path:'/bill',
      component: Bill,
      
    },
    {
      path:'/pay',
      component: Pay
    },
    {
      path:'/goodstuihuo',
      component: GoodsTuiHuo
    }
    
  ]
})
