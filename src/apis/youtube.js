import axios from 'axios';


const KEY = 'AIzaSyC1ywxgTHy1kKoEVcsckhSLEHhwK66IsCM';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        maxResult: 5,
        key: KEY
    }
})