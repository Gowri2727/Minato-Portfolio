import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Email from "../Components/Email";
import "../Styles/Minato.css";
import kus from "../assets/ku.png";
import kush from "../assets/kun.png";
import ka from "../assets/kunai-i.png";
import Min from "../assets/Yellow.jpg";
import Bg2 from "../assets/bg-2.jpg";
import ResumeImage from "../assets/Res.jpg";
import CodeDuelCover from "../assets/code-duel-cover.jpg";
import CodeDuelVideo from "../assets/code-duel-video.gif";
import Fight from "../assets/fight.mp4";
import Po from "../assets/projectmin.png";
import Re from "../assets/resueready-p.jpg";
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
import Ko from "../assets/flying-thunder-god-jutsu.jpg";
import KK from "../assets/lNF_.gif";

const pages = [
  { id: "arrival", label: "Arrival", chapter: "Hidden Leaf Arrival" },
  { id: "projects", label: "Missions", chapter: "Classified Mission Files" },
  { id: "certifications", label: "Scrolls", chapter: "Scroll Repository" },
  { id: "resume", label: "Resume", chapter: "Service Record" },
  { id: "contact", label: "Terminal", chapter: "Mission Terminal" },
  { id: "footer", label: "Signal", chapter: "Archive Links" },
];

const heroTexts = [
  "I build immersive web and app experiences with speed, clarity, and production discipline.",
  "Every interface is treated like a mission: researched, engineered, refined, and shipped.",
  "Frontend craft, backend logic, and mobile thinking combined into reliable digital products.",
];

const heroPortraits = [
  { src: Min, alt: "Minato silhouette artwork" },
  { src: Bg2, alt: "Second Minato hero artwork" },
];

const missionFiles = [
  {
    title: "Code-Duel",
    rank: "S Rank",
    status: "Completed",
    difficulty: "Competitive Coding",
    overview:
      "A coding battle experience focused on fast problem solving, player flow, and competitive feedback.",
    stack: ["React", "Node.js", "Supabase", "AI", "Python"],
    image: CodeDuelCover,
    preview: CodeDuelVideo,
    previewType: "image",
    github: "https://github.com/Gowri2727/Code-Duel",
    live: "https://code-duel.gowri.dev",
  },
  {
    title: "Desktop Assistant",
    rank: "A-Rank Automation",
    status: "Completed",
    difficulty: "Python / Voice Workflow",
    overview:
      "A desktop companion focused on utility actions, command handling, and responsive user assistance.",
    stack: ["Python", "Automation", "Speech"],
    image: De,
    preview: desk,
    previewType: "video",
    github: "https://github.com/Gowri2727/-Desktop-Assistant-using-Python.git",
  },
  {
    title: "Rescue Ready",
    rank: "S-Rank Civic Tech",
    status: "Completed",
    difficulty: "Emergency Response",
    overview:
      "A rescue-focused product concept for fast assistance, clear communication, and urgent coordination.",
    stack: ["React", "UX", "Safety"],
    image: Re,
    preview: Rescue,
    previewType: "image",
    github: "https://github.com/Gowri2727/Rescue.git",
  },
  {
    title: "Town Plan",
    rank: "A-Rank Planning System",
    status: "Completed",
    difficulty: "Interactive Web",
    overview:
      "A modern planning interface that turns civic layout ideas into an explorable web experience.",
    stack: ["React", "Vercel", "UI"],
    image: Po,
    preview: portf,
    previewType: "image",
    github: "https://github.com/Gowri2727/Town-Plan.git",
    live: "https://town-planning.vercel.app/",
  },
  {
    title: "LostNFound",
    rank: "S-Rank Platform",
    status: "Completed",
    difficulty: "Full Product Flow",
    overview:
      "A lost-and-found platform shaped around discovery, reporting, and reconnecting people with items.",
    stack: ["React", "Render", "Product"],
    image: Ko,
    preview: KK,
    previewType: "image",
    github: "https://github.com/Gowri2727/LostNFound",
    live: "https://lostnfoundfrontend.onrender.com/",
  },
];

