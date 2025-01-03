import { Grid2 } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./Landing.css";
import LandingButton from "./LandingButton";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Landing() {
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid2
      container
      spacing={3}
      className={"section-container"}
      sx={{ direction: isMediumUp ? "row" : "column" }}
    >
      {isMediumUp && (
        <Grid2 size={{ s: 0, md: 4 }}>
          <div className="image-container">
            <img
              src="https://kameronpublicwebsite.blob.core.windows.net/public/me.png"
              className="responsive-image"
            ></img>
          </div>
        </Grid2>
      )}
      <Grid2 size={{ s: 12, md: 8 }}>
        <div className="content-container">
          <h3 id="landing-subtitle">
            Software Engineer | Aspiring Data Scientist
          </h3>
          <h1 id="landing-title">Hi, I'm Kameron Arceneaux</h1>
          <p id="landing-description">
            I am a Computer Science student at Louisiana State University
            specializing in Data Science and Analytics. Currently, I work
            part-time as a{" "}
            <span className="emphasis">
              Student Software Developer at LSU Information Technology Services
            </span>{" "}
            where I have been at since January 2024 and I am joining{" "}
            <span className="emphasis">
              Chevron in the Summer 2025 as a Software Engineering Intern
            </span>
            . I love building new solutions with technology and have a passion
            for life long learning. Here check out what I've been working on.
          </p>

          <Grid2 container spacing={1} className="landing-button-container">
            <LandingButton
              link={
                "https://kameronpublicwebsite.blob.core.windows.net/public/KameronArceneaux_Resume.pdf"
              }
            >
              View Resume <FaDownload />
            </LandingButton>
          </Grid2>
        </div>
      </Grid2>
    </Grid2>
  );
}