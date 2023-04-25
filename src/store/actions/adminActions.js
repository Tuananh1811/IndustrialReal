import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';

export const fetchGenderStart = () => { //==get
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            }
            else {
                dispatch(fetchGenderFailded());
            }
        } catch (e) {
            dispatch(fetchGenderFailded());
            //  console.log("fetchGenderStart err: ", e);
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailded = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED
})
//position

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            }
            else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
        }
    }
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData

})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAIDED
})
//role

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
        }
    }

}
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData

})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAIDED
})
