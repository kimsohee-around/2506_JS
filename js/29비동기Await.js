const REST_API_KEY = '1616deaa88644e4edc43b2b8a7fba919'
const headers = {
  method: 'GET',
  headers: {
    Authorization: `KakaoAK ${REST_API_KEY}`
  }
}
const query = '트와이스'
const url = `https://dapi.kakao.com/v2/search/image?query=${query}&sort=recency`

let result

// async function loadData() {     // Promise() 기반 await 포함한 경우 async 키워드 표시

// }  
await fetch(url, headers)     // 비동기 처리 기다리기
  .then(response => {
    console.log('response 수신완료:', response.status)
    return response.json()
  })
  .then(data => {
    result = data
  })
  .catch(error => console.error('fetch 실패: ', error))

// loadData()

console.log('result:', result)
console.log('result:', result.documents[0].image_url)
