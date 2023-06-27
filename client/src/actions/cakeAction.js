import axios from 'axios'
import swal from 'sweetalert'

export const getAllCakes = () => async (dispatch) =>{
    dispatch({type:'GET_CAKES_REQUEST'})
    try {
        const res = await axios.get("/api/cakes/getAllCakes")
       
        dispatch({type:'GET_CAKES_SUCCESS', payload:res.data})
    } catch (err) {
        
        dispatch({type:'GET_CAKES_FAIL', payload:err})
    }
}

export const addCake = (cake) => async (dispatch) =>{
    dispatch({type:'ADD_CAKE_REQUEST'})
    try {
        await axios.post("/api/cakes/addcake",{cake})
        
        dispatch({type:'ADD_CAKE_SUCCESS'})
        window.location.href='/admin/cakelist'
    } catch (err) {
        
        dispatch({type:'ADD_CAKE_FAIL', payload:err})
    }
}

export const getCakeById = (cakeId) => async (dispatch) =>{
    dispatch({type:'GET_CAKEBYID_REQUEST'})
    try {
        const response = await axios.post("/api/cakes/getcakebyid",{cakeId})
        
        dispatch({type:'GET_CAKEBYID_SUCCESS', payload:response.data})
    } catch (err) {
        
        dispatch({type:'GET_CAKEBYID_FAIL', payload:err})
    }
}

export const updateCake = (updatedCake) => async (dispatch) =>{
    dispatch({type:'UPDATE_CAKEBYID_REQUEST'})
    try {
        const response = await axios.post("/api/cakes/updatecake",{updatedCake})
        
        dispatch({type:'UPDATE_CAKEBYID_SUCCESS', payload:response.data})
        window.location.href = '/admin/cakelist'
    } catch (err) {
        
        dispatch({type:'UPDATE_CAKEBYID_FAIL', payload:err})
    }
}

export const deleteCake = (cakeId) =>async dispatch => {
    try {
        const res = await axios.post('/api/cakes/deletecake',{cakeId})
        swal("Cake Deleted successfully!", "success")
        window.location.href='/admin/cakelist'
        console.log(res)
    } catch (error) {
        swal("Error While Deleting Cake")
    }
}

export const filterCake = (searchkey, category) => async dispatch => {
  let filteredCake
  dispatch({type:'GET_CAKES_REQUEST'})
  try {
    const res = await axios.get("/api/cakes/getAllCakes")
    filteredCake = res.data.filter((cake) => cake.name.toLowerCase().includes(searchkey))
    if(category !== 'all'){
        filteredCake = res.data.filter((cake) => cake.category.toLowerCase() === (category))
    }
    dispatch({type:'GET_CAKES_SUCCESS',payload:filteredCake})
  } catch (error) {
    dispatch({type:'GET_CAKES_FAIL',payload:error})
  }
}