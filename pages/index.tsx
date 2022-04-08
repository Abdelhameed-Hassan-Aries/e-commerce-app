import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.scss";
import Actum from "/assets/ACTUMLOGO.svg";
import Cart from "/assets/CART.svg";
import HeroGallery from "/assets/galleryMain.png";
import GalleryTwo from "/assets/gallery2.svg";
import GalleryThree from "/assets/gallery3.svg";
import GalleryFour from "/assets/gallery4.svg";

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
              <Cart />
            </div>
            <div className={styles.divider}></div>
          </div>
        </header>

        <main className={styles.main}>
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

          <section className={styles.gallery}></section>
        </main>
      </div>
    </>
  );
};

export default Home;
