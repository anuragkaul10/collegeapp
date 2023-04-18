import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection() {
  const images = ["/images/gallery/img1.jpg", "/images/gallery/img2.jpg", "/images/gallery/img3.jpg", "/images/gallery/img4.jpg", "/images/gallery/img5.jpeg", "/images/gallery/img6.jpg", "/images/gallery/img7.jpeg", "/images/gallery/img8.jpg", "/images/gallery/img9.jpg"];
  return (
    <>
      <div className="section hero">
        <div className="col typography">
          <h1 className="title">What Are We About</h1>
          <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
          <button className="btn">
            {/* explore now */}
            <Link to="/recipes" style={{ color: "white" }}>
              explore now
            </Link>
          </button>
        </div>
        <div className="col gallery">
          {images.map((src, index) => (
            <CustomImage key={index} imgSrc={src} pt={"90%"}></CustomImage>
          ))}
        </div>
      </div>
      <Link to="/settings">
        <FontAwesomeIcon icon={faCog} />
      </Link>
    </>
  );
}
