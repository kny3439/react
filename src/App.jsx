import React from 'react'

function App() {
  const year1 = 2024;
  const year2 = 1;
  const strA='올해는';
  const strB='2024년';
  const booleanT=true;
  const booleanF=false;
  const Num=[1,2,3];
  const user={
    name:'제니',
    age:25,
    isLogin:false
  }


  return (
    <div>
      <h1>나의 첫 react 파일입니당(❁´◡`❁)</h1>
      <p>함수 하나에 하나로 싸여져 있어야 함</p>
      <ul>
        <li>1.숫자값: {year1}</li>
        <li>2.연산식: {year1+year2}</li>
        <li>3.문자값열: {strA+strB}</li>
        <li>4.논리값: {String(booleanT&&booleanF)}</li>
        <li>5.배열: {Num.join(', ')}</li>
        <li>5.배열: {Num.join(', ')}</li>
        <li>6.객체: {user.name}:{user.age} 입니당</li>
        <li>7.조건부 렌더링:{year1} 은 {year1%2===0?'짝수':'홀수'}</li>
        <li>{user.isLogin?<button style={{backgroundColor:'pink'}}>Logout</button>:<button style={{backgroundColor:'skyblue'}}>Login</button>}</li>
      </ul>
    </div>
  )
}

export default App