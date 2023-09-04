export interface imgurResponseInterface {
  data:  imgurGallery[];
  status: number;
  success: boolean;
}

export interface imgDetailsResponseInterface {
  data: imgDetails;
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

export type imgDetails = {
  id: string;
  title: string;
  description: string;
  link: string;
  ups: number;
  downs: number;
  score: number;
}

export type gallerySection = "hot" | "top" | "user";

export interface reduxState {
  currentSection: gallerySection;
  showViral: boolean;
}
