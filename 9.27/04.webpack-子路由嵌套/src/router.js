import VueRouter from 'vue-router'
// ���� Account ���
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//����Account�����������
import login from './subcom/login.vue'
import register from './subcom/register.vue'

// 3. ����·�ɶ���


var router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: account,
      children:[
        {path:'login',component:login},
        {path:'register',component:register}
      ]
    },
    {path: '/goodslist',
      component: goodslist
    }
  ]
})

//��·�ɶ���©��ȥ
export default router