import axios from 'axios';

export default class BlogApiService {

    _apiBase = 'https://simple-blog-api.crew.red';

    getResource = async (url: string) => {
        return await axios.get(`${this._apiBase}${url}`);
    };

    getAllArticle = async () => {
        const res = await this.getResource(`/posts`);
        return res.data;
    };

    getFullArticle = async (id: number) => {
        const res = await this.getResource(`/posts/${id}?_embed=comments`);
        return res.data;
    };

    createComment = async (postId: number, body: string) => {
        if (body !== '')
            return await axios.post(`${this._apiBase}/comments`, {postId, body});
    };

    createArticle = async (title: string, body: string) => {

        return await axios.post(`${this._apiBase}/posts`, {title, body});
    };
}
