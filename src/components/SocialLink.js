import React from "react";

import { LinkedInIcon, GithubIcon, CodePenIcon } from "./icons";

function getIcon(type) {
  switch (type) {
    case "LinkedIn":
      return LinkedInIcon;
    case "Github":
      return GithubIcon;
    case "CodePen":
      return CodePenIcon;
    default:
      throw new Error(`Unknown SocialLink type: "${type}"`);
  }
}

function SocialLink({ className = "", type, href, width, height }) {
  let Icon = getIcon(type);

  return (
    <a className={className} aria-label={type} href={href}>
      <Icon width={width} height={height} />
    </a>
  );
}

export default SocialLink;
