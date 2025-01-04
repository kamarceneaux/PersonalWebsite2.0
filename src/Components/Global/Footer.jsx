import { Grid2 } from "@mui/material";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={"footer-container"}>
      <Grid2 container>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <p>
            Designed and Developed by{" "}
            <a href={"https://kameronarceneaux.me"} target={"_blank"}>
              Kameron Arceneaux
            </a>
          </p>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }} className={"fc-right"}>
          <p>
            <a
              href="https://www.linkedin.com/in/kameron-arceneaux/"
              target={"_blank"}
              className="social-icon"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/kamarceneaux"
              target={"_blank"}
              className="social-icon"
            >
              <FaGithub size={24} />
            </a>
          </p>
        </Grid2>
      </Grid2>
    </footer>
  );
}
