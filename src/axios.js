import axios from "axios";

// whenever we want to make multiple request in that scenerio we can use axios.create it will help us to 
// to create a baseurl and after that we can append our next part of the url in it
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;