import { useOutletContext } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

interface ImagesData {
  title: string;
  description: string;
  image: string;
  _id: string;
}

const ImageCarousel = () => {
  const { images} : { images:ImagesData[] } = useOutletContext();

  console.log('After-Carousel: ', images)


  const imagesCollection = images.map(image => (
    // console.log('Single Image!!!:',image)
    // render a <Carousel.Item> for each image in the images array
    <Carousel.Item key={image._id}>
      <img
        className="carouselImage d-block img-fluid"
        src={image.image}
        alt={image.description}
      />

      <Carousel.Caption className="carouselCaption">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));


  return (
    <>
      <h2>View Your Collection</h2>

      {/* ternary to display either a <Carousel> (if there are images) or an error message */}
      {images && images.length > 0
        ?
        (
          <Carousel>{imagesCollection}</Carousel>
        )
        :
        (
          <h3>No Images Made Yet!</h3>
        )}
    </>)

}

export default ImageCarousel;