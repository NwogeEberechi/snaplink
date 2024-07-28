// src/utils/urlShortener.js
const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const shortUrlLength = 6;
const base = characters.length;
const urlMapping = new Map();
const reverseMapping = new Map();

const hashUrl = (url: string) => {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = (hash << 5) - hash + url.charCodeAt(i);
    // Convert to 32bit integer
    hash = hash & hash;
  }
  return Math.abs(hash);
};

const encodeNumber = (num: number) => {
  let shortPath = "";
  while (num > 0) {
    shortPath = characters[num % base] + shortPath;
    num = Math.floor(num / base);
  }
  return shortPath.padStart(shortUrlLength, characters[0]);
};

export const encode = (longUrl: string) => {
  if (reverseMapping.has(longUrl)) {
    return reverseMapping.get(longUrl);
  } else {
    const hash = hashUrl(longUrl);
    let shortPath = encodeNumber(hash);
    while (urlMapping.has(shortPath)) {
      shortPath = encodeNumber(hash + 1);
    }
    urlMapping.set(shortPath, longUrl);
    reverseMapping.set(longUrl, shortPath);
    return shortPath;
  }
};

export const decode = (shortUrl: string) => {
  const shortPath = shortUrl.split("/").pop();
  return urlMapping.get(shortPath) || null;
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};
