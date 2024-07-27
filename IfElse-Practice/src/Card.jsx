import CommonCard from "./Components/CommonCard";


function Card() {
  const user=prompt("Serch catagory")
  const users=user.toLocaleLowerCase();
    
  if(users==="women"){
    return<>
      <CommonCard
          img={"https://m.media-amazon.com/images/I/612WOnKLLML._SY695_.jpg"}
          product="Side Black Sling Bags"
          price=" ₹199"
          descri="Leatherette material black colored Sling bag , Material: 100% Leatherette"
          catagory="Women"
        />
        <CommonCard
          img={"https://m.media-amazon.com/images/I/61QXyxuQxxL._SX625_.jpg"}
          product="Platinum Plated Cubic Bracelet"
          price="₹275"
          descri="Stylish platinum plated crystal bracelet for women and girls , This latest design bracelet for girls is made from high quality imported austrian crystal. Five layer silver plated."
          catagory="Women"
        />
        <CommonCard
          img={"https://m.media-amazon.com/images/I/51-+SFrhYFL._SX695_.jpg"}
          product="Fargo Bags "
          price="₹499"
          descri="Package Content: One Handbag, One Sling Bag, Two Makeup Pouch, One Cardholder , Age Range Description: Adult"
          catagory="Women"
        />
        <CommonCard
          img={"https://m.media-amazon.com/images/I/610-2b7UFBL._SY625_.jpg"}
          product="GIVA 925 Silver Princess Earrings"
          price="₹1749"
          descri="GIVA helps you flaunt your sparkle with style , Inspired by romance and poetry, Fine jewellery is crafted for the modern Indian Women."
          catagory="Women"
        />
        <CommonCard
          img={"https://m.media-amazon.com/images/I/817iC5Eq49L._SX679_.jpg"}
          product="SSS Plated Women's Watch "
          price="₹399"
          descri="Strap Width: 10 mm , Band material type is Stainless Steel Silver Plated"
          catagory="Women"
        />
    </>
  }
  else if(users==="men"){
    return<>
      
      <CommonCard
        img={"https://m.media-amazon.com/images/I/71mj0YhDGiL._SX569_.jpg"}
        product="Short Sleeve T-Shirt"
        price="₹399"
        descri="Cotton blend T-shirts are a popular choice for men due to their comfort, versatility, and durability"
        catagory="Men"
      />

      <CommonCard
        img={"https://m.media-amazon.com/images/I/91RcOs7rSHL._SL1500_.jpg"}
        product="Professional Leather Bag"
        price="₹2348"
        descri="This durable, sophisticated office bag, crafted from premium genuine leather, is a stylish and practical choice for professional settings and daily use."
        catagory="Men"
      />
      <CommonCard
        img={"https://m.media-amazon.com/images/I/91Il8Hs6W8L._SY695_.jpg"}
        product="Laptop Messenger Bag"
        price="₹1792"
        descri="The padded 15.6-inch laptop sleeve bag with zipper closure provides secure protection for your device from scratches, dings, and minor impacts during travel or daily use."
        catagory="Men"
      />
      <CommonCard
        img={"https://m.media-amazon.com/images/I/71x2hcIv6jL._SY741_.jpg"}
        product="Tissot Black Watch"
        price="₹58,000"
        descri="Watch Movement Type: Quartz, Watch Display Type: Analog"
        catagory="Men"
      />
      <CommonCard
        img={"https://m.media-amazon.com/images/I/61ybeKQto8L._SY741_.jpg"}
        product="Casio COLLECTIONA Watch"
        price="₹1695"
        descri="Occasion : Casual , Case Material : Others , Case Diameter : 38 mm , Dispay Type : Analog"
        catagory="Men"
      />
    </>
  }
}

export default Card;
