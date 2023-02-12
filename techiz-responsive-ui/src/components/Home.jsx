import React from "react";
import vg from "../assets/vectorGraphics.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home-page1" id="home">
        <main>
          <h1>Techiz</h1>
          <p>Solution for all your tech problems.</p>
        </main>
      </div>

      <div className="home-page2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Our mission is to create Tech Support, Tech Consultants, Tech
            Educators and Tech Enablers. We are the only solution to the tech
            problems you face everyday. You can rest assure that your tech
            problems are in safe hands with us.
          </p>
        </div>
      </div>

      <div className="home-page3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            <strong>Techiz</strong> is Digital Services Agency. <br />
            We have a team strength of over 100+ in-house skilled resources that
            possess the right mix of technical competence and industry
            experience to understand client needs and provide them with the
            right solutions. Our passion is to turn smart ideas into reality. We
            have partnerships with leading technology companies.
          </p>
        </div>
      </div>

      <div className="home-page4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
