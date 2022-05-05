import { GETCONTACTS, GETONECONTACT } from "../actionTypes/ContactTypes";
import axios from "axios";

export const getcontacts = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/contact/getcontacts");
        dispatch({ type: GETCONTACTS, payload: res.data });
    } catch (error) {
        console.log(error);
    }
};

export const addcontact = (newContact) => async (dispatch) => {
    try {
        const res = await axios.post("/api/contact/", newContact);
        dispatch(getcontacts());
    } catch (error) {
        console.log(error);
    }
};

export const deletecontact = (id) => async (dispatch) =>{
    try {
        const res = axios.delete(`/api/contact/deletecontact/${id}`);
        dispatch(getcontacts());
    } catch (error) {
        console.log(error);
    }
};

export const editcontact = (id, updatedcontact) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/contact/updatecontact${id}`, updatedcontact);
        dispatch(getcontacts());
    } catch (error) {
        console.log(error);
    };
};

export const getonecontact = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/contact/${id}`);
        dispatch({type: GETONECONTACT, payload: res.data});
    } catch (error) {
        console.log(error);
    }
};