import React from 'react';
import axios from 'axios';


const OPINION_API_BASE_URL = "http://localhost:8080/demo_01/opinion" ;
class OpinionService {
    
    getOpinion(){
        return axios.get(OPINION_API_BASE_URL);
    }

    
    createOpinion(opinion){
        return axios.post(OPINION_API_BASE_URL, opinion)
    }


    getOpinionById(opinionId){
        return axios.get(OPINION_API_BASE_URL + '/' + opinionId);
    }


    createOpinion(opinion){
        return axios.post(OPINION_API_BASE_URL, opinion)
    }

    deleteOpinion(opinionId){
        return axios.delete(OPINION_API_BASE_URL + '/' +opinionId);
    }

}

export default new OpinionService()