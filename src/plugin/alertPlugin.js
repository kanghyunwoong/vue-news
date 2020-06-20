import Alert from '../components/alert'

export default {
  install(Vue) {
    Vue.use(Alert);
  /*  let AlertConstructor = Vue.extend(Alert);
    let alertInstance = new AlertConstructor({
      data:{

      }
    });*/
  }
}