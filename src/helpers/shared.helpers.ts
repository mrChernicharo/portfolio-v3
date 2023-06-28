export const capitalize = (str: string) => `${str[0].toUpperCase()}${str.slice(1)}`;

export const parseGithubUrl = (url: string) => url.replace("https://api.github.com/repos", "https://github.com/");

export const getMiniUrl = (url: string) => url.replace("images", "thumbs");

// https://api.github.com/repos/mrChernicharo/module-federation-with-vite
