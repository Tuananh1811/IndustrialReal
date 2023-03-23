import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';

// export const fetchGenderStart = () => ({ //==get
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart =  () => { //==get
    return  async(dispatch, getState)=>{
        try {
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
               dispatch(fetchGenderSuccess(res.data)) ;
            }
            else {
               dispatch(fetchGenderFailded()) ;
            }
        } catch (e) {
           dispatch(fetchGenderFailded()) ;
            console.log("fetchGenderStart err: ", e);
        }
    }
    
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data:genderData
})

export const fetchGenderFailded = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})
