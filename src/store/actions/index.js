import { PROFILE_DATA, BREEDS_LIST, USERS_LIST } from "../types/types"
import axios from 'axios';

export const breedsList = () => {
         return {
                  type: BREEDS_LIST,
                  payload : [
                           {id:'1', name:'Labrador'},
                           {id:'2', name:'Golden Retriever'},
                           {id:'3', name:'Shepard'}
                  ]
         }
}

export const profileData = () => {
         return {
                  type: PROFILE_DATA,
                  payload: [
                           {id:'1', name:'Pramod Chug', designation: 'CEO', about:'Hey My name is Pramod'},
                           {id:'2', name:'Anuradha Chug', designation: 'COO',  about:'Hey My name is Anuradha'},
                           {id:'3', name:'Sezal Chug', designation: 'CTO',  about:'Hey My name is Sezal'}
                  ]
         }
}

export const usersData = () => {
         const request = axios.get(`https://jsonplaceholder.typicode.com/users`)
                           .then(reponse => {
                                    return reponse.data
                           });
         return {
                  type: USERS_LIST ,
                  payload: request
         }
}