import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <Link style={{ color: "hsl(246, 80%, 60%)", textDecorationLine: "none" }} to="/About">
        About
      </Link>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jlbspyder" target="_blank" rel="noreferrer">
          Jlbspyder
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
