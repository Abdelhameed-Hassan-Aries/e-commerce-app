import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.scss";
import Actum from "/assets/ACTUMLOGO.svg";
import Cart from "/assets/CART.svg";
import HeroGallery from "/assets/galleryMain.png";
import Reinforced from "/assets/reinforced.png";
import Shape from "/assets/shape.png";
import Wave from "/assets/wave.png";
import Colored from "/assets/colored.png";
import Red from "/assets/red.png";
import Pastel from "/assets/pastel.png";
import GalleryTwo from "/assets/gallery2.svg";
import GalleryThree from "/assets/gallery3.svg";
import GalleryFour from "/assets/gallery4.svg";
import Sorting from "/assets/sort.svg";
import ArrowDown from "/assets/arrowDown.svg";
import ArrowLeft from "/assets/leftArrow.svg";
import ArrowRight from "/assets/rightArrow.svg";

import { Gallery } from "../types/types";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Actum Digital</title>
        <meta name="description" content="E-commerce site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <header>
          <div className={styles.header}>
            <div className={styles.content}>
              <Actum />
              <Cart style={{ cursor: "pointer" }} />
            </div>
            <div className={styles.divider}></div>
          </div>
        </header>

        <main className={styles.main}>
          {/*  first section */}

          <section className={styles.hero}>
            <div className={styles.cart}>
              <div className={styles.title}>Recycled Plastic</div>
              <div className={styles.addToCart}>
                <button className={styles.cartBtn}>ADD TO CART</button>
              </div>
            </div>
            <div className={styles.featured}>
              <Image
                className={styles.featuredImg}
                src={HeroGallery}
                alt="hero-image"
                quality={100}
                height={500}
                sizes="fill"
              />

              <button className={styles.featuredBtn}>Featured</button>
            </div>
            <div className={styles.about}>
              <div className={styles.aboutDetails}>
                <div className={styles.detailsTitle}>
                  Materials people also use
                </div>
                <div className={styles.detailsImgs}>
                  <GalleryTwo />
                  <GalleryThree className={styles.galleryThree} />
                  <GalleryFour />
                </div>
                <div className={styles.detailsContent}>
                  <div className={styles.contentTitle}>Details</div>
                  <div className={styles.contentDescription}>
                    Weight: 2340g/m2 <br /> Thickness 3cm
                  </div>
                </div>
              </div>
              <div className={styles.aboutContent}>
                <div className={styles.aboutTitle}>
                  About the Recycled Plastic
                </div>
                <div className={styles.aboutSubtitle}>Plastic</div>
                <div className={styles.aboutParagraph}>
                  Plastic recycling is the reprocessing of plastic waste into
                  new and useful products. When performed correctly, this can
                  reduce dependence on landfill, conserve resources and protect
                  the environment from plastic pollution and greenhouse gas
                  emissions. Although recycling rates are increasing, they lag
                  behind those of other recoverable materials, such as
                  aluminium, glass and paper. The global recycling rate in 2015
                  was 19.5%, while 25.5% was incinerated and the remaining 55%
                  disposed of to landfill. Since the beginning of plastic
                  production in the 20th century, until 2015, the world has
                  produced some 6.3 billion tonnes of plastic waste, only 9% of
                  which has been recycled, and only ~1% has been recycled more
                  than once.[6]
                </div>
              </div>
            </div>
            <div className={styles.divider}></div>
          </section>

          {/*  second section */}

          <section className={styles.gallery}>
            <div className={styles.galleryHeader}>
              <div className={styles.galleryTitle}>
                <div className={styles.galleryTitleType}>Materials /</div>
                <div className={styles.gallerySelection}>Premium Photos</div>
              </div>

              <div className={styles.gallerySort}>
                <Sorting />
                <div className={styles.gallerySortBy}>SortBy </div>
                <div className={styles.galleryPrice}>
                  Price <ArrowDown />
                </div>
              </div>
            </div>

            <div className={styles.galleryContent}>
              <div className={styles.galleryFilters}>
                <div className={styles.materialFiltersTitle}>Materials</div>
                <div className={styles.materialFilters}>
                  {materials.map((material, i) => {
                    return (
                      <div key={i} className={styles.itemFiltersItems}>
                        <input
                          key={i}
                          type="checkbox"
                          name={material}
                          value={material}
                          className={styles.itemInput}
                        />
                        <label htmlFor={material} className={styles.itemLabel}>
                          {material}
                        </label>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.divider}></div>
                <div className={styles.priceFiltersTitle}>Price Range</div>
                <div className={styles.priceFilters}>
                  {priceRange.map((item, i) => {
                    return (
                      <div key={i} className={styles.itemFiltersItems}>
                        <input
                          type="checkbox"
                          name={item}
                          value={item}
                          className={styles.itemInput}
                        />
                        <label htmlFor={item} className={styles.itemLabel}>
                          {item}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={styles.galleryShowcase}>
                {galleryData.products.map((product) => {
                  return (
                    <div key={product.name} className={styles.product}>
                      <div className={styles.galleryShowcaseImage}>
                        <Image
                          src={product.image.src}
                          alt={product.image.alt}
                          width={280}
                          height={390}
                        />

                        {product.bestseller && (
                          <div className={styles.galleryShowcaseBestSeller}>
                            Best Seller
                          </div>
                        )}

                        <div className={styles.galleryShowcaseAddCart}>
                          <div className={styles.galleryShowcaseAddCartTitle}>
                            ADD TO CART
                          </div>
                        </div>
                      </div>

                      <div className={styles.galleryShowcaseTitle}>
                        {product.name}
                      </div>
                      <div className={styles.galleryShowcaseSubtitle}>
                        {product.category}
                      </div>
                      <div className={styles.galleryShowcasePrice}>
                        ${product.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className={styles.footer}>
            <ArrowLeft className={styles.pageArrowLeft} />
            <div className={styles.activePageNumber}>1</div>
            <div className={styles.pageNumber}>2</div>
            <div className={styles.pageNumber}>3</div>
            <div className={styles.pageNumber}>4</div>
            <ArrowRight className={styles.pageArrowRight} />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

const materials = [
  "wood",
  "Concrete",
  "Brick",
  "Glass",
  "Steel",
  "Carbon Fiber",
  "Copper",
];

const priceRange = [
  "Lower than $20",
  "$20 - $100",
  "$100 - $200",
  "More than $200",
];

const galleryData: Gallery = {
  products: [
    {
      name: "Reinforced",
      category: "Glass",
      price: "33.78",
      currency: "USD",
      image: {
        src: Reinforced,
        alt: "reinforced",
      },
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      name: "Shape",
      category: "Steel",
      price: "93.89",
      currency: "USD",
      image: {
        src: Shape,
        alt: "shape",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Wave",
      category: "Steel",
      price: "120.21",
      currency: "USD",
      image: {
        src: Wave,
        alt: "wave",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Colored",
      category: "Glass",
      price: "100.00",
      currency: "USD",
      image: {
        src: Colored,
        alt: "colored",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Red",
      category: "Brick",
      price: "101.00",
      currency: "USD",
      image: {
        src: Red,
        alt: "red",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
    {
      name: "Pastel",
      category: "Brick",
      price: "101.00",
      currency: "USD",
      image: {
        src: Pastel,
        alt: "pastel",
      },
      bestseller: false,
      featured: false,
      details: null,
    },
  ],
};
