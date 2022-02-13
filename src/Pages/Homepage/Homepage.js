import React from "react";
import "./Homepage.css";
import Countdown from "react-countdown";

function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>
    </div>
  );
}

export default Homepage;

function Section1() {
  // Random component
  const Completionist = () => <h2 className="text-center">All Sold Out</h2>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <ul className="list-unstyled align-items-center d-flex justify-content-center">
          <li className="me-3 me-md-4">
            <h2 className="mb-0">{days}</h2>
            <span>Days</span>
          </li>
          <li className="pass me-3 me-md-4">:</li>
          <li className="me-3 me-md-4">
            <h2 className="mb-0">{hours}</h2>
            <span>Hrs</span>
          </li>
          <li className="pass me-3 me-md-4">:</li>
          <li className="me-3 me-md-4">
            <h2 className="mb-0">{minutes}</h2>
            <span>Min</span>
          </li>
          <li className="pass me-3 me-md-4">:</li>

          <li className="">
            <h2 className="mb-0">{seconds}</h2>
            <span>Sec</span>
          </li>
        </ul>
      );
    }
  };

  return (
    <section id="Section1">
      <div className="section_container py-3 py-md-5">
        <div className="row g-0">
          <div className="col-md-6 ">
            <h1 className="text-uppercase">Discover Rare Collection of NFT</h1>
            <p>
              “Everything or nothing. Here I am, in front of me is the World of
              Art - there is no turning back and I will force myself to love.”
            </p>

            <div className="nft_box my-3 my-md-5"></div>
          </div>
          <div className="col-md-6">
            <div className="col_wrapper position-relative">
              <img
                className="presale_img"
                src={require("../../Static/img/presale_img.png")}
                alt="img"
              />
              <div className="presale_starting_box px-3 px-md-5 py-2 py-md-4 text-center">
                <h4 className="mb-3 mb-md-4">Pre-sale starting in</h4>
                <Countdown date={'2023-02-01T01:02:03'} renderer={renderer} />

                <div className="btn_box mt-2">
                  <button className="btn font-weight-bold w-100 rounded-pill bg-white text-black">
                    Get Whitlisted Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
