export default { //state의 저장,변경
  SET_USER(state,user) {
    state.user =user;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
  SET_LIST(state, list) {
    state.list = list;
  }

}