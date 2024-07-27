
function CommonCondition({grade}) {
  console.log(grade);
  console.log(typeof grade);
  return (
    <>
      <h2>You Got <mark>{grade}</mark> Grade.</h2> 
    </>
  )
}
export default CommonCondition
