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
      <Section6></Section6>
      <Section7></Section7>
      <Section8></Section8>
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
      <div className="section_container py-3 py-md-5 px-3 px-md-0">
        <div className="row g-xl-0 justify-content-center">
          <div className="col-lg-6 ">
            <div className="box p-3 p-md-0">
              <h1 className="text-uppercase">
                Discover Rare Collection of NFT
              </h1>
              <p>
                “Everything or nothing. Here I am, in front of me is the World
                of Art - there is no turning back and I will force myself to
                love.”
              </p>

              <div className="nft_box d-none d-md-block my-3 my-md-5"></div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-6">
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
                  <button className="btn btn_hover_effect text-capitalize font-weight-bold w-100 rounded-pill bg-white text-black">
                    Get Whitlisted Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_container py-5 mt-5 px-3 px-md-0">
        <div className="row">
          <div className="col-md-6 order-2 order-md-1">
            <div className="col_wrapper">
              <img
                className="w-100"
                src={require("../../Static/img/red_girl_img.png")}
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="col_wrapper">
              <h2 className="mb-3 mb-md-5" id="about_red_girl">About RED girl</h2>

              <p >
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

              <div className="user_info d-flex align-items-center" >
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
      <div className="section_container px-3 px-md-0">
        <CollectionSlider></CollectionSlider>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section id="Section3">
      <div className="section_container py-3 py-md-5 px-3 px-md-0">
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
            <img
              className="w-100"
              src={require("../../Static/img/rapity_img.png")}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4() {
  return (
    <section id="Section4">
      <div className="section_container" id="Skolyshev">
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
        <img
          className="d-none d-md-block"
          src={require("../../Static/img/skoly_img.png")}
          alt="img"
        />
        <img
          className="d-md-none w-100"
          src={require("../../Static/img/mobile_skoly_img.png")}
          alt="img"
        />
      </div>
    </section>
  );
}

