import Common from "./Common";

function Gallery() {
  return (
    <>
      <h1 className="bg-dark text-white text-center">Notable Scientists</h1>

      <div className="row w-100" >
        <div className="col-6">
          <Common 
            ImgURL={"YfeOqp2"}
            Name="Maria Skłodowska-Curie"
            Profession="physicist and chemist"
            AwardNum="4"
            Award="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
            Discover=" polonium (chemical element)"
          />
        </div>
        <div className="col-6">
          <Common
            ImgURL={"szV5sdG"}
            Name="Katsuko Saruhashi"
            Profession="geochemist"
            AwardNum="2"
            Award="Miyake Prize for geochemistry, Tanaka Prize"
            Discover=" a method for measuring carbon dioxide in seawater"
          />
        </div>
      </div>
    </>
  );
}

export default Gallery;

// This Gallery component contains some very similar markup for two profiles.
// Extract a Profile component out of it to reduce the duplication.
// You’ll need to choose what props to pass to it.
