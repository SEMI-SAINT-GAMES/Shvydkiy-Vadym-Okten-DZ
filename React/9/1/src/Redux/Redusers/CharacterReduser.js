const initialState = {
     info: {},
     results: [],
      count: 0,
      errors: ""
}
export const ChActionTypes = {
    SET_CH: `SET_CH`,
    SET_ERROR: `SET_ERROR`
}
export const CharactersReduser = (state = initialState, action) =>{
    switch(action.type){
        case ChActionTypes.SET_CH:
        return {
            ...state, 
            results: action.payload.results,
            info: action.payload.info,
            count: state.count + 1
        }
        case ChActionTypes.SET_ERROR:
            return {
                ...state, 
                error: action.payload
            }
        default:
            return state
    }
}