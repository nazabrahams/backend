// import { createStore } from 'vuex'
// import axios from 'axios'
// import { toast } from "vue3-toastify";
// import "vue3-toastify/dist/index.css";
// import {useCookies} from 'vue-cookies'
// import router from '@/router';

// axios.defaults.withCredentials =true
// axios.defaults.headers = $cookies.get('token')


// export default createStore({
//   state: {
//     bookings:null,
//   },
//   getters: {
//   },
//   mutations: {
//     setbookings(state,payload){
//       state.bookings = payload
//   },
//   actions: {
//     async insertUser( info) {
//       try {
//         const response = await axios.post('http://localhost:5050/users/users', info);
    
//         if (response.status === 200) {
//           toast("New User Has Been added", {
//             "theme": "dark",
//             "type": "success",
//             "position": "top-center",
//             "autoClose": 2000,
//             "hideProgressBar": true,
//             "transition": "zoom",
//             "dangerouslyHTMLString": true
//           });
//         } else {
//           toast("Failed to add new user. Please try again.", {
//             "theme": "dark",
//             "type": "error",
//             "position": "top-center",
//             "autoClose": 2000,
//             "hideProgressBar": true,
//             "transition": "zoom",
//             "dangerouslyHTMLString": true
//           });
//         }
//       } catch (error) {
//         toast("Error adding user. Please try again.", {
//           "theme": "dark",
//           "type": "error",
//           "position": "top-center",
//           "autoClose": 2000,
//           "hideProgressBar": true,
//           "transition": "zoom",
//           "dangerouslyHTMLString": true
//         });
//       }
//     }
    
//   },
//   modules: {
//   }
// }})
