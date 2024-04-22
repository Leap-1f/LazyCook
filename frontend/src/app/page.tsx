import { AboutUs } from "../components/HomePage/AboiutUs";
import { Carousel } from "../components/HomePage/Carousel";
import { Footer } from "../components/HomePage/Footer";
import { SiteMap } from "../components/HomePage/SiteMap";

export default function Home() {
  return (
    <div>
      <Carousel></Carousel>
      <AboutUs></AboutUs>
      <SiteMap></SiteMap>
      <Footer></Footer>
    </div>
  );
}
