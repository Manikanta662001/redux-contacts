import { ADD_CONTACT, GET_ALL_CONTACTS } from "../actions/actionTypes"


const initialState = {
    contacts:[{name:'Mani',phonenumber:'2423535436',email:'mani@gmail.com'}]
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
        default :
            return state
    }
}

export default contactsReducer
