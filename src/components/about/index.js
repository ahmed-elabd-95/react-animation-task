import React from "react";
import Fade from "react-reveal/Fade";


function AboutSection() {
  return (
    <div className="relative sm:h-screen w-full overflow-hidden bg-black flex p-3 sm:p-11 flex-col sm:flex-row">
      <div className="flex sm:flex-2 p-4 border-b-[1px] sm:border-b-0 sm:border-r-[1px] sm:my-2">
        <Fade left duration={1500}>
     <img src="./about-us.png" alt="about" className="w-full object-cover pr-2" />
     </Fade>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 ">
      <Fade right duration={1500}>
        <h1 className="text-2xl sm:text-5xl  font-bold text-white pb-4 text-center sm:text-left">
          40 Years of 
          <br />
          Experience
        </h1>
        </Fade>
        <Fade right duration={1500}>
        <button className="btn sm:btn-wide mx-auto sm:mr-0  text-white bg-transparent rounded-full text-lg font-medium">
          View More
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9908 3.77724L2.38391 12.3841L0.929332 10.9296L9.53624 2.32266L1.84214 2.21441L1.8136 0.186171L12.9703 0.343149L13.1273 11.4999L11.0991 11.4713L10.9908 3.77724Z"
              fill="white"
            />
          </svg>
        </button>
        </Fade>
        <hr className="mt-3 mb-3"/>
        <Fade right duration={1500}>

        <h1 className="text-[#B88F48]  sm:text-[110px] text-6xl pb-4  font-bold sm:-ml-10">About Us</h1>
        </Fade>
        <Fade right duration={1500}>

        <p className="sm:text-lg text-base text-white text-justify">
          Macber is a one stop hub, offering holistic solutions under one
          visionary roof. The company has succeeded in launching four iconic
          projects in a record time of one year, thanks to the power of its
          construction and development arms, gaining the trust of investors
          across different segments.
        </p>
        </Fade>
      </div>
    </div>
  );
}

export default AboutSection;