const certificates = [
  {
    key: "A",
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    image: AA,
    link: "https://www.credly.com/badges/a38b5933-fad6-4436-b669-2aa88d13460c/public_url",
  },
  {
    key: "B",
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    image: AB,
    link: "https://www.credly.com/badges/91e7534d-0709-4877-99aa-f679546b017e/public_url",
  },
  {
    key: "C",
    title: "Java Programming Fundamentals",
    issuer: "EDX",
    image: AC,
    link: "https://courses.edx.org/certificates/9d1ce7a06f3f4da2a14ac7f4578bae93",
  },
  {
    key: "D",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    image: AD,
    link: "https://www.credly.com/badges/489425d4-1853-4d30-aef1-748eb1617915/public_url",
  },
  {
    key: "E",
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    image: AE,
    link: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC6483206&trackId=ODB12COJA&key=520dba41f01c5c778eab163dc67b46c529c9eac3",
  },
  {
    key: "F",
    title: "JavaScript",
    issuer: "IT Specialist",
    image: AF,
    link: "https://drive.google.com/file/d/19XCOXCo0Rna3yy8JRMLIPGnVuA7tVyy1/view?usp=drive_link",
  },
];

const RESUME_URL = "https://drive.google.com/file/d/1YOUR_RESUME_FILE_ID/view?usp=sharing";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showKunai, setShowKunai] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [resetAnimation, setResetAnimation] = useState(true);
  const [activeProject, setActiveProject] = useState(null);
  const [developerText, setDeveloperText] = useState("");
  const introVideoRef = useRef(null);
  const [cursor, setCursor] = useState({ x: -100, y: -100, px: 0, py: 0 });
  const [ripples, setRipples] = useState([]);

  const activePage = pages[currentPage];

  const particleSeeds = useMemo(() => Array.from({ length: 16 }, (_, index) => index), []);
  const leafSeeds = useMemo(() => Array.from({ length: 24 }, (_, index) => index), []);
  const featherSeeds = useMemo(() => Array.from({ length: 10 }, (_, index) => index), []);
  const introKunaiStartDelay = 140;
  const introKunaiFlightDuration = 760;
  const introVideoStartDelay = introKunaiStartDelay + introKunaiFlightDuration + 100;

  const changePage = useCallback((index) => {
    setCurrentPage(index);
    setActiveProject(null);
    if (index !== 0) {
      setShowKunai(false);
      setShowVideo(false);
      setShowTitle(true);
      setResetAnimation(false);
    }
  }, []);

  const openUrl = useCallback((url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const completeIntroSequence = useCallback(() => {
    setShowVideo(false);
    setShowTitle(true);
    setShowKunai(false);
    setResetAnimation(false);
  }, []);

  const handleProjectPreview = useCallback((index) => {
    setActiveProject((current) => (current === index ? null : index));
  }, []);


  const playPreview = useCallback((event) => {
    event.currentTarget.play().catch(() => {});
  }, []);

  const resetPreview = useCallback((event) => {
    event.currentTarget.pause();
    event.currentTarget.currentTime = 0;
  }, []);

  useEffect(() => {
    let textIndex = 0;
    const changeText = () => {
      setDeveloperText(heroTexts[textIndex]);
      textIndex = (textIndex + 1) % heroTexts.length;
    };

    changeText();
    const textInterval = setInterval(changeText, 5990);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    const preloadVideo = document.createElement("video");
    preloadVideo.preload = "auto";
    preloadVideo.src = Fight;
    preloadVideo.load();

    return () => {
      preloadVideo.removeAttribute("src");
      preloadVideo.load();
    };
  }, []);

  useEffect(() => {
    setShowKunai(false);
    setShowVideo(false);
    setShowTitle(false);
    setResetAnimation(false);

    const kunaiTimer = window.setTimeout(() => setShowKunai(true), introKunaiStartDelay);
    const videoTimer = window.setTimeout(() => {
      setShowVideo(true);
    }, introVideoStartDelay);

    return () => {
      window.clearTimeout(kunaiTimer);
      window.clearTimeout(videoTimer);
    };
  }, [introKunaiStartDelay, introVideoStartDelay]);

  useEffect(() => {
    if (!showVideo) {
      return undefined;
    }

    const video = introVideoRef.current;
    if (!video) {
      return undefined;
    }

    let canvas = null;
    let context = null;
    let blackFrameStreak = 0;

    const handleTimeUpdate = () => {
      // Only inspect the final moments. If a true trailing black segment
      // exists, stop right before it. Otherwise the complete video plays.
      if (
        video.duration &&
        Number.isFinite(video.duration) &&
        video.currentTime >= video.duration - 0.6
      ) {
        try {
          if (!canvas) {
            canvas = document.createElement("canvas");
            canvas.width = video.videoWidth || 320;
            canvas.height = video.videoHeight || 180;
            context = canvas.getContext("2d", { willReadFrequently: true });
          }
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
          let luminance = 0;
          let sampledPixels = 0;
          for (let index = 0; index < pixels.length; index += 128) {
            luminance +=
              pixels[index] * 0.299 + pixels[index + 1] * 0.587 + pixels[index + 2] * 0.114;
            sampledPixels += 1;
          }
          const averageLuminance = sampledPixels > 0 ? luminance / sampledPixels : 255;
          if (averageLuminance < 20) {
            blackFrameStreak += 1;
            if (blackFrameStreak >= 2) {
              video.pause();
              completeIntroSequence();
            }
          } else {
            blackFrameStreak = 0;
          }
        } catch {
          // Ignore frame read errors; the ended event still handles completion.
        }
      }
    };

    const handleEnded = () => {
      video.pause();
      completeIntroSequence();
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);
    video.currentTime = 0;
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [completeIntroSequence, showVideo]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursor({
        x: event.clientX,
        y: event.clientY,
        px: (event.clientX / Math.max(window.innerWidth || 1, 1) - 0.5) * 18,
        py: (event.clientY / Math.max(window.innerHeight || 1, 1) - 0.5) * 18,
      });
    };

    const handleClick = (event) => {
      const id = window.crypto?.randomUUID?.() || `${Date.now()}-${event.clientX}`;
      setRipples((items) => [...items.slice(-5), { id, x: event.clientX, y: event.clientY }]);
      setTimeout(() => {
        setRipples((items) => items.filter((item) => item.id !== id));
      }, 700);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className={`container page-${activePage.id}`}
      style={{
        "--pointer-x": `${cursor.px}px`,
        "--pointer-y": `${cursor.py}px`,
      }}
    >
      <div className="cursor-aura" style={{ left: cursor.x, top: cursor.y }} />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="click-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}

      <div className="ambient-stage" aria-hidden="true">
        <span className="moon-orb" />
        <span className="sunset-wash" />
        <span className="cloud cloud-one" />
        <span className="cloud cloud-two" />
        <span className="cloud cloud-three" />
        <span className="fog fog-one" />
        <span className="fog fog-two" />
        {particleSeeds.map((seed) => (
          <span key={`particle-${seed}`} className={`particle particle-${seed + 1}`} />
        ))}
        {leafSeeds.map((seed) => (
          <span key={`leaf-${seed}`} className={`leaf leaf-${seed + 1}`} />
        ))}
        <span className="hokage-silhouette" />
        <span className="forest-line forest-line-back" />
        <span className="forest-line forest-line-front" />
        <span className="sun-ray sun-ray-one" />
        <span className="sun-ray sun-ray-two" />
        {featherSeeds.map((seed) => (
          <span key={`feather-${seed}`} className={`feather feather-${seed + 1}`} />
        ))}
      </div>

      <nav className="sidebar" aria-label="Portfolio missions">
        {pages.map((page, index) => (
          <button
            key={page.id}
            type="button"
            className={`nav-kunai ${currentPage === index ? "active" : ""}`}
            style={{ "--nav-index": index }}
            onClick={() => changePage(index)}
            aria-label={page.chapter}
            data-tooltip={page.label}
          >
            <img src={kush} alt="" className="kunai-icon" />
          </button>
        ))}
      </nav>

      <main className="content">
        <div className="chapter-mark">
          <span>Mission {String(currentPage + 1).padStart(2, "0")}</span>
          <strong>{activePage.chapter}</strong>
        </div>
        <div key={activePage.id} className="thunder-transition" aria-hidden="true">
          <span className="thunder-seal">飛</span>
          <span className="thunder-flash" />
          <span className="thunder-leaf thunder-leaf-one" />
          <span className="thunder-leaf thunder-leaf-two" />
          <span className="thunder-feather" />
        </div>

        {currentPage === 0 && (
          <section className="fit-con hero-archive" aria-label="Portfolio arrival">
            {!resetAnimation && showKunai && !showVideo && !showTitle && (
              <img src={ka} alt="Kunai arrival animation" className="kunai-animation" />
            )}

            {showVideo && (
              <div className="intro-video-shell">
                <video
                  ref={introVideoRef}
                  src={Fight}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  className="video-section"
                  onEnded={completeIntroSequence}
                />
              </div>
            )}

            {!showVideo && showTitle && (
              <div className="name-section fade-in">
                <div className="hero-copy">
                  <p className="eyebrow">Fourth Hokage Mission Archive</p>
                  <h1 className="title">Gowri Shankar</h1>
                  <p className="subtitle">Web Developer | App Developer</p>
                  <p className="developer-text mission-quote">
                    {developerText}
                  </p>
                  <div className="hero-actions">
                    <button type="button" className="primary-action" onClick={() => changePage(1)}>
                      View Missions
                    </button>
                    <button
                      type="button"
                      className="ghost-action"
                      onClick={() => openUrl("https://github.com/Gowri2727")}
                    >
                      View GitHub
                    </button>
                  </div>
                </div>
                <div className="hero-portrait">
                  <div className="portrait-display" aria-label="Alternating Minato artwork">
                    {heroPortraits.map((portrait, index) => (
                      <img
                        key={portrait.src}
                        src={portrait.src}
                        alt={portrait.alt}
                        className={`minato-img portrait-${index + 1}`}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {currentPage === 1 && (
          <section className="projects-panel fade-in" aria-label="Projects">
            <div className="section-heading">
              <p className="eyebrow">Mission History</p>
              <h2>Classified Mission Files</h2>
              <p className="mission-quote">
                Each build keeps its original preview and links, now framed around the problem,
                stack, and product outcome.
              </p>
            </div>

            <div className="projects-container">
              {missionFiles.map((project, index) => {
                const isActive = activeProject === index;
                const showVideoPreview = project.previewType === "video" && isActive;
                const previewImage = isActive ? project.preview : project.image;

                return (
                  <article
                    key={project.title}
                    className={`project-box ${isActive ? "is-active" : ""}`}
                  >
                    <button
                      type="button"
                      className="project-media-button"
                      onClick={() => handleProjectPreview(index)}
                      aria-label={`Preview ${project.title}`}
                    >
                      {showVideoPreview ? (
                        <video
                          src={project.preview}
                          autoPlay
                          loop
                          muted
                          playsInline
                          poster={project.image}
                          preload="metadata"
                          className="project-media"
                          onMouseEnter={playPreview}
                          onMouseLeave={resetPreview}
                        />
                      ) : (
                        <img
                          src={previewImage}
                          alt={`${project.title} preview`}
                          className="project-media"
                          loading="lazy"
                        />
                        )}
                      <span>{isActive ? "Video Preview Open" : index === 0 ? "Featured Mission" : "Video Preview"}</span>
                    </button>
                    <div className="project-body">
                      <div className="project-meta">
                        <span className="project-rank">{project.rank}</span>
                        {project.status && <span className="project-status">{project.status}</span>}
                      </div>
                      <h3>{project.title}</h3>
                      <div className="project-type-row">
                        <span>Project Type</span>
                        <strong>{project.difficulty}</strong>
                      </div>
                      <span className="mission-overview-label">Mission Overview</span>
                      <p>{project.overview}</p>
                      <span className="tech-label">Technologies</span>
                      <div className="project-stack" aria-label={`${project.title} technologies`}>
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <div className="project-actions">
                        <button type="button" className="b1" onClick={() => openUrl(project.github)}>
                          GitHub
                        </button>
                        {project.live && (
                          <button type="button" className="b2" onClick={() => openUrl(project.live)}>
                            Live Demo
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {currentPage === 2 && (
          <section className="certificates fade-in" aria-label="Certifications and badges">
            <div className="section-heading">
              <p className="eyebrow">Scroll Repository</p>
              <h2>Certifications & Badges</h2>
              <p className="mission-quote">
                Proof of practiced fundamentals, presented as sealed records instead of static tiles.
              </p>
            </div>
            <div className="cert-boxes">
              {certificates.map((certificate, index) => (
                <article
                  key={certificate.key}
                  className={`cert-box cert-box${certificate.key}`}
                  style={{ "--cert-index": index }}
                >
                  <img src={ka} alt="" className="cert-kunai-asset" loading="lazy" />
                  <img src={certificate.image} alt={`${certificate.title} badge`} loading="lazy" />
                  <div className="box-content">
                    <span>{certificate.issuer}</span>
                    <h3 className="Cer">{certificate.title}</h3>
                    <button type="button" className="Li" onClick={() => openUrl(certificate.link)}>
                      View Certificate
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {currentPage === 3 && (
          <section className="resume-cv fade-in" aria-label="Resume">
            <div className="resume-frame">
              <img src={ResumeImage} alt="Resume artwork" className="resume-img" loading="lazy" />
            </div>
            <div className="resume-right">
              <div className="section-heading align-left">
                <p className="eyebrow">Service Record</p>
                <h2>Resume Scroll</h2>
                <p className="mission-quote">
                  A compact record of skills, experience, and achievements for recruiters and
                  collaborators.
                </p>
              </div>
              <a
                className="download-btn"
                href={"https://drive.google.com/file/d/13Vbe3x0w6mr0l4b-hwkkAwIcRI-GtvgP/view?usp=sharing"}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </section>
        )}

        {currentPage === 4 && <Email />}

        {currentPage === 5 && (
          <footer className="footer fade-in">
            <span className="footer-texts mission-quote">
              Forging digital experiences with speed, precision, and a lasting product signature.
            </span>
            <div className="footer-center-piece">
              <div className="footer-main-kunai">
                <img src={kus} alt="Gowri Shankar" className="footer-kunai footer-kunai-main" />
                <span className="footer-main-label">Gowri Shankar</span>
              </div>
            </div>
            <div className="footer-social-row">
              <div className="footer-kunai-item footer-kunai-from-left">
                <img src={kus} alt="Codolio" className="footer-kunai" />
                <a
                  href="https://codolio.com/profile/Gowri2727"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Codolio
                </a>
              </div>
              <div className="footer-kunai-item footer-kunai-from-top">
                <img src={kus} alt="LinkedIn" className="footer-kunai" />
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="footer-kunai-item footer-kunai-from-right">
                <img src={kus} alt="GitHub" className="footer-kunai" />
                <a
                  href="https://github.com/Gowri2727"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  kal world
                </a>
              </div>
            </div>
          </footer>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
