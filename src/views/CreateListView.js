import ListView from "./ListView";
import bus from '../utils/bus'

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 돌아갈 자리
    name ,
    created() {},
    mounted() {
      bus.$emit('end:spinner');
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}