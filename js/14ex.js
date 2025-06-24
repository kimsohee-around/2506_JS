// 4개 연산을 테스트. console 에 결과값 출력. 값은 789 , 125



function calc(num1, num2, op) {
  let result = 0    // 결과값 변수
  switch (op) {
    case '+':
      result = num1 + num2
      break
    case '-':
      result = num1 - num2
      break
    case '*':
      result = num1 * num2
      break
    case '/':
      result = num1 / num2
      break
    default:
      console.error('op 는 허용되지 않는 값 입력입니다.')
      break;
  }

  return result;
}