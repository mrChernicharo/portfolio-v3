export enum SkillCategory {
  Language = "language",
  Framework = "framework",
  Library = "library",
  Platform = "platform",
  Database = "database",
  Tool = "tool",
}

export interface Job {
  id: string;
  title: string;
  type: string;
  company: string;
  company_img_url: string;
  company_website_url: string;
  company_location: string;
  company_address: string;
  started_at: string;
  ended_at: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  site_url: string;
  github_url: string;
  created_at: string;
  updated_at: string;
  description: string;
  language: string;
  image_urls?: string[];
  video_url?: string;
}

export interface MainProject extends Project {
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  first_used_at: string;
  image_url: string;
  description: string;
  level: number;
}

export interface AppImage {
  url: string;
  mini_url: string;
}

export type GridArea = {
  name: string;
  w: number;
  h: number;
  x: number;
  y: number;
};

export type GridImageArea = GridArea & { url: string; mini_url: string; width: number; height: number };
