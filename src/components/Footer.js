import Instagram from "../assets/instagram-logo.svg";
import Discord from "../assets/discord.png";
import Twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer class="footer-container">
      <a href="https://www.instagram.com/gaurav._.sekar/" target="_blank">
        <img src={Instagram} alt="Insta Logo" className="insta-logo"></img>
      </a>
      <a href="https://discordapp.com/users/272421758999461889" target="_blank">
        <img src={Discord} alt="Discord Logo" className="discord-logo"></img>
      </a>
      <a href="https://twitter.com/Infonioknight" target="_blank">
        <img src={Twitter} alt="Twitter Logo" className="twitter-logo"></img>
      </a>
    </footer>
  );
}
