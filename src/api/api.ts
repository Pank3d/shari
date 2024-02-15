import axios from 'axios';




export const getGender= async () => {

    
  try {
    const response = await axios.get(
      `http://192.168.100.105:1337/api/gender-categories/`
    );
    return response.data;
    
  } catch (error) {
    console.error(error);
  }
  }

  export const getEvent = async () => {

    
  try {
    const response = await axios.get(
      `http://192.168.100.105:1337/api/event-categories/`
    );
    return response.data;
    
  } catch (error) {
    console.error(error);
  }
}

  export const getReshenie = async () => {

    
  try {
    const response = await axios.get(
      `http://192.168.100.105:1337/api/originalnoe-reshenies/`
    );
    return response.data;
    
  } catch (error) {
    console.error(error);
  }
};