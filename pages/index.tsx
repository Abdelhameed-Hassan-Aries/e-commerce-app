import { useState, useEffect } from "react";
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
import ArrowLeft from "/assets/leftArrow.svg";
import ArrowRight from "/assets/rightArrow.svg";
import Close from "/assets/close.svg";
import { Gallery, GalleryData, SortMethod } from "../types/types";

const Home: NextPage = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryData[]>(
    galleryData.products
  );
  const [filteredGalleryItem, setFilteredGalleryItem] = useState([]);
  const [featuredItem, setFeaturedItem] = useState<GalleryData | undefined>();
  const [cartItems, setCartItems] = useState<GalleryData[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [addToCartBtn, setAddToCartBtn] = useState(false);
  const [currentHoveredItem, setCurrentHoveredItem] = useState<number | null>(
    null
  );
  const [currentSortMethod, setCurrentSortMethod] =
    useState<SortMethod>("Price");
  const [togglePrice, setTogglePrice] = useState(false);
  const [toggleAlphabit, setToggleAlphabit] = useState(false);
  const [activeCheckedPrice, setActiveCheckedPrice] = useState<number | null>(
    null
  );

  useEffect(() => {
    const getFeaturedItem = (): GalleryData | undefined => {
      const featuredItem = galleryData.products.find((elem) => elem.featured);
      return featuredItem;
    };

    setFeaturedItem(getFeaturedItem);
  }, []);

  const openCartPopup = () => {
    setIsCartPopupOpen(!isCartPopupOpen);
  };

  const addFeaturedToCart = () => {
    cartItems.push(featuredItem as GalleryData);
    setCartItems(cartItems);
    setCartItemsCount(cartItems.length);
    setIsCartPopupOpen(true);
  };

  const handleAddToCart = (product: GalleryData) => {
    cartItems.push(product);
    setCartItems(cartItems);
    setCartItemsCount(cartItems.length);
    setIsCartPopupOpen(true);
  };

  const removeSelectedItem = (index: number) => {
    cartItems.splice(index, 1);
    setCartItems(cartItems);
    setCartItemsCount(cartItems.length);
    if (cartItems.length === 0) {
      setIsCartPopupOpen(false);
    }
  };

  const clearCart = () => {
    setCartItemsCount(0);
    setCartItems([]);
    setIsCartPopupOpen(false);
  };

  const showAddToCartBtn = (index: number) => {
    setAddToCartBtn(true);
    setCurrentHoveredItem(index);
  };

  const removeAddToCartBtn = () => {
    setAddToCartBtn(false);
    setCurrentHoveredItem(null);
  };

  const handleSorting = (event?: any, sortMethodType?: string) => {
    const sortMethod: SortMethod = event ? event.target.value : sortMethodType;
    let sortedArr = galleryData.products;
    setCurrentSortMethod(sortMethod);
    switch (sortMethod) {
      case "Price":
        setTogglePrice(!togglePrice);
        sortedArr.sort((a, b) => {
          return togglePrice
            ? parseFloat(a.price) - parseFloat(b.price)
            : parseFloat(b.price) - parseFloat(a.price);
        });

        setGalleryItems(sortedArr);
        break;

      case "Alphabet":
        setToggleAlphabit(!toggleAlphabit);
        sortedArr.sort((a, b) => {
          return toggleAlphabit
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        });

        setGalleryItems(sortedArr);
        break;

      default:
        break;
    }
  };

  const toggleSorting = () => {
    handleSorting(null, currentSortMethod);
  };

  const handleMaterialFiltering = (event: any, materialName: string) => {
    console.log("event", event.target.checked);
    const selectedFilter = event.target.value;
  };

  const handlePriceFiltering = (Range: string, index: number) => {
    if (index === activeCheckedPrice) {
      setActiveCheckedPrice(null);
      setGalleryItems(galleryData.products);
      return;
    }

    setActiveCheckedPrice(index);

    let filteredGallery = [];

    switch (Range) {
      case priceRange[0]:
        filteredGallery = galleryData.products.filter(
          (galleryItem) => parseInt(galleryItem.price) < 20
        );
        setGalleryItems(filteredGallery);
        break;

      case priceRange[1]:
        filteredGallery = galleryData.products.filter((galleryItem) => {
          return (
            parseInt(galleryItem.price) >= 20 &&
            parseInt(galleryItem.price) <= 100
          );
        });
        setGalleryItems(filteredGallery);
        break;

      case priceRange[2]:
        filteredGallery = galleryData.products.filter(
          (galleryItem) =>
            parseInt(galleryItem.price) >= 100 &&
            parseInt(galleryItem.price) <= 200
        );
        setGalleryItems(filteredGallery);
        break;

      case priceRange[3]:
        filteredGallery = galleryData.products.filter(
          (galleryItem) => parseInt(galleryItem.price) > 200
        );
        setGalleryItems(filteredGallery);
        break;

      default:
        break;
    }
  };

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
              <div className={styles.cartImgWrapper}>
                <Cart className={styles.cartImg} onClick={openCartPopup} />

                {cartItemsCount > 0 && (
                  <div
                    className={styles.cartImgCounter}
                    onClick={openCartPopup}
                  >
                    {cartItemsCount}
                  </div>
                )}

                {isCartPopupOpen && (
                  <div className={styles.popup}>
                    {cartItems.map((cartItem, index) => {
                      return (
                        <div key={index}>
                          <div
                            className={styles.closeIcon}
                            onClick={() => removeSelectedItem(index)}
                          >
                            <Close />
                          </div>
                          <div className={styles.itemWrapper}>
                            <div className={styles.itemContent}>
                              <div className={styles.itemName}>
                                {cartItem.name}
                              </div>
                              <div className={styles.itemPrice}>
                                ${cartItem.price}
                              </div>
                            </div>

                            <div className={styles.itemImg}>
                              <Image
                                src={cartItem.image.src}
                                alt={cartItem.image.alt}
                                height={92}
                                width={168}
                              />
                            </div>
                          </div>
                          <div className={styles.divider}></div>
                        </div>
                      );
                    })}
                    <button className={styles.popupBtn} onClick={clearCart}>
                      CLEAR
                    </button>
                  </div>
                )}
              </div>
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
                <button className={styles.cartBtn} onClick={addFeaturedToCart}>
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className={styles.featured}>
              {featuredItem && (
                <Image
                  className={styles.featuredImg}
                  src={featuredItem?.image.src}
                  alt={featuredItem?.image.alt}
                  quality={100}
                  height={500}
                  sizes="fill"
                  priority={true}
                />
              )}

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
                <div
                  className={styles.gallerySortByIcon}
                  onClick={toggleSorting}
                >
                  <Sorting />
                </div>

                <div className={styles.gallerySortBy}>SortBy</div>

                <select
                  className={styles.galleryPrice}
                  onChange={handleSorting}
                  value={currentSortMethod}
                >
                  <option value="Price">Price</option>
                  <option value="Alphabet">Alphabet</option>
                </select>
              </div>
            </div>

            <div className={styles.galleryContent}>
              <div className={styles.galleryFilters}>
                <div className={styles.materialFiltersTitle}>Materials</div>

                {/* ///////////////////// */}
                {/* ///////////////////// */}
                {/* ///////////////////// */}

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
                          onChange={(event) =>
                            handleMaterialFiltering(event, material)
                          }
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
                  {priceRange.map((item, index) => {
                    return (
                      <div key={index} className={styles.itemFiltersItems}>
                        <input
                          type="checkbox"
                          name={item}
                          value={item}
                          className={styles.itemInput}
                          onChange={() => handlePriceFiltering(item, index)}
                          checked={activeCheckedPrice === index ? true : false}
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
                {galleryItems.slice(0, 6).map((product, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.product}
                      onMouseEnter={() => showAddToCartBtn(index)}
                      onMouseLeave={removeAddToCartBtn}
                    >
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

                        {addToCartBtn && currentHoveredItem === index && (
                          <div
                            className={styles.galleryShowcaseAddCart}
                            onClick={() => handleAddToCart(product)}
                          >
                            <div className={styles.galleryShowcaseAddCartTitle}>
                              ADD TO CART
                            </div>
                          </div>
                        )}
                      </div>

                      <div className={styles.galleryShowcaseTitle}>
                        {product.category}
                      </div>

                      <div className={styles.galleryShowcaseSubtitle}>
                        {product.name}
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
  "Wood",
  "Concrete",
  "Brick",
  "Glass",
  "Steel",
  "Carbon Fiber",
  "Copper",
  "Plastic",
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
    {
      name: "Recycled Plastic",
      category: "Plastic",
      price: "10000.00",
      currency: "USD",
      image: {
        src: HeroGallery,
        alt: "Recycled Plastic",
      },
      bestseller: false,
      featured: true,
      details: null,
    },
  ],
};
