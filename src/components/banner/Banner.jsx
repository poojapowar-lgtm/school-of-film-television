import { GoDotFill } from "react-icons/go";
import { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./banner.css";

const Banner = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <section className="bnr-video">
          <div className="bnr-video-container">
            {/* <video ref={videoRef} autoPlay loop muted={isMuted} playsInline>
              <source
                src="/assets/video/2759484-uhd_3840_2160_30fps.mp4"
                type="video/mp4"
              />
            </video> */}
            <img
              // src="/assets/images/banner/bannerhome1.png"
              src="/assets/images/banner/ankit_bnr.svg"
              alt="Short Film Banner"
              className="bnr-image"
            />

            {/* Overlay Items */}
            <div className="bnr-overlay">
              <div className="bnr-left">
                {/* <h2 className="bnr-left-title">
                  Dream <GoDotFill className="dot-icon" /> Direct
                  <GoDotFill className="dot-icon" /> Deliver
                </h2> */}
                {/* <h3 className="banner-title">Our Alumini</h3>
                <h3 className="banner-title">Mr.Ankit Bhat (Associate DoP)</h3>
                <p className="banner-text">On the Set Of Feature Film</p> */}
                <button
                  className="button"
                  id="bnr-btn"
                  onClick={() => navigate("/short-film")}
                >
                  More Alumni Work
                </button>
                {/* SOUND BUTTON */}
                {/* <button onClick={toggleMute} className="volume-btn">
                  {isMuted ? (
                    <VolumeX size={25} color="#fff" />
                  ) : (
                    <Volume2 size={25} color="#fff" />
                  )}
                </button> */}
              </div>

              {/* <div className="banner-right">
                <h3 className="banner-title">Our Alumini</h3>
                <h3 className="banner-title">Mr.Ankit Bhat (Associate DoP)</h3>
                <p className="banner-text">On the Set Of Feature Film</p>
                <button className="banner-btn">More Alumini Work</button>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
