import CommonCondition from "./CommonCondition";

let userMark = null;
if (userMark === null) {
  userMark = prompt("Enter Your Mark");
}

function Conditional() {
  const mark = userMark;

  if (mark >= 90 && mark <= 100) {
    return <CommonCondition grade={"A+ 😊"} />;
  } else if (mark >= 80 && mark < 90) {
    return <CommonCondition grade={"B+"} />;
  } else if (mark >= 65 && mark < 80) {
    return <CommonCondition grade={"C+"} />;
  } else if (mark >= 50 && mark < 65) {
    return <CommonCondition grade={"D+"} />;
  } else if (mark >= 35 && mark < 50) {
    return <CommonCondition grade={"E+"} />;
  } else if (mark >= 0 && mark < 35) {
    return <h2>You Are <mark>Fail</mark>🥺</h2>;
  } else {
    return <h2>Invalid Mark</h2>;
  }
}

export default Conditional;
