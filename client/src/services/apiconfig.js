import api from './apiconfig'

let apiUrl

const apiUrls = {
    production: 'https://sei-items-api.herokuapp.com/api',
    development: 'http://localhost:3000/'
}

if (window.location.hostname === 'localhost') {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

const api = Axios.create({
    baseURL: apiUrl,
})

export default api