//  https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide#search-image
//         ㄴ 카카오의 검색 OPEN API 활용
// 위의 문서를 보면서 필요한 값을 설정.
const REST_API_KEY = '1616deaa88644e4edc43b2b8a7fba919'
const header = {
  method: 'GET',
  Authorization: `KakaoAK ${REST_API_KEY}`
  //API 사용 인증을 위한 key 필수
}
const query = '트와이스'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}`

// 요청을 보내는 JS 명령어
fetch(url, header)                                // 요청 url 주소로 보내기
  .then(response => {                           // 요청에 대한 응답 수신. 콜백함수 인자 response 에 저장
    console.log(response)
  })
  .catch(error => {                             // 요청 에러 처리. 에러 정보 콜백함수 인자 error에 저장
    console.error('fetch 에러:' + error)
  })
