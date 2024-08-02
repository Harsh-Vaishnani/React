import React from "react";
import Drive from "./Drive";

function Conditional({marks}) {
  const mark=parseFloat(marks);
  if (mark>=90 && mark<=100){
    return <Drive grade="A+"/>              
  }
  else if(mark>=80 && mark<90){
    return <Drive grade="B+"/>
  }
  else if(mark>=70 && mark<80){
    return <Drive grade="C+"/>
  }
  else if(mark>=60 && mark<70){
    return <Drive grade="D+"/>
  }
  else if(mark>=50 && mark<60){
    return <Drive grade="E+"/>
  }
  else if(mark<50 && mark>=0){
    return <h1>You Are Fail.</h1>
  }
  else {
    return <h1>Invalid Mark.</h1>
  }
}

export default Conditional;
