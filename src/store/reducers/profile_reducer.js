export default function profileReducer(state={},action) {
         switch(action.type){
                  case 'Profile_Data':
                           return {...state, profileData: action.payload}
                  default:
                           return state
         }
}