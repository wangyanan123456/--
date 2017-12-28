import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import JobTai from '@/components/jobTai.vue'
import Bill from '@/components/bill.vue'
import Pay from '@/components/pay.vue'
import QiangDan from '@/components/qiangdan.vue'
export default new Router({
 routes:[
    {
      path:'/',
      component: JobTai,
      children:[
        {
          path:'/qiangdan',
          component:QiangDan,
        }
      ]
    },
    {
      path: '/qiangdan2',
      component: QiangDan,
    },
    {
      path:'/bill',
      component: Bill,
      
    },
    {
      path:'/pay',
      component: Pay
    }
    
  ]
})
