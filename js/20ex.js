const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '자료조사']

/*
    위의 2개의 배열을 객체 배열 1개로 변경.
    객체 예시 : {time: '09:00', todo: '과제'}
*/
// 비어있는 배열에 새로운 요소를 추가 : push() 메소드 활용
const schedule = []
for (let i = 0; i < time.length; i++) {
  let newItem = { time: time[i], todo: todo[i] }
  // 속성이름: 값
  schedule.push(newItem)
}
console.log(schedule)
/*
const schedule = [
  { time: '09:00', todo: '수업' },
  { time: '11:00', todo: '과제' },
  { time: '12:30', todo: '점심식사' },
  { time: '14:00', todo: '주간회의' },
  { time: '16:45', todo: '자료조사' }
]
*/

// schedule.forEach() 로 연습하기

function printRow(item) {        // '하나씩 가져온' 요소를 item 변수에 저장-> tr 요소를 만들기 
  const tr = document.createElement('tr')
  for (let key in item) {    //객체 모든 속성을 순회
    // console.log(item[key])
    const td = document.createElement('td')
    td.textContent = item[key]   // 속성 이름 key 에 저장. key 속성의 값을 가져옴.
    tr.appendChild(td)
  }

  return tr
}



// DOMContentLoaded 이벤트 : DOM 자료구조를 만들어서 메모리에 저장한 후에 발생.
//              ㄴ 화면의 구성 요소들이 만들어진 후에 실행.

document.addEventListener('DOMContentLoaded', function () {
  // html 의 최상위 요소 가져오기
  const root = document.getElementById('root')
  // table 요소를 만들어서 첫번째 줄(tr)에 제목을 넣어 table에 추가
  const table = document.createElement('table')
  table.innerHTML = `<tr>
        <th>TIME</th>
        <th>TODO</th>
        </tr>`
  // table 을 root 요소에 추가하기        
  root.appendChild(table)

  // 배열에 저장된 객체 요소 각각에 대해 반복하는 메소드
  schedule.forEach(item => {
    // item 객체로 tr요소 만드는 함수 호출
    const trResult = printRow(item)
    // console.log(trResult)
    table.appendChild(trResult)
  })

  // 'DOMContentLoaded' 이벤트 사용할 때에는 모든 이벤트 리스너를 
  // 'DOMContentLoaded' 이벤트 안에 작성합니다.
  const newBtn = document.getElementById('newBtn')
  newBtn.addEventListener('click', () => {
    // 입력값 가져와서 newItem 객체 만들기
    const newTime = document.getElementById('newTime').value
    const newTodo = document.getElementById('newTodo').value
    const newItem = { time: newTime, todo: newTodo }  //새로운 일정 객체 생성
    // printRow 실행하여 tr 전달 받기 - 새로운 일정 tr (행) 만들기
    const newTr = printRow(newItem)
    // newTr 을 table에 추가
    table.appendChild(newTr)
    schedule.push(newItem)    // 스케줄 배열에 새로운 일정 추가
    console.log('새 스케줄 추가 후 : ', schedule)
  }) // newBtn.addEventListener 의 끝

}) //document.addEventListener 의 끝
