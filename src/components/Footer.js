import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2023</p>
      <Link style={{ color: "hsl(246, 80%, 60%)", textDecorationLine: "none" }} to="/About">
        About
      </Link>
      <div className="attribution">
        Coded by{" "}
        <a href="https://github.com/Jlbspyder" target="_blank" rel="noreferrer">
          JLBSPYDER
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
