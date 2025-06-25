// 객체의 배열 = 배열의 요소는 객체
const members = [
  {
    name: "김사나",
    age: 22,
    address: "경기",
    height: 160.9
  },
  {
    name: "박모모",
    age: 24,
    address: "서울",
    height: 165.3
  },
  {
    name: "이다현",
    age: 27,
    address: "제주",
    height: 163.7
  }
]

console.log('배열 0번 요소 : ', members[0])
console.log('배열 0번 요소 객체 name  : ', members[0].name)

console.log('배열 1번 요소 : ', members[1])
console.log('배열 2번 요소 : ', members[2])
console.log('배열 3번 요소 : ', members[3])   // undefined

// 1)  members 배열에 저장된 모든 객체의 name 속성값 출력 -> '김사나','박모모','이다현'

for (let m of members) {
  // console.log(m)
  console.log(m.name)
}

// 2) 객체의 address 속성값이 '서울'인 name 속성값 출력  ->  '박모모'
for (let m of members) {
  if (m.address === '서울') {
    console.log('서울 거주 : ', m.name)
  }
}

// 3) 객체 배열에서 age 가 25 이상인 name 속성값 출력
for (let m of members) {
  if (m.age >= 25) {
    console.log('25세 이상 : ', m.name)
  }
}

// 4) 모든 배열 요소의 '모든 속성값' 출력
for (let m of members) {
  console.log('--------')
  console.log(m.name)
  console.log(m.age)
  console.log(m.address)
  console.log(m.height)
}

for (let m of members) {
  console.log('~~~~~~~~~~')
  for (let key in m) {    // 객체 m 의 모든 속성을 순서대로 가져와서 key 에 저장
    console.log(m[key])
  }
}