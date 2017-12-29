import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import JobTai from '@/components/jobTai.vue'
import Bill from '@/components/bill.vue'
import Pay from '@/components/pay.vue'
import QiangDan from '@/components/qiangdan.vue'
import GoodsBack from '@/components/goodsback.vue'
import GoodsBackList from  '@/components/goodsbacklist.vue'
import TuiHuo from '@/components/tuihuo.vue'
import GoodsTuiHuo from '@/components/goodstuihuo.vue'
export default new Router({
 routes:[
    {
      path:'/',
      component: JobTai
    },
    {
      path: '/qiangdan2',
      component: QiangDan,
    },
     {
      path: '/goodsback',
      component: GoodsBack,
    },
    {
      path: '/goodsbacklist',
      component: GoodsBackList,
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
    },
    {
      path:'/tuihuo',
      component: TuiHuo
    }
    
  ]
})
