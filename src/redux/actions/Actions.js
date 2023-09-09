import { ADD_CONTACT, GET_ALL_CONTACTS } from "./actionTypes"


export const getAllContacts=()=>{
    return {type:GET_ALL_CONTACTS}
}
export const addContact=(contact)=>{
    return {type:ADD_CONTACT,payload:contact}
}