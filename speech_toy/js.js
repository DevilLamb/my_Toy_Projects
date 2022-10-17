/** API */
const speech = window.speechSynthesis;

/**DOM*/
const text = document.querySelector(".text");
const btn = document.querySelector(".speakBtn");

/**소라고둥의 대답 */

const magic = [
  "응",
  "아니",
  "그래",
  "안 돼",
  "기다려",
  "맞아",
  "가만히 있어",
  "그래도 돼",
  "좋아",
  "안 좋아",
  "아직 안 돼",
  "지금 해",
  "하지 마",
  "완벽해",
  "최악이야",
];

btn.addEventListener("click", () => {
  console.log(text.value);
  if (text.value === "") {
    Sayit("소원을 말해");
  } else {
    let num = parseInt(Math.random() * 15);
    console.log(num);
    Sayit(magic[num]);
  }
});

function Sayit(text) {
  const speaks = new SpeechSynthesisUtterance(text);
  speaks.lang = "ko-KR";
  console.log(speaks);
  speech.speak(speaks, true);
}

function random() {
  parseInt(Math.random()) * 1;
}

/**사용자가 입력한 값 말하기 */
// btn.addEventListener("click", () => {
//     Sayit(text.value);
//   });

//   function Sayit(text) {
//     const speaks = new SpeechSynthesisUtterance(text);
//     speaks.lang = "ko-KR";
//     console.log(speaks);
//     speech.speak(speaks, true);
//   }
