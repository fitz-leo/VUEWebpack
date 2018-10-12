//在webpack中尝试使用vue
// import Vue from 'vue'
import Vue from '../node_modules/vue/dist/vue.js'

var login = {
  template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
}
// import login from './login.vue'

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
  components: {
    login
  }
  /*render: function (createElements) { // 在 webpack 中，如果想要通过 vue， 把一个组件放到页面中去展示，vm 实例中的 render 函数可以实现
    return createElements(login)
  }*/
  // render: c => c(login)
})
