import axios from "axios";

export class PostService {
    private static _baseUrl = "https://jsonplaceholder.typicode.com";

    private static _axios = axios.create({
        baseURL: this._baseUrl,
    })

    static async getAllPosts(limit: number = 10, currentPage: number = 1) {
        return await this._axios.get("/posts/", {
            params: {
                _limit: limit,
                _page: currentPage
            }
        });
    }

    static async getPostById(id: number) {
        return await this._axios.get("/posts/" + id);
    }

    static async getCommentsById(id: number) {
        return await this._axios.get(`/posts/${id}/comments`);
    }
}