import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as legoData from "../../asset/json/loading/legoloading.json";

// CSS

import "../../css/loading/loading.css";

import logo from "../../asset/img/Logo.png";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Loading = () => {
  return (
    <div>
      <FadeIn className="centered">
        <div>
          <div>
            <img src={logo} alt="haha" />
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Loading;
