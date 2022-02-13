import React from "react";
import "./Homepage.css";
import Countdown from "react-countdown";
import CollectionSlider from "../../Components/CollectionSlider/CollectionSlider";
function Homepage(props) {
  return (
    <div id="Homepage">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
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
                <Countdown date={"2023-02-01T01:02:03"} renderer={renderer} />

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

      <div className="section_container py-3 py-md-5">
        <div className="row">
          <div className="col-md-6">
            <div className="col_wrapper">
              <img
                className="w-100"
                src={require("../../Static/img/red_girl_img.png")}
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="col_wrapper">
              <h2 className="mb-3 mb-md-5">About RED girl</h2>

              <p>
                “When I started working on the RED GIRL characters, I planned
                they would all be the same. But they didn't "listen" to me
                eventually and each drawing became unique, like everyone of us.
                <br />
                <br />
                RED GIRLS have a lot in common, but each one is completely
                different. Everyone has different emotional content and external
                details. There is no complete repetition. They are similar but
                they are not clones. Everyone is unique and everyone has their
                own emotions, personality. Therefore, they are like living
                things. They seemed to come alive and brought me to them.”
              </p>

              <div className="user_info d-flex align-items-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle me-4"
                  style={{ width: "50px" }}
                  alt="Avatar"
                />
                <h5 className="text_red">skolyshev</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section id="Section2">
      <div className="section_container">
        <CollectionSlider></CollectionSlider>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section id="Section3">
      <div className="section_container py-3 py-md-5">
        <div className="row gx-5">
          <div className="col-md-6">
            <div className="col_wrapper">
              <h2 className="mb-3 mb-md-5">Traits & Rarity</h2>
              <p className="family_outfit">
                Red girl’ NFT is a community-driven collectibles NFT project.
                ‘Red girl’ NFTs are made up with over a hundred exciting traits
                of cloths, hair, hats, body and backgrounds. Each Red Girl is a
                unique digital collectibles living on the Ethereum blockchain as
                ERC-721 tokens and hosted on IPFS.
                <br />
                <br />
                Red girl are much more than an NFT art project. We have plans
                and hopes to build a ecosystem comprised of interactivity and
                utility, community rewards and growth, collaboration with
                brands, and much more! We want the community to help dictate and
                determine which features we should be focusing on next - so the
                NFT holders will be heavily involved in the future of the Red
                girl!
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <img src={require("../../Static/img/rapity_img.png")} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4() {
  return (
    <section id="Section4">
      <div className="section_container">
        <div className="content p-3 p-md-5">
          <h2 className="mb-3 mb-md-5"> Skolyshev</h2>

          <p>
            Skolyshev Born in Grodno, Eastern Europe. He studied painting on
            lectures and books by himself. His painting comprises of bright
            colors, bold scenes, presentation. After selecting a piece of the
            wall in your home, hang one there. After a while she will "heal"
            there, will attract the attention of guests and "make friends" with
            you. I assure you that you will not be able to dwell on one plot and
            soon will want to replenish your collection. Then you will be
            pleasantly surprised that the paintings are executed in series and
            perfectly combined with each other.
          </p>
        </div>
        <br />
        <br />
        <br />
        <img src={require("../../Static/img/skoly_img.png")} alt="img" />
      </div>
    </section>
  );
}

function Section5() {
  return (
    <section id="Section5">
      <div className="section_container py-3 py-md-5">
        <div className="title_styles text-center py-3 py-md-5">
          <h2 className="mb-2"> Red Girl NFT Roadmap</h2>
          <span className="text-white-50 family_outfit">
            Goals and strategies in long-term
          </span>
        </div>
      </div>
    </section>
  );
}
