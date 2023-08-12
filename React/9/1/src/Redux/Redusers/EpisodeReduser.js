const initialState = {
    info: {},
    results: [],
     count: 0,
     errors: ""
}
export const EpActionTypes = {
   SET_EP: `SET_EP`,
   SET_ERROR: `SET_ERROR`
}
export const EpisodeReduser = (state = initialState, action) =>{
   switch(action.type){
       case EpActionTypes.SET_EP:
       return {
           ...state, 
           results: action.payload.results,
           info: action.payload.info,
           count: state.count + 1
       }
       case EpActionTypes.SET_ERROR:
           return {
               ...state, 
               error: action.payload
           }
       default:
           return state
   }
}