function Section5() {
  const roadmap_object = [
    {
      id: 1,
      img: require("../../Static/img/roadmap_img/1.png"),
      description: `Whitelist will be open in March for partners and individuals
      who completed required tasks.`,
    },
    {
      id: 2,
      img: require("../../Static/img/roadmap_img/2.png"),
      description: `Raffle registration for public sale in mid March 2022.`,
    },
    {
      id: 3,
      img: require("../../Static/img/roadmap_img/3.png"),
      description: `Exclusive air drop for red girl holders including brands collaboration.`,
    },
    // for roadmap styleing id
    {
      id: 6,
      img: require("../../Static/img/roadmap_img/6.png"),
      description: `There will be access for the red girl to use in these metaverse.`,
    },
    {
      id: 5,
      img: require("../../Static/img/roadmap_img/5.png"),
      description: `We are metaverse ready. We have acquired large piece of lands in both sandbox and decentraland.`,
    },
    {
      id: 4,
      img: require("../../Static/img/roadmap_img/4.png"),
      description: `Limited edition art piece. We will giveaway limited number of red girl sculpture to NFT owners.`,
    },
    {
      id: 7,
      img: require("../../Static/img/roadmap_img/7.png"),
      description: `Exclusive ‘red girl’ party event for token holders.`,
    },
    {
      id: 8,
      img: require("../../Static/img/roadmap_img/8.png"),
      description: `Tokenization of Sko1y’s physical painting, resvered only for our community.`,
    },
  ];
  // const roadmap_object_mobile = roadmap_object.filter((v,id)=> id+1 < v.id);
  // console.log(roadmap_object_mobile);
  return (
    <section id="Section5">
      <div className="section_container py-3 py-md-5 px-3 px-md-0">
        <div className="title_styles text-center py-3 py-md-5">
          <h2 className="mb-2" id="roadmap_girl"> Red Girl NFT Roadmap</h2>
          <span className="text-white-50 family_outfit">
            Goals and strategies in long-term
          </span>
        </div>

        <div className="body_styles">
          <div className="row g-3">
            {roadmap_object.map((v) => {
              return (
                <div className="col-lg-4" key={v.id}>
                  <div className="col_wrapper text-start text-lg-center d-flex d-lg-block  align-items-center">
                    <div className="item_wrapper mb-3 me-4 me-lg-0">
                      <img src={v.img} alt="img" />
                    </div>
                    <p>{v.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section6() {
  return (
    <section id="Section6">
      <div className="section_container p-3 p-md-5 px-3 px-md-0">
        <div className="row">
          <div className="col-md-6">
            <div className="col_wrapper text-center">
              <img className="w-75 mx-auto" src={require("../../Static/img/kaboom.png")} alt="img" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="col_wrapper p-4">
              <h2 className="mb-3" id="kaboom_lab">About KABOOM Lab</h2>
              <p className="family_outfil">
                Kaboom is a WEB3 laboratory comprised professionals from art
                world to crypto sharing the same vision and coming together, to
                create dynamic, diverse, empowering digital collectible and
                thriving community. We think there is a huge gap between artists
                and crypto, physical and digital, virtual and reality. Kaboom
                lab aim to act as a bridge between them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section7() {
  const team_member_object = [
    {
      id: 1,
      img: require("../../Static/img/team_members/team1.png"),
      name: "Thor Chan",
      subName: "The Tech Guru",
      description: `CEO of AAX.com. COO of FDT. He is also an investor and
      advisor in various Layer 2 solution, Defi, GameFi and NFT
      projects.`,
    },
    {
      id: 2,
      img: require("../../Static/img/team_members/team2.png"),
      name: "Uncle Paul",
      subName: "Metaverse and NFT OG",
      description: `Paul is an enthusiastic
      NFT collector while one of the earliest believer in metaverse. He is one of the biggest landowner in Sandbox.`,
    },
    {
      id: 3,
      img: require("../../Static/img/team_members/team3.png"),
      name: "San",
      subName: "Creative director",
      description: `San has worked with different artists over the past 10 years. His clients include famous art spaces and gallery in Asia.`,
    },
    {
      id: 4,
      img: require("../../Static/img/team_members/team4.png"),
      name: "JimmyW",
      subName: "Moderator",
      description: `Jimmy sourced capital for a number of businesses in the Blockchain space. He advises some of the startups in the industry.`,
    },
  ];
  return (
    <section id="Section7">
      <div className="section_container py-5 px-3">
        <div className="title_styles text-center py-3 py-md-5">
          <img src={require("../../Static/img/arrow.png")} alt="img" />
          <h2 className="mb-3 mt-4 text-uppercase"> Team Kaboom</h2>
          <span className="family_outfit font_18">
            The best professionals we are proud of
          </span>
        </div>
        <div className="body_styles">
          <div className="row g-3 g-md-5">
            {team_member_object.map((v) => {
              return (
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={v.id}>
                  <div className="col_wrapper text-center">
                    <img src={v.img} className="w-100" alt="img" />
                    <div className="col_content py-3">
                      <h5 className="my-2">{v.name}</h5>
                      <span className="font_18 font-weight-bold text_red family_outfit d-block py-2">
                        {v.subName}
                      </span>
                      <p className="family_outfit">{v.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section8() {
  return (
    <section id="Section8">
      <div className="section_container py-3 py-md-5 px-3 px-md-0">
        <h2 className="mb-3 mb-md-5" id="faq">FAQ</h2>
        <div className="accordion_wrapper">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is Metamask?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-mdb-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  MetaMask is a software cryptocurrency wallet used to interact
                  with the Ethereum blockchain. It allows users to access their
                  Ethereum wallet through a browser extension or mobile app,
                  which can then be used to interact with decentralized
                  applications.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How to mint with Metamask on a mobile phone?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-mdb-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  MetaMask allows you to display and transfer your NFTs/ERC-721
                  tokens directly. ... From there, you can mint, own, and manage
                  your NFTs with seamless and complete control no matter where
                  you are.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How to mint with Metamask on a computer?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-mdb-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ol>
                  <li className="px-2">
                    Download and install the MetaMask extension for your
                    browser.
                  </li>
                  <li className="px-2">Click on the “Get Started” button.</li>

                  <li className="px-2">
                    Select “Create a Wallet” and create a password.
                  </li>

                  <li className="px-2">
                    Write down, store, or memorize your Secret Backup Phrase.
                  </li>

                  <li className="px-2">
                    Confirm your Secret Backup Phrase to ensure you have it
                    correct.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Buying NFT for the first time?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-mdb-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Get the Metamask Chrome or Firefox extension. Load it with ETH
                  through services that allow you to change your money to ETH
                  like Coinbase, Binance or Kraken. Then, click the button
                  "MINT" on the scary banner to connect your wallet and approve
                  the transaction on Metamask. That’s it !
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Where does my NFT go after I purchase?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-mdb-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  Today the company is bringing NFTs to the desktop browser. ...
                  People who use Coinbase Wallet for desktop browsers will soon
                  see a new tab called “NFTs,” which will let you access the
                  non-fungible tokens (NFTs) associated with your wallet
                  address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
