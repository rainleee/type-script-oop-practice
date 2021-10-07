// module화 하지 않으면 글로버 스코프로 취급됨.
// export default  한파일에서 default는 하나, import할때 이름을 마음대로 변경가능
// export default function add(a, b) {
export function add(a, b) {
  return a + b;
}

export function print(input) {
  console.log(input);
}

export const number = 10;
