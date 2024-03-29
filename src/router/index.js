import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/**
 * 重写路由的push方法, 避免点击同一个item的时候报路由已存在 错误
 */
const routerPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/complate',
      name: 'complate',
      component: () => import('@/views/login/complate.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import('@/views/login/regist.vue')
    },
    {
      path: '/forgotPWD',
      name: 'forgotPWD',
      component: () => import('@/views/login/ForgetPassWord.vue')
    },
    {
      path: '/classes',
      name: 'classes',
      component: () => import('@/views/classes/index2.vue'),
      redirect: '/campusHomepage',
      children: [
        {
          path: '/campusHomepage',
          name: 'campusHomepage',
          component: () => import('@/views/classes/campusHomepage/index.vue')
        },
        {
          path: '/classHomepage',
          name: 'classHomepage',
          component: () => import('@/views/classes/classHomepage/index.vue')
        },
        {
          path: '/myHomepage',
          name: 'myHomepage',
          component: () => import('@/views/classes/myHomepage/index.vue')
        }
      ]
    },
    {
      path: '/grade',
      name: 'grade',
      component: () => import('@/views/grade/index.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/team/index.vue')
    },
    {
      path: '/special',
      name: 'special',
      component: () => import('@/views/special/index.vue')
    },
    {
      path: '/topic',
      name: 'topic',
      component: () => import('@/views/topic/index.vue')
    },
    {
      path: '/teaching',
      name: 'teaching',
      component: () => import('@/views/teaching/index.vue')
    },
   {
      path: '/public',
      name: 'public',
      component: () => import('@/views/public/homePage'),
      children:[{
        path: '/elseclass',
        name: 'teaching',
        component: () => import('@/views/classes/otherClassPages')
      }]
    },
    {
      path: '/writenews',
      name: 'writenews',
      component: () => import('@/views/writenews/index.vue')
    }
  ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;
 