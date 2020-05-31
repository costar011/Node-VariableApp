import express from "express";

const PORT = 3000;

const app = express();

// 콜백함수 : listen 실행이 끝난 후 실행되는 함수
app.listen(PORT, () => {
  // ` ` <- 자바스크립트 변수와 문자열을 혼용해서 사용
  //        변수는 ${} 안에 넣는다

  console.log(`${PORT} Server Start`);
});
