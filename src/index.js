import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

//? Avatar
const Avatar = () => {
  return <img src="jonas.jpeg" alt="jonas" className="avatar" />;
};

//? Intro
const Intro = () => {
  return (
    <>
      <h1>Jonas The Asshole</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eos
        nesciunt alias voluptatum fuga, et repudiandae quasi assumenda commodi
        quo?
      </p>
    </>
  );
};

//? Skills
const SkillList = () => {
  return (
    <div className="skill-list">
      <Skills
        skill={"HTML/Css"}
        emoji={"😍"}
        bgColor={"blue"}
        textColor={"white"}
      />

      <Skills
        skill={"javascript"}
        emoji={"💪"}
        bgColor={"yellow"}
        textColor={"black"}
      />

      <Skills
        skill={"react"}
        emoji={"💪"}
        bgColor={"violet"}
        textColor={"white"}
      />

      <Skills
        skill={"Next Js"}
        emoji={"💪"}
        bgColor={"black"}
        textColor={"white"}
      />
    </div>
  );
};

const Skills = ({ skill, emoji, bgColor, textColor }) => {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div className="skill" style={style}>
      <span>{skill}</span>
      <span>{emoji}</span>
    </div>
  );
};

// Index.js
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
