import actionTypes from './actionTypes';

export const fetchGenderStart = () => ({ //==get
    type: actionTypes.FETCH_GENDER_START
})
export const fetchGenderSuccess = () => ({ 
    type: actionTypes.FETCH_GENDER_SUCCESS
})

export const fetchGenderFailded = () => ({ 
    type: actionTypes.FETCH_GENDER_FAIDED
})
