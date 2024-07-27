import { useState } from "react";
import Card from "./Component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card
        imageName="car1"
        name=" Challenger SRT"
        hp="717"
        details="Dodge is a renowned American automobile brand known for producing a range of high-performance vehicles, including muscle cars, SUVs, and trucks. Here are some details about notable Dodge Cars."
      />
      <Card
        imageName="car2"
        name=" SRT Hellcat"
        hp="757"
        details="The Dodge Charger is a full-size sedan that seamlessly blends performance with practicality. It's available in several trims, from the V6-powered SXT to the supercharged V8 Hellcat models."
      />
      <Card
        imageName="car3"
        name=" Challenger Widebody"
        hp="771"
        details="As an iconic muscle car, the Dodge Challenger pays homage to its heritage with a classic design while packing modern performance. "
      />

      <Card
        imageName="car4"
        name=" SRT Pony Car"
        hp="777"
        details="The Dodge Durango is a versatile mid-size SUV that combines performance, capability, and comfort. Its engine lineup includes a standard V6, the formidable supercharged 6.2L. "
      />
      <Card
        imageName="car5"
        name=" Hellcat Dodge"
        hp="818"
        details="The Hellcat Redeye, for example, boasts a whopping 797 horsepower, making it one of the most powerful sedans on the market. Key features include advanced infotainment options."
      />
      <Card
        imageName="car6"
        name=" Dodge Charger "
        hp="919"
        details="The variety of trims and special editions, like the Hellcat and Demon, cater to enthusiasts seeking varying levels of power and exclusivity."
      />
    </>
  );
}

export default App;
