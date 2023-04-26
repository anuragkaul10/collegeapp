import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice, faBurger, faBowlFood, faHotdog, faWineBottle } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  const images = ["/images/gallery/img1.jpg", "/images/gallery/img2.jpg", "/images/gallery/img3.jpg", "/images/gallery/img4.jpg", "/images/gallery/img5.jpeg", "/images/gallery/img6.jpg", "/images/gallery/img7.jpeg", "/images/gallery/img8.jpg", "/images/gallery/img9.jpg"];
  return (
    <>
      <div className="section hero">
        <div className="col typography">
          <h1 className="title">What Are We About?</h1>
          <p className="info">One of the reasons that people enjoy coming to a great restaurant is that when an extraordinary meal is placed in front of them, they feel honored, respected, and even a little bit loved.</p>
          <button className="btn">
            <Link to="/recipes" style={{ color: "white" }}>
              explore&nbsp;
              <FontAwesomeIcon icon={faPizzaSlice} spin />
              <FontAwesomeIcon icon={faBurger} beat />
              <FontAwesomeIcon icon={faBowlFood} bounce />
              <FontAwesomeIcon icon={faHotdog} spin spinReverse />
              <FontAwesomeIcon icon={faWineBottle} fade />
            </Link>
          </button>
        </div>
        <div className="col gallery">
          {images.map((src, index) => (
            <CustomImage key={index} imgSrc={src} pt={"90%"}></CustomImage>
          ))}
        </div>
      </div>
    </>
  );
}
