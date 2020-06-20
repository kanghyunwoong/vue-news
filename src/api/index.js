import axios from 'axios';


// 1.HTTP Request $ Response 와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0'
}

// 2. API 함수들을 정리
function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}/user/${userName}.json`);
}

function fetchItemInfo(id) {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
}

async function fetchList(pageName) {
  try {
    return await axios.get(`${config.baseUrl}/${pageName}/1.json`);
  }catch (e) {
    console.log('e',e);
  }
}

export {
  fetchUserInfo,
  fetchItemInfo,
  fetchList
}

