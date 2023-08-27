import CONSTANTS from "../constants";
import { imgurResponseInterface, imgurGallery } from "../types";

const options = {
  headers: {
    Authorization: "client-id " + CONSTANTS.CLIENT_ID,
  },
};

export const getImages = (section = CONSTANTS.SECTIONS.TOP, sort = CONSTANTS.SORT_OPTIONS.VIRAL, window = "day", page = 0, showViral = true, nsfw = false) => {
  const requestUrl = `${CONSTANTS.BASE_IMGUR_URL}/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}&mature=${nsfw}`;
  return fetch(requestUrl, options)
    .then((res) => res.json())
    .then((res: imgurResponseInterface): imgurGallery[] => {
      const imgurGalleries = res.data;
      const imgurImages = imgurGalleries.map((gallery) => ({
        ...gallery,
        link: gallery.images?.[0]?.link ?? "",
      }));
      return imgurImages;
    });
};
