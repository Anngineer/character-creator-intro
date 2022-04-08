import waveflip from "./images/waveflip.png";
import backward from "./images/backward.png";
import backwardgray from "./images/backwardgray.png";

import forward from "./images/forward.png";

import Backend from "./Backend";
import { useState } from "react";
import { Button } from "semantic-ui-react";
const Home = () => {
  const [dialogueNum, setDialogueNum] = useState(0);
  const [backButtonVisible, setBackButtonVisible] = useState(false);
  const [nextButtonVisible, setNextButtonVisible] = useState(true);
  const [linkVisible, setLinkVisible] = useState(false);
  function handleBackButton() {
    console.log("Back button was clicked!");

    if (dialogueNum > 0) {
      if (dialogueNum === 1) {
        setBackButtonVisible(false);
      }
      if (dialogueNum === Backend.introDialogue.length) {
        setNextButtonVisible(true);
      }
      setDialogueNum(dialogueNum - 1);
    }
  }
  function handleNextButton() {
    console.log("Next button was clicked!");
    if (dialogueNum < Backend.introDialogue.length) {
      if (dialogueNum === Backend.introDialogue.length - 1) {
        setLinkVisible(true);
        setNextButtonVisible(false);
        setBackButtonVisible(false);
      }

      if (dialogueNum === 0) {
        setBackButtonVisible(true);
      }
      setDialogueNum(dialogueNum + 1);
    }
  }
  return (
    <div className="greetings-section">
      <img src={waveflip} className="frank" alt="" />
      <div className="dialogue-box">
        {!backButtonVisible && (
          <div className="space-box" style={{ width: "2rem" }}></div>
        )}
        {backButtonVisible && (
          <button className="back-button" onClick={() => handleBackButton()}>
            <img src={backwardgray} className="button-image" alt="backward" />
          </button>
        )}
        {!linkVisible && <p>"{Backend.introDialogue[dialogueNum].text}"</p>}
        {linkVisible && (
          <div className="linkButtonContainer">
            <Button
              href="https://anngineer.github.io/character-creator/"
              className="linkButton"
              color="orange"
            >
              Let's build your chararcter!
            </Button>
          </div>
        )}
        {nextButtonVisible && (
          <button className="next-button" onClick={() => handleNextButton()}>
            <img src={forward} className="button-image" alt="forward" />
          </button>
        )}
      </div>
    </div>
  );
};
export default Home;
