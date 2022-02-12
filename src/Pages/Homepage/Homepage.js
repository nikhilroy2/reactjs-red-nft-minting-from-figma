import React from "react";
import "./Homepage.css";
function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>
    </div>
  );
}

export default Homepage;

function Section1() {
  return (
    <section id="Section1">
      <div className="section_container">
        <div className="row g-0">
          <div className="col-md-6 ">
            <h1 className="text-uppercase">Discover Rare Collection of NFT</h1>
            <p>
              “Everything or nothing. Here I am, in front of me is the World of
              Art - there is no turning back and I will force myself to love.”
            </p>
          </div>
          <div className="col-md-6 ">
            <img className="presale_img" src={require("../../Static/img/presale_img.png")} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
