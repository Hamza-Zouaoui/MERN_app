import { GETCONTACTS, GETONECONTACT } from "../actionTypes/ContactTypes";

const initialState = {
    contacts: [],
    contact: {},
};

const ContactReducer = (state= initialState, action) => {
    switch (action.type) {
        case GETCONTACTS:
            return { ...state, contacts: action.payload.contacts };
        
        case GETONECONTACT:
            return {...state, contact: action.payload.oneContact};
    
        default:
            return state;
    }
};

export default ContactReducer;