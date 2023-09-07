import CONSTANTS from "../constants";
import { imgurResponseInterface, imgurGallery, imgDetails, imgDetailsResponseInterface } from "../types";

const options = {
  headers: {
    Authorization: "client-id " + CONSTANTS.CLIENT_ID,
  },
};

const fallbackImg: imgDetails = {
  id: "0",
  title: "No image found",
  description: "This is not the image you are looking for",
  link: "https://i.imgur.com/H7VgktX.gif",
  ups: 0,
  downs: 0,
  score: 0,
};

const fallbackGallery: imgurGallery = {
  id: "0",
  title: "No images found",
  description: "Thes is not the images you are looking for",
  images: [fallbackImg],
  link: "https://i.imgur.com/H7VgktX.gif",
};

export const getImages = (section = CONSTANTS.SECTIONS.TOP, showViral = true, sort = CONSTANTS.SORT_OPTIONS.VIRAL, window = "day", page = 0, nsfw = false) => {
  const requestUrl = `${CONSTANTS.BASE_IMGUR_URL}/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}&mature=${nsfw}`;

  return fetch(requestUrl, options)
    .then((res) => res.json())
    .then((res: imgurResponseInterface): imgurGallery[] => {
      const { data, status } = res;
      if (status === 403) throw new Error("If you are browsing from localhost, try to use 127.0.0.1 instead.");
      const imgurImages = data.map((gallery) => ({
        ...gallery,
        id: gallery.images?.[0]?.id ?? "",
        link: gallery.images?.[0]?.link ?? "",
        description: gallery.images?.[0]?.description ?? "",
      }));
      return imgurImages;
    })
    .catch((e) => {
      console.error("Error while fetching image gallery.", e);
      return [fallbackGallery];
    });
};

export const getImageDetails = (imageId: string) => {
  const requestUrl = `${CONSTANTS.BASE_IMGUR_URL}/image/${imageId}`;

  return fetch(requestUrl, options)
    .then((res) => res.json())
    .then((res: imgDetailsResponseInterface): imgDetails => {
      const { data, status } = res;
      if (status === 403) throw new Error("If you are browsing from localhost, try to use 127.0.0.1 instead.");
      if (status === 400) throw new Error("Image not found. Using default");
      return data;
    })
    .catch((e) => {
      console.error("Error while fetching image details.", e);
      return fallbackImg as imgDetails;
    });
};
