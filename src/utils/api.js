import axios from 'axios';

async function getCats() {
    let url = `https://thecatapi.com/v1/images?api_key=`;
    //ensure api returns value before returning them 
    try {
        const response = await axios.get(url);
        // return response.data
        console.log(response.data);
        
    } catch(e) {
        return e;
    }
};

export { getCats };