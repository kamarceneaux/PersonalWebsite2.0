import ProjectCard from "./Components/ProjectCard";
import "./Projects.css";
import Typography from "@mui/material/Typography";

var susikiChips = ["React", "Spring Boot", "AWS", "Figma"];
var inPocketChips = ["Python", "SQLite", "Tkinter"];

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-container">
        <ProjectCard
          title={"Susiki"}
          subheader={"2024"}
          content={
            "Susiki is an academic assistant and planning app create by me. Susiki offers features like task and exam management, and it organizes events based on enrolled classes. It aims to simplify academic planning for students seeking a more cohesive tool."
          }
          chips={susikiChips}
          image={
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wi1DtOC0xzs?si=-lKp5E8DFGGZVsmx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          }
        >
          <h1>Description</h1>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            As I finished my first year of college, I sometimes struggled with
            ways to manage my academic workload at times. Constantly switching
            from app to app just to find one that I felt met my needs. This
            inspired me to make my own version of an app, that I felt like I
            would use and maybe others would too. I’ve called this app “Susiki”
            and it’s designed to be an academic assistant app, with features
            such as task and exam management and able to organize events based
            enrolled classes.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 2 }}
          >
            On a technical note, this full stack app taught me a lot of valuable
            information, outside of the information I gain in my role as a
            student application developer with LSU ITS. I wanted to apply a lot
            of those principles that I would see in production code to my own
            personal project, but also take on learning new technologies I don’t
            use in my role. I gained a lot of experience with React and being
            able to design my own schemas and software architecture was so cool
            to me (images shown below) but definitely gaining some real world
            exposure to a cloud provider like AWS was definitely challenging
            experience but the knowledge I’ve gained from going through those
            struggles was the best part. Definitely wouldn’t trade these past
            four months of hard work for anything and hopefully can’t wait to
            add on more to it.
            <br />
            <br />
            Technologies used: Java (Spring Boot), Typescript (React), AWS,
            Figma
          </Typography>
          <h2>Links</h2>
          <a
            href="https://susiki.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"View Susiki Live (application will soon be deceactivated)"}
          </a>
          <p>
            Github code will be provided once Susiki is successfully deleted!
          </p>
        </ProjectCard>
        <ProjectCard
          title={"InPocket"}
          subheader={"2021"}
          content={
            "InPocket is a personal finance tracker that helps users manage their expenses. It allows users to input their expenses and income, and it provides a visual representation of their financial status."
          }
          chips={inPocketChips}
          image={
            <iframe
              src="https://www.youtube.com/embed/zKJH-ljp5fQ?si=ukvtDj7DUjllzAN-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          }
        >
          <h1>Description</h1>
          <Typography variant="body2" color="text.secondary">
            A desktop application that allows users the ability to manage
            his/hers finances using a digital money log. Features of the
            application include the ability to add transactions such as expenses
            and income sources, view graphs and statistics related towards his
            or hers past financial history, and a spreadsheet showing history of
            their logged expenses or income sources. This project was also
            awarded best app in The Congressional App Challenge for district
            LA-06 in 2021.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Technologies used: Python, SQLite, Tkinter
          </Typography>
          <h2>Links</h2>
          <a
            href="https://github.com/kamarceneaux/InPocket"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"View InPocket on GitHub"}
          </a>
          <br />
          <a
            href="https://www.brproud.com/news/local-news/denham-springs-high-school-student-wins-2021-congressional-app-challenge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View InPocket on the News!
          </a>
        </ProjectCard>
      </div>
    </div>
  );
}
