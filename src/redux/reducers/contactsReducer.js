import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, GET_ALL_CONTACTS, GET_SINGLE_CONTACT } from "../actions/actionTypes"


const initialState = {
    contacts:[{name:'Mani',phonenumber:'2423535436',email:'mani@gmail.com'}],
    contact : {}
}
const contactsReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_ALL_CONTACTS:
            return {...state}
        case ADD_CONTACT:
            console.log(action.payload)
            let contacts = [...state.contacts]
            console.log(contacts,"CON")
            contacts.push(action.payload)
            return {...state,contacts:contacts}
        case GET_SINGLE_CONTACT:
            return {...state,contact:{...state.contacts[action.index],id:action.index}}
        case EDIT_CONTACT:
            let oldst = [...state.contacts]
            oldst[action.id] = action.payload
            return {...state,contacts:oldst}
        case DELETE_CONTACT:
            let allcontacts = [...state.contacts]
            allcontacts.splice(action.index,1)
            return {...state,contacts:allcontacts}
        default :
            return state
    }
}

export default contactsReducer
