import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/?q=cat&page=1&key=37137051-7a4d1b5d2f259967b695f65af&image_type=photo&orientation=horizontal&per_page=12'

export function searchImages(q, page){
    return axios
    .get(`/api`, {
        params: {
            q,
            page
        }
    })
    .then((res) => res.data)
}