type ProjectLinkName = "github" | "deploy"

type ProjectLink = {
  [key in ProjectLinkName]: string
}

type Project = {
  name: string;
  description: string;
  links: ProjectLink;
  image?: string;
  display: boolean;
}

type Curiosity = {
  text: string;
}

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
