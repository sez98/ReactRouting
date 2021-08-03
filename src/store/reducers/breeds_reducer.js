const DEFAULT_STORE = {
         name:'Francis',
         id:1234
}
     

export default function breedReducer(state=DEFAULT_STORE,action) {
         switch(action.type){
                  // case 'Breeds_List':
                  //          return action.payload;
                  case 'Breeds_List':
                           return {breedsList: action.payload}
                  default:
                           return state
         }
}