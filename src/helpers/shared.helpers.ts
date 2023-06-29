export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const parseGithubUrl = (url: string) => url.replace("https://api.github.com/repos", "https://github.com/");

export const getMiniUrl = (url: string) => url.replace("images", "thumbs");

// https://api.github.com/repos/mrChernicharo/module-federation-with-vite

// const grid = [
//   ["A", "B", "C"],
//   ["D", "B", "E"],
//   ["F", "F", "E"],
// ];

export function getGridSchema(grid: string[][]) {
  const areas: Record<string, any> = {};

  for (const [y, row] of grid.entries()) {
    for (const [x, area] of grid[y].entries()) {
      if (!(area in areas)) {
        areas[area] = { area, w: 1, h: 1, x, y };
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
