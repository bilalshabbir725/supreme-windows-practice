import { Carousel } from "react-bootstrap";
import { images } from "../assets/images";

const banners = [
  {
    img: images.uPVC,
    Title: "Slide Image 1",
    desc: "This is dummy description text 1",
  },
  {
    img: images.uPVC1,
    Title: "Slide Image 2",
    desc: "This is dummy description text 2",
  },
  {
    img: images.uPVC2,
    Title: "Slide Image 3",
    desc: "This is dummy description text 3",
  },
];

export const Banner = () => {
  return (
    <Carousel>
      {banners.map((banner, index) => (
        <Carousel.Item interval={3000}>
          <img
            className={`d-block w-100 ${index === 0 ? "active" : ""}`}
            src={banner.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{banner.Title}</h3>
            <p>{banner.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
