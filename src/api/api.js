import * as axios from 'axios';

const instanceAPI = {
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
    APIKEY: "AIzaSyC3L9NO1mvqLFNRmjKfpZ5w6lDuPUlzFQs"
}

export const booksApi = {
    getBooks(searchText) {
        return axios.get(`${instanceAPI.baseURL}?maxResults=40&q=${searchText}&key=${instanceAPI.APIKEY}`).then(response => {
            return response
        })
    },

    getBookPage(id) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${instanceAPI.APIKEY}`).then(response => {
            return response
        })
    }
}