export interface GalleryData {
  [key: string]: [
    {
      name: string;
      category: string;
      price: number;
      currency: string;
      image: {
        src: string;
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
  ];
}

export const materials = [
  "wood",
  "Concrete",
  "Brick",
  "Glass",
  "Steel",
  "Carbon Fiber",
  "Copper",
];

export const priceRange = [
  "Lower than $20",
  "$20 - $100",
  "$100 - $200",
  "More than $200",
];

export const galleryData = {
  products: [
    {
      name: "Reinforced",
      category: "Glass",
      price: 33.78,
      currency: "USD",
      image: {
        src: "../assets/reinforced.svg",
        alt: "reinforced",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      name: "Shape",
      category: "Steel",
      price: 93.89,
      currency: "USD",
      image: {
        src: "../assets/shape.svg",
        alt: "shape",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Wave",
      category: "Steel",
      price: 120.21,
      currency: "USD",
      image: {
        src: "../assets/wave.svg",
        alt: "wave",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Colored",
      category: "Glass",
      price: 100.0,
      currency: "USD",
      image: {
        src: "../assets/colored.svg",
        alt: "colored",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Red",
      category: "Brick",
      price: 101.0,
      currency: "USD",
      image: {
        src: "../assets/red.svg",
        alt: "red",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Pastel",
      category: "Brick",
      price: 101.0,
      currency: "USD",
      image: {
        src: "../assets/pastel.svg",
        alt: "pastel",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
  ],
} as unknown as GalleryData;
