import axios from "axios";

export default class NewsService {
    static async getAll() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
            return response.data.slice(1, 10);
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }
}