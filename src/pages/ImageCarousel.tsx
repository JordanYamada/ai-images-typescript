import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';

interface ImagesData {
  title: string;
  description: string;
  image: string;
  _id: string;
}

const ImageCarousel = () => {
  const [images, setImages] = useState<Array<ImagesData>>([])

  useEffect(() => {
    fillCarousel();
  }, [])


  const fillCarousel = async () => {
    try {
      const url: string = "http://localhost:3001/api/v1/images";
      const response: AxiosResponse = await axios.get(url);
      const data = response.data;
      console.log(data)
      // const carousel: ImagesData[] = []; 
      // data.map((entry: ImagesData)=>{
      //   console.log(entry)
      //   // handleImageSet(entry)
      //   // setImages([...images, entry])
      //   carousel.push(entry)
      //   console.log('fillCarousel: ',images)
      // })
      setImages(data)

    } catch (error) {
      console.error('Error Storing to the Database:', error);
    }
  };

  // const handleImageSet = (entry:ImagesData) => {
  //   setImages([...images, entry])
  // }

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
      {images.length > 0
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