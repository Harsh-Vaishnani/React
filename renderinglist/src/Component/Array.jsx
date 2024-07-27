function Array() {
  const colors = ["Red", "Yellow", "Green", "Blue", "Orange", "Grey"];
  const colorList = colors.map((color, index) => <li key={index}>{color}</li>);

  return (
    <>
      <div>
        <ul>{colorList}</ul>
      </div>
    </>
  );
}

export default Array;
