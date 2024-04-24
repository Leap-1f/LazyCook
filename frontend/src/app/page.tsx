import { AboutUs } from "../components/HomePage/AboiutUs";
import { Carousel } from "../components/HomePage/Carousel";
import { Footer } from "../components/HomePage/Footer";
import { Reviews } from "../components/HomePage/Reviews";
import { SiteMap } from "../components/HomePage/SiteMap";
import { Reee } from "../components/HomePage/test";

export default function Home() {
  return (
    <div>
      {/* <Reee></Reee> */}
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <SiteMap></SiteMap>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}
