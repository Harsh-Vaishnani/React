import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-evenly">
        <Card
          title={"First Card"}
          img={
            "https://img.freepik.com/premium-photo/set-tiger_954677-1206.jpg"
          }
          description={"This is my First Image..."}
        />
        <Card
          title={"Second Card"}
          img={
            "https://static.vecteezy.com/system/resources/thumbnails/025/525/161/small/thick-white-smoke-on-a-dark-background-ai-generated-image-photo.jpg"
          }
          description={"This is my Second Image..."}
        />
        <Card
          title={"Third Card "}
          img={
            "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"
          }
          description={"This is my Third Image..."}
        />
      </div>
    </>
  );
}

export default App;
