import { createBrowserRouter } from "react-router-dom";
import ImageGallery from "./pages/ImageGallery";
import ErrorPage from "./pages/ErrorPage";
import { getImageDetails } from "./apis/getImages";
import ImageDetails from "./pages/ImageDetails";

const imageLoader = async ({ params }: any) => {
  const imageDetails = await getImageDetails(params.imageId);
  return imageDetails;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ImageGallery />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/image/:imageId",
    loader: imageLoader,
    element: <ImageDetails />,
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);

export default router;
