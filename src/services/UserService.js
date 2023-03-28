import React from 'react';
import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:8080/demo_01/user" ;
class UserService {
    
    getUser(){
        return axios.get(USER_API_BASE_URL);
    }

}

export default new UserService()