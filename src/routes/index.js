import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemView from "../views/ItemView";
import UserView from "../views/UserView";
import createListView from '../views/CreateListView'
import bus from '../utils/bus'
import {store} from "../store/index";

Vue.use(VueRouter);

export const router =new VueRouter({
  // url hash(=#)값 제거
  // ex) localhost:8080/#/news => # 제거
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/news'
    },
    {
      //path: url에 대한 정보(= url 주소)
      path:'/news',
      //component: url 주소로 갔을 떄 표시될 컴포넌트
      name:'news',
      component: createListView('NewView'),
      beforeEnter: (to, from, next) => {
        //to : 이동할 위치
        //from : 현재 위치
        //next() 를 호출해야 페이지 이동

        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST',to.name).then(() => {
          next();
        }).catch(error => console.log(error));
      }
    },
    {
      path:'/ask',
      name:'ask',
      component:createListView('AskView'),
      beforeEnter:(to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST',to.name).then(()=>{
          next();
        });
      }
    }
    ,
    {
      path:'/jobs',
      name:'jobs',
      component:createListView('JobsView'),
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST',to.name).then(() => {
          next();
        });
      }
    },
    {
      path:'/item/:id',
      component: ItemView
    },
    {
      path:'/user/:id',
      component: UserView
    }
  ]
}
);
