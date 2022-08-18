import parse from 'url-parse';

export const getPathnameFromURL = (url?: string) => {
  if (!url) {
    return '/';
  }
  const { pathname } = parse(url);

  return pathname;
};
