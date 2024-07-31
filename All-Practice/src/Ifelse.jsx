// Normal If-Else Conditation

// function Ifelse() {
//   let a = prompt("Enter any Number");
//   if (a > 10) {
//     return <h1>A is Big.</h1>;
//   } else if (a == 10) {
//     return <h1>A is Equal.</h1>;
//   } else {
//     return <h1>A is Small.</h1>;
//   }
// }

// export default Ifelse;

// Ternary Operator

function Ifelse() {
  let a = prompt("Enter any Number");

  return <>{a > 10 ? <h1>A is Big . </h1> : <h1>A is Small</h1>}</>;
}

export default Ifelse;
