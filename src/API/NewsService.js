import axios from "axios";

export default class NewsService {
    static async getPhotos() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
            return response.data.slice(1, 10);
        } catch (e) {
            console.log(e)
        }
    }

    static async getPosts() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return response.data.slice(1, 10);
        } catch (e) {
            console.log(e)
        }
    }

    static async getPhotoById(id) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }

    static async getPostById(id) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
}