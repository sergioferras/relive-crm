import axios from 'axios'

const URL = process.env.RELIVE_API || 'http://localhost:8080'

const handleHTTPRequestError = error => {
    if (error.response) {
        /* if (error.response.status === 401) {
            axios.defaults.headers.common['Authorization'] = undefined
            localStorage.clear()
        } */
        if (error.response.status === 500) {
            return console.log('Server error')
        }
        return console.log(error.response.data.message)
    } else {
        return console.log("Network Error") // history.push('/exceptions/network_error')
    }
}

axios.interceptors.response.use(response => {
    return Promise.resolve(response)
}, (error, props) => {
    handleHTTPRequestError(error)
    return Promise.reject(error)
})

axios.defaults.baseURL = URL
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const SERVER_URL = URL