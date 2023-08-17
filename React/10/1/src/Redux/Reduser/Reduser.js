

const initialState = {
    info: {},
    cars: [],
    errors: ""
}
export const actionTypes = {
    SET_CARS: `SET_CARS`,
    SET_ERROR: `SET_ERROR`
}

export const CarReduser = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_CARS:
        return {
            ...state, 
            cars: action.payload.cars
        }
        case actionTypes.SET_ERROR:
            return {
                ...state, 
                error: action.payload
            }
        default:
            console.log(`nenashlo`)
            return (
                state
               
                ) 
    }
}

