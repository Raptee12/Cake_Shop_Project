export const getAllCakeReducer = (state = {cakes:[]}, action) => {
    switch(action.type){
        case 'GET_CAKES_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'GET_CAKES_SUCCESS':
            return{
                cakes : action.payload,
                loading:false
            }
        case 'GET_CAKES_FAIL':
            return{
                error: action.payload,
                loading:false
            } 
        default: return state   
    }
}

export const addCakeReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_CAKE_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'ADD_CAKE_SUCCESS':
            return{
                success:true,
                loading:false
            }
        case 'ADD_CAKE_FAIL':
            return{
                loading:false,
                error: action.payload,
               
            } 
        default: return state   
    }
}

export const getCakeByIdReducer = (state = {}, action) => {
    switch(action.type){
        case 'GET_CAKEBYID_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'GET_CAKEBYID_SUCCESS':
            return{
                cake:action.payload,
                loading:false
            }
        case 'GET_CAKEBYID_FAIL':
            return{
                loading:false,
                error: action.payload,
                
            } 
        default: return state   
    }
}

export const updateCakeByIdReducer = (state = {}, action) => {
    switch(action.type){
        case 'UPDATE_CAKEBYID_REQUEST':
            return{
                ...state,
                loading:true
            }
        case 'UPDATE_CAKEBYID_SUCCESS':
            return{
                updatesuccess:true,
                updateloading:false
            }
        case 'UPDATE_CAKEBYID_FAIL':
            return{
                updateloading:false,
                updateerror: action.payload,
                
            } 
        default: return state   
    }
}

