import { AppImage } from "./types";

export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const parseGithubUrl = (url: string) => url.replace("https://api.github.com/repos", "https://github.com/");

export const getMiniUrl = (url: string) => url.replace("images", "thumbs");

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
