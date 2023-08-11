import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import { ReactComponent as Logo } from "../assets/HeroText.svg";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();

  function handleContactUs() {
    window.open(
      "https://www.genxintel.com/contact",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          {/* <Logo /> */}
          <h1 className="logo" onClick={()=> handleContactUs("/")}>
            <img
              width="100%"
              src="https://uploads-ssl.webflow.com/64b90955ad5a6e90a1b9fb36/64b909b1a4a6aad970b62183_white-ai-p-500.png"
              alt=""
            />
            <div className="wrapper">
              <div className="animated-circle-text">
                <svg viewBox="0 0 244.1 244.1">
                  <path
                    id="circlePath"
                    d="M226.6,122.1c0,57.7-46.8,104.5-104.5,104.5S17.6,179.8,17.6,122.1S64.4,17.6,122.1,17.6
      S226.6,64.4,226.6,122.1z"
                    fill="transparent"
                  />
                  <text>
                    <textPath href="#circlePath">
                      Let's revolutionize the Software Industry.
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </h1>
          <p className="intro__scroll">Scroll to begin the journey</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            Get Started
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <div className="outro_container">
          <p className="outro__text">Wish you had a great flight with us...</p>
          <button onClick={handleContactUs} className="glow-on-hover">
            Contact us
          </button>
          <a className="start_over_link" href="/">Start again</a>
        </div>
      </div>
    </div>
  );
};
