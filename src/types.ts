export interface imgurResponseInterface {
  data: imgurGallery[];
  status: number;
  success: boolean;
}

export type imgurGallery = {
  id: string;
  description: string;
  title: string;
  images: [
    {
      id: string;
      description: string;
      title: string;
      link: string;
    }
  ];
  link: string;
};

export type gallerySection = "hot" | "top" | "user";

export interface reduxState {
  currentSection: gallerySection;
  showViral: boolean;
}
