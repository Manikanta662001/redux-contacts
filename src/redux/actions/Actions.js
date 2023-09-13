import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_ALL_CONTACTS, GET_SINGLE_CONTACT } from "./actionTypes"


export const getAllContacts=()=>{
    return {type:GET_ALL_CONTACTS}
}
export const addContact=(contact)=>{
    return {type:ADD_CONTACT,payload:contact}
}
export const getSingleContact=(index)=>{
    return {type:GET_SINGLE_CONTACT,index}
}
export const editContact=(con,id)=>{
    return {type:EDIT_CONTACT,payload:con,id}
}
export const deleteContact=(index)=>{
    return {type:DELETE_CONTACT,index}
}