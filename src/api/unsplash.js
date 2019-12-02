import axios from 'axios'


export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID c1eee8d77bae2319877b3fd06deeaa9cb093d07de0a30aad7f3db37c879d9c10"
  }
})