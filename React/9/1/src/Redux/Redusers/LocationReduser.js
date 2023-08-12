const initialState = {
    info: {},
    results: [],
     count: 0,
     errors: ""

}
export const LocActionTypes = {
   SET_LOC: `SET_LOC`,
   SET_ERROR: `SET_ERROR`
}
export const LocationReduser = (state = initialState, action) =>{
   switch(action.type){
       case LocActionTypes.SET_LOC:
       return {
           ...state, 
           results: action.payload.results,
           info: action.payload.info,
           count: state.count + 1
       }
       case LocActionTypes.SET_ERROR:
           return {
               ...state, 
               error: action.payload
           }
       default:
           return state
   }
}