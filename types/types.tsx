export type SortMethod = "Price" | "Alphabet";

export interface Gallery {
  [key: string]: GalleryData[];
}
export interface GalleryData {
  name: string;
  category: string;
  price: string;
  currency: string;
  image: {
    src: any;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  details: {
    weight: number;
    thickness: number;
    description: string;
    recommendations: [
      {
        src: string;
        alt: string;
      }
    ];
  } | null;
}
