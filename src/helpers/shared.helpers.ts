import { AppImage, GridArea } from "./types";

export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const parseGithubUrl = (url: string) => url.replace("https://api.github.com/repos", "https://github.com/");

export const getMiniUrl = (url: string) => url.replace("images", "thumbs");

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// https://api.github.com/repos/mrChernicharo/module-federation-with-vite

// const grid = [
//   ["A", "B", "C"],
//   ["D", "B", "E"],
//   ["F", "F", "E"],
// ];

export function getGridSchema(images: AppImage[], grid: string[][]) {
  const areas: Record<string, any> = {};
  let i = 0;

  for (const [y, row] of grid.entries()) {
    for (const [x, area] of grid[y].entries()) {
      if (!(area in areas)) {
        const areaImg = images[i % images.length];
        areas[area] = { area, w: 1, h: 1, x, y, url: areaImg.url, mini_url: areaImg.mini_url };
        i++;
      } else {
        if (areas[area].x === x) {
          areas[area].h++;
        } else if (areas[area].y === y) {
          areas[area].w++;
        }
      }
    }
  }
  return Object.values(areas);
}

export function parseGridAreas(gridTemplate: string[]) {
  const areas: Record<string, GridArea> = {};

  for (const [y, row] of gridTemplate.entries()) {
    for (const [x, area] of row.split(" ").entries()) {
      if (!(area in areas)) {
        areas[area] = { name: area, w: 1, h: 1, x, y: Number(y) };
      } else {
        if (areas[area].x === x) {
          areas[area].h++;
        } else if (areas[area].y === Number(y)) {
          areas[area].w++;
        }
      }
    }
  }

  return Object.values(areas);
}
