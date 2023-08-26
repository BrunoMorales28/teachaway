import CONSTANTS from "./constants";

const options = {
  headers: {
    Authorization: "client-id " + CONSTANTS.CLIENT_ID,
  },
};

export const getImages = (section = CONSTANTS.SECTIONS.TOP, sort = CONSTANTS.SORT_OPTIONS.VIRAL, window = "", page = 0) => {
  const requestUrl = `${CONSTANTS.BASE_IMGUR_URL}/${section}/${sort}/${page}`;
  console.log(requestUrl);
  fetch(requestUrl, options)
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
    });
};
