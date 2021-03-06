import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility'

const initialState={
    token:null,
    userId:null,
    error:null,
    loading:false,
    authRedirect:'/'
};

const reducer=(state=initialState,action)=>{

    switch(action.type){
        case actionTypes.AUTH_START:
            return updateObject(state,{error:null,loading:true});

        case actionTypes.AUTH_SUCCESS:{
            
            return updateObject(state,{
                loading:false,
                error:null,
                token:action.token,
                userId:action.userId
            })
        }

        case actionTypes.AUTH_FAIL:{
            return updateObject(state,{
                loading:false, error:action.error
            })
        }

        case actionTypes.AUTH_LOGOUT:{
            return updateObject(state,{token:null,userId:null});
        }

        case actionTypes.SET_AUTH_REDIRECT:{
            return updateObject(state, {authRedirect:action.path});
        }
        default:return state
    }
}

export default reducer;