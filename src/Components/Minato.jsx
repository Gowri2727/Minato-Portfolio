import React, { useState, useEffect } from "react";
import Email from "../Components/Email"
import '../Styles/Minato.css';
import kus from '../assets/ku.png';
import kush from "../assets/kun.png";
import ka from "../assets/kunai-i.png"
import Min from "../assets/Yellow.jpg";
import Fight from "../assets/fight.mp4";
import Po from "../assets/projectmin.png";
import Re from "../assets/resueready-p.jpg"
import De from "../assets/Dbes.png";
import portf from "../assets/pro1.gif";
import Rescue from "../assets/moon.gif";
import desk from "../assets/Desktop.mp4";
import AA from "../assets/AA.png";
import AB from "../assets/AB.png";
import AC from "../assets/AC.png";
import AD from "../assets/AD.png";
import AE from "../assets/AE.png";
import AF from "../assets/AF.png";
import Resume from "../assets/Res.jpg";
import Pdf from "../assets/Gowri_1.pdf";
const pages = ["kunai-video-name", "projects", "certifications", "resume", "contact", "footer"];

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showKunai, setShowKunai] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [resetAnimation, setResetAnimation] = useState(true);
  const [showIcePopMedia, setShowIcePopMedia] = useState(true);
  const [showRasenganMedia, setShowRasenganMedia] = useState(true);
  const [showMoonMedia, setShowMoonMedia] = useState(true);
  const [developerText, setDeveloperText] = useState("");
  const [textColor, setTextColor] = useState("#102542");

  const handleIcePopClick = () => setShowIcePopMedia(false);
  const handleRasenganClick = () => setShowRasenganMedia(false);
  const handleMoonClick = () => setShowMoonMedia(false);
  const texts = [
    "Crafting immersive digital experiences with the precision of a shinobi. Every line of code is a kunai, striking with speed, accuracy, and creativity.",
    "Coding with the swiftness of a shinobi—every keystroke a calculated strike, every website a masterpiece in motion.",
    "A developer with the speed of a shinobi and the precision of a seal—crafting seamless, high-performance experiences with every line of code."
  ];

  useEffect(() => {
    if (currentPage === 0) {
      setShowKunai(false);
      setShowVideo(false);
      setShowTitle(false);
      setResetAnimation(true);
      setTimeout(() => setShowKunai(true), 10);
      setTimeout(() => setResetAnimation(false), 10);
      setTimeout(() => {
        setShowVideo(true);
        setTimeout(() => {
          setShowVideo(false);
          setShowTitle(true);
        }, 11000);
      }, 1100);
    } else {
      setShowKunai(false);
    }
    if (currentPage === 1) {
      setShowIcePopMedia(true);
      setShowRasenganMedia(true);
      setShowMoonMedia(true);
    }
  }, [currentPage]);

  useEffect(() => {
    let textIndex = 0;
    let colorInterval;

    const changeText = () => {
      setDeveloperText(texts[textIndex]);
      textIndex = (textIndex + 1) % texts.length;
    };

    // const changeColor = () => {
    //   setTextColor(prevColor => (prevColor === "yellow" ? "tamoto" : "yellow"));
    // };
    const changeColor = () => {
      setTextColor(prevColor => {
         if (prevColor === "#102542") return "#A31621"; // Madder
         if (prevColor === "#A31621") return "#102542"; // Dark Blue
         return "#102542"; // Reset to yellow
      });
   };
   
    if (showTitle) {
      changeText();
      colorInterval = setInterval(() => {
        changeText();
        changeColor();
      }, 5990);
    }

    return () => clearInterval(colorInterval);
  }, [showTitle]);

  return (
    <div className="container">
      <div className="sidebar">
        {
          pages.map((_, index) => (
            <img key={index} src={kush} alt="Kunai" className={`kunai-icon ${currentPage === index ? "active" : ""}`} onClick={() => setCurrentPage(index)} />
          ))
        }
      </div>
      <div className="content">
        {currentPage === 0 && (
          <>
            <div className="fit-con">
              <div>
                {!resetAnimation && showKunai && !showVideo && !showTitle && (
                  <img
                    src={ka}
                    alt="Kunai"
                    className={`kunai-animation`}
                  />
                )}
              </div>

              {!resetAnimation && showVideo && (
                <video
                  src={Fight}
                  autoPlay
                  muted
                  className={`video-section fade-out`}
                  onEnded={() => {
                    setShowTitle(true);
                    setShowKunai(false);
                  }}
                />
              )}

              {!resetAnimation && showTitle && (
                <div className="name-section fade-in">
                  <div>
                    <h1 className="title">Gowri Shankar</h1>
                    <p className="subtitle">Web Developer | App Developer </p>
                    <p className="developer-text" style={{ color: textColor }}>
                      {developerText}
                    </p>
                  </div>
                  <img src={Min} alt="Minato" className="minato-img" />
                </div>
              )}
            </div>
          </>
        )}
        {currentPage === 1 && (
          <>
            {(!resetAnimation && showTitle) && (
              <div className="projects-header">
                Weaving code with the speed and precision of a shinobi—every project a flash of innovation, every website a mark of mastery.
              </div>
            )}
            <div className="projects-container fade-in">
              <div className="project-box project-ice-pop">
                {showIcePopMedia ? (
                  <img
                    src={De}
                    alt="De"
                    className="project-media"
                    onClick={() => {
                      setShowIcePopMedia(false);
                      // Reset others if needed:
                      setShowRasenganMedia(true);
                      setShowMoonMedia(true);
                    }}
                  />
                ) : (
                  <video src={desk} autoPlay loop muted className="project-media" />)}
                <div className="project-name">
                  <div className="p1">Desktop Assistant</div>
                  <button className="b1" onClick={() => window.open("https://github.com/Gowri2727/-Desktop-Assistant-using-Python.git", "_blank")}> GitHub</button>
                </div>
              </div>

              <div className="project-box project-rasengan">
                {showRasenganMedia ? (
                  <img src={Re} alt="Re" className="project-media" onClick={() => { setShowRasenganMedia(false); setShowIcePopMedia(true); setShowMoonMedia(true); }} />
                ) : (
                  <img src={Rescue} alt="Rescue Gif" className="project-media" />
                )}
                <div className="project-names">
                  <div className="p1">Rescue Ready</div>
                  <button className="b1" onClick={() => window.open("https://github.com/Gowri2727/Rescue.git", "_blank")}> GitHub </button>
                </div>
              </div>

              <div className="project-box project-moon">
                {showMoonMedia ? (
                  <img src={Po} alt="Po" className="project-media" onClick={() => {
                    setShowMoonMedia(false); setShowIcePopMedia(true); setShowRasenganMedia(true);
                  }} />
                ) : (
                  <img src={portf} alt="Portfolio Gif" className="project-media" />
                )}
                <div className="project-namey">
                  <div className="p1">Town Plan</div>
                  <button className="b1" onClick={() => window.open("https://github.com/Gowri2727/Town-Plan.git", "_blank")} > GitHub </button>
                  <button className="b2" onClick={() => window.open("https://town-planning.vercel.app/", "_blank")} > Live </button>
                </div>
              </div>
            </div>
          </>
        )}
        {currentPage === 2 && (
          <div className="certificates fade-in">
            <h1 className="contact-text">
              Each certification is a symbol of mastered techniques—proof of skill, precision, and the relentless pursuit of excellence
            </h1>
            <h2>Certifications & Badges</h2>
            <div className="cert-boxes">
              <div className="cert-boxA">
                <div className="imgA">
                  <img src={AA} alt="AA" className="anim-AA" />
                </div>
                <div className="box-content">
                  <h3 className="Cer">JavaScript Essentials 1</h3>
                  <h3 className="Com">Cisco</h3>
                  <h3 className="Dat">December 2024</h3>
                  <h3
                    className="Li"
                    onClick={() => window.open("https://www.credly.com/badges/a38b5933-fad6-4436-b669-2aa88d13460c/public_url", "_blank")}
                  >
                    View Certificate
                  </h3>

                </div>
              </div>
              <div className="cert-boxB">
                <div className="imgB">
                  <img src={AB} alt="AB" className="anim-AB" />
                </div>
                <div className="box-content"> <h3 className="Cer">JavaScript Essentials 2</h3>
                  <h3 className="Com">Cisco</h3>
                  <h3 className="Dat">December 2024</h3>
                  <h3 className="Li" onClick={() => window.open("https://www.credly.com/badges/91e7534d-0709-4877-99aa-f679546b017e/public_url", "_blank")}>
                    View Certificate
                  </h3></div>
              </div>
              <div className="cert-boxC">
                <div className="imgC">
                  <img src={AC} alt="AC" className="anim-AC" />
                </div>
                <div className="box-content"><h3 className="Cer">Java Programming Fundamentals</h3>
                  <h3 className="Com">EDX</h3>
                  <h3 className="Dat">May 2024</h3>
                  <h3 className="LiA" onClick={() => window.open("https://courses.edx.org/certificates/9d1ce7a06f3f4da2a14ac7f4578bae93", "_blank")}>
                    View Certificate
                  </h3></div>
              </div>
              <div className="cert-boxD">
                <div className="imgD">
                  <img src={AD} alt="AD" className="anim-AD" />
                </div>
                <div className="box-content">
                  <h3 className="Cer">CCNA: Introduction to Networks</h3>
                  <h3 className="Com">Cisco</h3>
                  <h3 className="Dat">August 2024</h3>
                  <h3 className="LiA" onClick={() => window.open("https://www.credly.com/badges/489425d4-1853-4d30-aef1-748eb1617915/public_url", "_blank")}>
                    View Certificate
                  </h3>
                </div>
              </div>
              <div className="cert-boxE">
                <div className="imgE">
                  <img src={AE} alt="AE" className="anim-AE" />
                </div>        <div className="box-content">
                  <h3 className="Cer">JavaScript (Basic)</h3>
                  <h3 className="ComA">HackerRank</h3>
                  <h3 className="DatA">September 2024</h3>
                  <h3 className="Li" onClick={() => window.open("https://www.hackerrank.com/certificates/d4ef72489666", "_blank")}>
                    View Certificate
                  </h3>
                </div>
              </div>
              <div className="cert-boxF">
                <div className="imgF">
                  <img src={AF} alt="AF" className="anim-AF" />
                </div>        <div className="box-content">
                  <h3 className="Cer">JavaScript</h3>
                  <h3 className="ComB">IT Spectilist</h3>
                  <h3 className="DatB">-------  ----</h3>
                  <h3 className="Li" onClick={() => window.open("", "_blank")}>
                    View Certificate
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}


        {currentPage === 3 && (
          <div className="resume-cv fade-in">
            <img src={Resume} alt="Kushina" className="resume-img" />
            <div className="resume-right">
              <div className="resume-buttons">
                <button
                  className="download-btn"
                  onClick={() => {
                    const link = document.createElement("a"); link.href = Pdf; link.download = "Gowri_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link);
                  }}> Download Resume</button>
              </div>
              <div className="resume-text">
                <h1 className="contact-text">"Unseal the scroll! Hidden within is a record of my skills, experience, and achievements—ready for your perusal. Let's create something legendary!"</h1>
              </div>
            </div>
          </div>
        )}
        {currentPage === 4 && <Email />}


        {currentPage === 5 && (

          <div className="footer fade-in">

            <div className="footer-kunai-items">
              <span className="footer-texts">
                Forging digital experiences with the swiftness of a shinobi—where every project is a strike of brilliance, and every website leaves a lasting mark.
              </span>
              <div className="footer-container">
                <img src={kus} alt="Kunai" className="footer-kunais" />
                <span className="footer-text">@ Gowri Shankar</span>
              </div>
            </div>
            <div className="footer-kunai-container">
              <div className="footer-kunai-item">
                <img src={kus} alt="Kunai" className="footer-kunai" />
                <a href="https://www.hackerrank.com/profile/gowrishankarenu1" className="hackerrank" target="_blank">HackerRank</a>
              </div>
              <div className="footer-kunai-item">
                <img src={kus} alt="Kunai" className="footer-kunai" />
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="linkedin" target="_blank" >LinkedIn</a>
              </div>
              <div className="footer-kunai-item">
                <img src={kus} alt="Kunai" className="footer-kunai" />
                <a href="https://github.com/Gowri2727" className="github" target="_blank" >GitHub</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;

