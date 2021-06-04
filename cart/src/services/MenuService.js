import axios from 'axios';



const urlAxios='https://my-json-server.typicode.com/Eyueltb/ec-airbean';

// create single axios instance for entire app
const apiClient = axios.create({
    baseUrl:urlAxios,
    withCredentials: false, // this is the default
    headers: {
        // authentication and configuration
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    showMenus() {
        // get all menus
        return apiClient.get('/menu') // calls baseURL/menus
    },
   showMenu(id) {
        // get one menu based on id
        return apiClient.get('/menu/' + id)
    },
    postMenu(menu) {
        // posts menu
        return apiClient.post('/menu', menu)
    }
}