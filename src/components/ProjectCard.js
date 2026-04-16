import React, { useMemo, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCard.css";

function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const primaryLabel = isBlog ? "Blog" : "GitHub";
  const imageAlt = title ? `${title} preview` : "Project preview";
  const descriptionLimit = 145;
  const shouldTruncate = description.length > descriptionLimit;
  const previewText = useMemo(() => {
    if (!shouldTruncate) {
      return description;
    }

    return `${description.slice(0, descriptionLimit).trimEnd()}...`;
  }, [description, shouldTruncate]);
  const displayText = isExpanded ? description : previewText;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={imageAlt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="project-card-description">{displayText}</Card.Text>

        {shouldTruncate && (
          <button
            type="button"
            className="project-card-toggle"
            onClick={() => setIsExpanded((current) => !current)}
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}

        <div className="project-card-actions">
          {ghLink && (
            <Button
              variant="primary"
              href={ghLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-button"
            >
              <BsGithub aria-hidden="true" />
              <span>{primaryLabel}</span>
            </Button>
          )}

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="project-card-button"
            >
              <CgWebsite aria-hidden="true" />
              <span>Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
