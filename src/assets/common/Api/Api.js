/* import apiUrl  from "https://ecoblue-backend.herokuapp.com/v1.0/";
 *//* import { Token } from "../Storage/Token";
 *//*  import store from "./../../store/Store";
import { authActions } from "../../services/Auth/AuthActions"; */

export class Api {
  post(url, data, header) {
    let dataBody = JSON.stringify(data);
    return fetch(`https://ecoblue-backend.herokuapp.com/v1.0/${url}`, {
      method: "POST",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: null,
          },
      body: dataBody,
    })
      .then(async (response) => {
        if (response.status === 401) {
/*           store.dispatch(authActions.logout());
 */          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch((err) => err);
  }


  postFile( url, data) {    
    const formData = new FormData();
    for (const key in data) {
      data[key] && formData.append(key, data[key])
    }
    return fetch(`https://ecoblue-backend.herokuapp.com/v1.0/${url}`, {
      method: 'POST',
      headers: {
        'Authorization': null,
        
      },
      body: formData
    }).then(async response => {
      if (response.status === 401 ) {
/*         store.dispatch(authActions.logout());
 */        return response;
      }
      console.log('api response',response)
      response.payload = await response.json()
      return response
    }).catch(err => err)
  }

  put(url, data, header) {
    let isFormData = data instanceof FormData;

    return fetch(`https://ecoblue-backend.herokuapp.com/v1.0/${url}`, {
      method: "PUT",
      headers: header
        ? header
        : isFormData
        ? { Authorization: null }
        : {
            Accept: isFormData ? "" : "application/json",
            "Content-type": isFormData ? "" : "application/json",
            Authorization: null,
          },
      body: isFormData ? data : JSON.stringify(data),
    })
      .then(async (response) => {
        if (response.status === 401) {
/*           store.dispatch(authActions.logout());
 */          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch((err) => err);
  }

  get(url, params) {
    url = new URL(`https://ecoblue-backend.herokuapp.com/v1.0/${url}`);
    if (params)
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: null,
      },
    })
      .then(async (response) => {
        if (response.status === 401) {
/*           store.dispatch(authActions.logout());
 */          return response;
        }
        response.payload = await response.json();
        return response;
      })
      .catch((err) => err);
  }
}

export default new Api();
