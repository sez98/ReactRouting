import { PROFILE_DATA, USERS_LIST } from "../types/types"


export default function profileReducer(state={},action) {
         switch(action.type){
                  case PROFILE_DATA:
                           return {...state, profileData: action.payload}
                  case USERS_LIST:
                           return {...state, usersData: action.payload}
                  default:
                           return state
         }
}
