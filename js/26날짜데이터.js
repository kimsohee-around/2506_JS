// html 없이 node.js 로 실행합니다.
// new Date() => Date 클래스를 이용해서 새로운(new) 날짜 데이터를 만듭니다.
//               기본값은 현재 날짜와 시간 입니다.
// 백틱과 ${ } 기호 사용하는 형식을 '문자열 템플릿'이라고 부릅니다.
const today = new Date()
console.log(`현재 날짜와 시간 : ${today}`)
// Locale : 현지(국가와 언어)
console.log(`현재 날짜와 시간 : ${today.toLocaleString()}`)
console.log(`현재 날짜와 시간 : ${today.toLocaleDateString()}`)
console.log(`현재 날짜와 시간 : ${today.toLocaleTimeString()}`)
// 표준시()
console.log(`현재 날짜와 시간(표준시) : ${today.toISOString()}`)
console.log(`현재 날짜와 시간(표준시) : ${today.toUTCString()}`)
// 
console.log(today.toString())    // 모든 객체에 기본 메소드 toString()
console.log(today.toDateString())
console.log(today.toTimeString())

// 날짜는 기본적으로 정수값 형식입니다.
//           ㄴ  1970년 1월 1일 0시 기준으로 얼마나 지났는지를 ms 단위로 저장.
console.log(`정수값 new Date() : ${today.getTime()}`)  // 1750985900759
let todayLong = 55 * 365 * 24 * 60 * 60 * 1000 // 2024년 12월 31일 오후 11:59:59.999 초
console.log(`정수값 new Date() 대략적인 값 : ${todayLong}`)

// 날짜 데이터 조작
console.log(`today 에서 년도 추출 : ${today.getFullYear()}`)
console.log(`today 에서 월 추출 : ${today.getMonth()}`)   //월은 0~11
console.log(`today 에서 일 추출 : ${today.getDate()}`)
console.log(`today 에서 요일 추출 : ${today.getDay()}`)   //일요일 0. 0~6

// 특정 날짜
let date1 = new Date('2025-12-25')
let date2 = new Date('2025/12/25')
let date3 = new Date('2025.12.25')
console.log(`date1 : ${date1}`)
console.log(`date2 : ${date2}`)
console.log(`date3 : ${date3}`)
// 특정 날짜와 시간  지정
date1 = new Date(2025, 11, 25, 11, 30, 0)   // 년,월(0~11),일,시,분,초
console.log(`date1 날짜와 시간 : ${date1}`)
date2 = new Date('2025-06-27T18:30:00')    // 현지시간 설정
console.log(`date2 날짜와 시간 : ${date2}`)
date3 = new Date('2025-06-27T18:30:00Z')   // 표준시 설정
console.log(`date3 날짜와 시간 : ${date3}`)

// 