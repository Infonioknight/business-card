import Sebastian from "../assets/sebastian.png";
import LinkedIn from "../assets/linkedin.svg";
import Git from "../assets/github-mark.png";

export default function Header() {
  return (
    <header>
      <img src={Sebastian} className="headshot" alt="Noblesse Character"></img>
      <h1 className="name">Gaurav Sekar</h1>
      <h3 className="role">Frontend Developer</h3>
      <p className="personal-site">
        <a href="#" target="_blank">
          infonioknight.dev
        </a>
      </p>
      <div className="handle-buttons">
        <button className="handle-button linkedin-button">
          <a
            href="https://www.linkedin.com/in/gaurav-sekar-090bb023a/"
            target="_blank"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn Logo"
              className="handle-img"
            ></img>{" "}
            LinkedIn
          </a>
        </button>
        <button className="handle-button git-button">
          <a href="https://github.com/Infonioknight" target="_blank">
            <img src={Git} alt="Git logo" className="handle-img"></img> GitHub
          </a>
        </button>
      </div>
    </header>
  );
}
