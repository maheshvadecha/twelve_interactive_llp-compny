import axios from "axios"

const USER_URL = "https://jsonplaceholder.typicode.com/users"
const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums"
const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos"

const getUser = async () => {
    try {
        const response = await axios.get(USER_URL)
        if (response && response.data) {
            // console.log(response.data);
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message : ', error.message);
            return error.message;
        } else {
            console.log('unexpected error : ', error);
            return 'An unexpected error ouccoured';
        }
    }
}

const getAlbums = async (id) => {
    try {
        const response = await axios(`${ALBUMS_URL}?userId=${id}`)
        if (response && response.data) {
            // console.log(response.data);
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message : ', error.message);
            return error.message;
        } else {
            console.log('Unexpected error : ', error);
            return 'An unexpected error ouccoured.'
        }
    }
}

const getPhoto = async (id) => {
    try {
        const response = await axios.get(`${PHOTOS_URL}?albumId=${id}`)
        if (response && response.data) {
            // console.log(response.data);
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error message : ', error.message);
            return error.message;
        } else {
            console.log('Unexpected error : ', error);
            console.log('An unexpected error ouccoured.');
        }
    }
}
export { getUser, getAlbums, getPhoto };