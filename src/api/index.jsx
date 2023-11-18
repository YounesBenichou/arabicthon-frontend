import axios from 'axios';
// import Cookies from 'universal-cookie';

// ngrok
const url_backend = 'http://c6f0-154-246-66-146.ngrok-free.app';
const url_event = '';
const headers_form_data = {
    headers: {
    //   'Authorization': 'Token ' + token,
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
}

const headers_pdf = {
    headers: {
        'Content-Type': 'application/pdf',
      },
}

const headers_json = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
}



// ** Sources **
export const fetchSources = () => axios.get(`${url_backend}${'/sources'}`) 
export const fetchOneSource = (id) => axios.get(`${url_backend}${'/sources/'}${id}`) 
export const PostSourceFile = (postData) => axios.post(`${url_backend}${'/sources/upload'}`,postData, headers_form_data)
export const PostSourceUrl = (postData) => axios.post(`${url_backend}${'/sources/add'}`,postData, headers_form_data)
export const PutSource = (postData) => axios.put(`${url_backend}${'/sources/update'}`,postData, headers_form_data)
export const DeleteSource = (postData) => axios.delete(`${url_backend}${'/sources/delete'}`,postData, headers_form_data)


// ** Workers **
export const fetchWorkers = () => axios.get(`${url_backend}${'/workers'}`)
export const fetchOneWorker = (id) => axios.get(`${url_backend}${'/workers/'}${id}`)
export const EventsWorker = () => axios.get(`${url_event}${'/workers/events'}`)
export const PostWorker = (postData) => axios.post(`${url_backend}${'/worker/create'}`,postData, {headers: {"Access-Control-Allow-Origin": "*"}})
export const PutWorker = (postData) => axios.put(`${url_backend}${'/workers/update'}`,postData, headers_form_data)
export const DeleteWorker = (postData) => axios.delete(`${url_backend}${'/workers/delete'}`,postData, headers_form_data)

