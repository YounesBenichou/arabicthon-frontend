import axios from 'axios';
// import Cookies from 'universal-cookie';

// 

const url_backend = 'http://172.162.233.226:3000';
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
export const fetchSources = () => axios.get(`${url_backend}${'/sources'}`,
{
  method: 'GET',
    withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
}) 
export const fetchOneSource = (id) => axios.get(`${url_backend}${'/sources/'}${id}`) 
export const PostSourceFile = (postData) => axios.post(`${url_backend}${'/sources/upload'}`,postData, headers_form_data)
export const PostSourceUrl = (postData) => axios.post(`${url_backend}${'/source/add'}`,postData, {
  method: 'POST',
  withCredentials: false,
headers: {
  'Content-Type': 'multipart/form-data'
},
})
export const PutSource = (postData) => axios.put(`${url_backend}${'/sources/update'}`,postData, headers_form_data)
export const DeleteSource = (postData) => axios.delete(`${url_backend}${'/sources/delete'}`,postData, headers_form_data)


// ** Workers **
export const fetchWorkers = () => axios.get(`${url_backend}${'/workers'}`,
{
  method: 'GET',
    withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
}) 
export const fetchOneWorker = (id) => axios.get(`${url_backend}${'/workers/'}${id}`,{
  method: 'GET',
    withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
})
export const EventsWorker = () => axios.get(`${url_event}${'/workers/events'}`)
export const PostWorker = (postData) => axios.post(`${url_backend}${'/worker/create'}`,postData, {
    method: 'POST',
    withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  },
 })

export const PutRelation = (postData) => axios.put(`${url_backend}${'/relation/update'}`,postData, {
    method: 'PUT',
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json'
    },
})