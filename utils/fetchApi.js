import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";


  export const fetchApi = async(url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '7c8fa8659cmsh5af58f23e76170cp1f4a48jsnf2f46b508af3',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
  }
  