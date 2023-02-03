import actionTypes from './actionTypes';

export const appStartUpComplete = () => ({
    type: actionTypes.APP_START_UP_COMPLETE //khong truyền data
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL, ///truyền data
    contentOfConfirmModal: contentOfConfirmModal
});
export const changeLanguageApp=(languageInput)=>({
    type:actionTypes.CHANGE_LANGUAGE,
    language:languageInput
})