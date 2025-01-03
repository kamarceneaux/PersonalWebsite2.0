/* eslint-disable react/prop-types */
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "./ProjectCard.css";
import { ExpandMoreRounded } from "@mui/icons-material";
import { Chip } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function ProjectCard({
  title,
  subheader,
  content,
  chips,
  image,
  children,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card-container">
      <Card
        sx={{
          maxWidth: "100%",
          color: "black",
          width: "100%",
          bgcolor: "white",
        }}
      >
        <CardHeader title={title} subheader={subheader} />
        {image ? (
          <CardMedia
            component="iframe"
            src={image.props.src}
            title={title}
            height="400"
            width="200"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : null}
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {
            <div className="chips-container">
              {chips.map((chip) => (
                <Chip label={chip} key={chip} />
              ))}
            </div>
          }
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreRounded />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {children}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
