import axios, { AxiosResponse } from "axios"

const deleteImage = async (url: string, id: string): Promise<void> => {
  try {
  const response: AxiosResponse = await axios.delete(url + id);
   console.log('Deleted :',response.data);
    }
    catch (error) {
      console.log('could not delete : ', error);
    }
  }

export default deleteImage;