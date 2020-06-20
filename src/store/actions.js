import {
  fetchUserInfo,
  fetchItemInfo,
  fetchList
} from '../api/index'

export default { // 비동기 호출만
  FETCH_USER({commit}, name) {
   return fetchUserInfo(name)
    .then(({data}) => {commit('SET_USER',data)})
    .catch(error => console.log(error));
  },
  FETCH_ITEM({commit},id) {
   return fetchItemInfo(id)
    .then(({data}) => commit('SET_ITEM',data))
    .catch(error => console.log(error));
  },
  async FETCH_LIST({commit},name) {
    /*const {data} = await fetchList(name);
    commit('SET_LIST',data);
    return data;*/
    const response = await fetchList(name);
    commit('SET_LIST',response.data);
    return response;
  }
}