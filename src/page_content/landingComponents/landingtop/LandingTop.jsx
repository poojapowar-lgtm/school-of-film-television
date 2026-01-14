import React from "react";
import "./landingtop.css";
import { SocialIcon } from "react-social-icons";
import socialIconsData from "../../../components/reuseable_components/socialIconsData";

const LandingTop = () => {
  return (
    <section className="landing-top">
      <div className="landing-overlay"></div>

      {/* Top Bar */}
      <div className="landing-top-bar">
        <div className="logos">
          <img
            src="/assets/icons/mit_logo.webp"
            alt="Logo 2"
            className="ld-logo2"
          />
          <img
            src="/assets/icons/film_logo.webp"
            alt="Logo 1"
            className="ld-logo1"
          />
          <h1 className="logo-title">
            School Of <br />
            Film & Television
          </h1>
        </div>

        <div className="ld-social">
          {socialIconsData.map(({ url, network, bgColor }, index) => (
            <SocialIcon
              key={index}
              className="ld-social-icons"
              url={url}
              network={network}
              bgColor={bgColor}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="landing-main">
        <div className="landing-left">
          {" "}
          <h2 className="ld-main-title">Bring Imagination To Life</h2>
          {/* Left Card */}
          <div className="info-card">
            <h3 className="form-title">Apply Now / Enquiry Now</h3>

            <form className="apply-form">
              {/* Name */}
              <input type="text" placeholder="Full Name" />

              {/* Mobile */}
              <input type="tel" placeholder="Mobile Number" />

              {/* Email */}
              <input type="email" placeholder="Email ID" />

              {/* Country | State | City */}
              <div className="form-row">
                <select>
                  <option>Country</option>
                  <option>India</option>
                </select>

                <select>
                  <option>State</option>
                  <option>Maharashtra</option>
                </select>

                <select>
                  <option>City</option>
                  <option>Pune</option>
                </select>
              </div>

              {/* Program */}
              <select>
                <option>Select Program</option>
                <option>B.Sc Filmmaking</option>
                <option>M.Sc Filmmaking</option>
                <option>Diploma in Media</option>
              </select>

              {/* Submit */}
              <button type="submit" className="button" id="landing-btn">
                Apply Now
              </button>
            </form>
          </div>
        </div>

        {/* Vertical Text Right Bottom */}
        <div className="landingtop-text">
          <h3 className="ldtop-title">Our Alumni</h3>
          <h3 className="ldtop-name">Mr.Ankit Bhat (Associate Dop)</h3>
          <p className="ldtop-desc">On the set of feature film</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="landing-bottom">
        <div className="bottom-block">
          <p className="bt-block-text">Last date of Application</p>
          <h4 className="bt-block-title">20 February, 2026</h4>
        </div>

        <div className="divider"></div>

        <div className="bottom-block">
          <p className="bt-block-text">Full time</p>
          <h4 className="bt-block-title" style={{color:"red"}}>3 Programs</h4>
        </div>
      </div>
    </section>
  );
};

export default LandingTop;
