import React from "react";
import GetImageUrl from "./GetImgUrl";
import "../Component/CSS/CommonCSS.css";

function Common({ Name, Profession, AwardNum, Award, Discover, ImgURL }) {
  return (
    <div>
      <section className="profile m-auto p-3 mb-5 mt-5 w-75 h-100 border-3 border border-black rounded-4 bg-danger bg-opacity-25">
        <div class="card border-3 border rounded-4 m-auto bg-info-subtle">
          <img
            className="avatar m-auto mb-3 mt-3 rounded-5"
            src={GetImageUrl(ImgURL)}
            alt="Katsuko Saruhashi"
            width={100}
            height={100}
          />
          <h2 className="ps-3 text-center">{Name}</h2>

          <ul class="list-group list-group-light list-group-small">
            <li>
              <div class="card-body">
                <b>Profession: </b>
                <i>{Profession}</i>
              </div>
            </li>
            <li className="p-3">
              <b>Awards: {AwardNum} </b>
              <i> {Award}</i>
            </li>
            <li className="p-3">
              <b>Discovered: </b>
              <i>{Discover}</i>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Common;
