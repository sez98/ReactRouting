export const breedsList = () => {
         return {
                  type: 'Breeds_List',
                  payload : [
                           {id:'1', name:'Labrador'},
                           {id:'2', name:'Golden Retriever'},
                           {id:'3', name:'Shepard'}
                  ]
         }
}

export const profileData = () => {
         return {
                  type: 'Profile_Data',
                  payload: [
                           {id:'1', name:'Pramod Chug', designation: 'CEO', about:'Hey My name is Pramod'},
                           {id:'2', name:'Anuradha Chug', designation: 'COO',  about:'Hey My name is Anuradha'},
                           {id:'3', name:'Sezal Chug', designation: 'CTO',  about:'Hey My name is Sezal'}
                  ]
         }
}