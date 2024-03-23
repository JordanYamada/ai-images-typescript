import { useOutletContext } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

interface ImagesData {
  title: string;
  description: string;
  image: string;
  _id: string;
}

// Define the type of the context value returned by useOutletContext
interface OutletContext {
  images: ImagesData[];
  deleteImage: (url: string, id: string) => Promise<void>;
  getImages: () => void;
}

const ImageCollection = () => {
  // Use the defined type for context value
  const { images, deleteImage, getImages }: OutletContext = useOutletContext() as OutletContext;

  const handleDeleteImage = async (id:string) => {
    const url: string = `${import.meta.env.VITE_REACT_APP_SERVER}api/v1/images/`;
    await deleteImage(url, id)
    getImages();
  }

  // const url: string = "http://localhost:3001/api/v1/images/";
  console.log('After-Carousel: ', images)


  const imagesCollection = images.map(image => {
    // const url: string = "http://localhost:3001/api/v1/images/";
    return(
    
    // console.log('Single Image!!!:',image)
    // render a <Card> for each image in the images array
     <Col>
     <Card key={image._id} className="carouselImage h-100" style={{ width: '18rem' }}>
     <Card.Img src={image.image}
        alt={image.description}/>
     <Card.Body>
     <p>💖 place holder</p>
       <Card.Title>{image.title}</Card.Title>
       <Card.Text>
       {image.description}
       </Card.Text>
       <Button
              variant="dark"
              onClick={()=>handleDeleteImage(image._id)}
            >
              Delete Image
            </Button>
     </Card.Body>
   </Card>
   </Col>
  )}
  );


  return (
    <>
      <h2>View Your Collection</h2>

      {/* ternary to display either a <Carousel> (if there are images) or an error message */}
      {images && images.length > 0
        ?
        (
          <Row xs={1} sm={2} md={3} lg={4}>
            {imagesCollection}
            </Row>
        )
        :
        (
          <h3>No Images Made Yet!</h3>
        )}
    </>)

}

export default ImageCollection;