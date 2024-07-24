import React from "react";
import GetImageUrl from "./GetImgUrl";
import "../Component/CSS/CommonCSS.css";

function Common({ Name, Profession, AwardNum, Award, Discover, ImgURL }) {
  return (
    <div>
      <section className="profile m-auto p-3 mb-5 mt-5 w-75 h-100">
        <h2>{Name}</h2><hr/>
        <img
          className="avatar"
          src={GetImageUrl(ImgURL)}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        /><hr/>
        <ul>
          <li>
            <b>Profession: </b>
            {Profession}
          </li>
          <li>
            <b>Awards: {AwardNum} </b>
            {Award}
          </li>
          <li>
            <b>Discovered: </b>
            {Discover}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Common;
