import React, { useEffect, useRef, useState } from 'react'
import {connect} from 'react-redux'
import { addContact, editContact } from '../redux/actions/Actions'
 const AddEditContact = ({addContact,editContactData,editContact}) => {
    const [contact,setcontact] = useState({
        name :'',
        phonenumber:'',
        email:''
    })
    const {name,phonenumber,email} = contact
    console.log(editContactData,'111111')

    useEffect(()=>{
      setcontact(editContactData);
    },[editContactData])
    const handleChange = (name,value)=>{
        let oldContact = {...contact};
        oldContact[name]=value;
        setcontact(oldContact);

    }
    console.log(contact,'CONTACT')
const closeRef = useRef()
const handleSubmit = ()=>{
  if (contact.id!==null && contact.id!==undefined){
    editContact(contact,contact.id)
    let oldContact = {...contact};
    oldContact.id = null;
    setcontact(oldContact)
  }
  else{
    addContact(contact)
  }
    setcontact({
        name :'',
        phonenumber:'',
        email:''
    })
    closeRef.current.click()

}
  return (
    <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">ADD/EDIT Contact</h5>
      <button type="button" ref={closeRef} className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      

    <form>
  <div className="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your Name" value={name} onChange={(e)=>handleChange('name',e.target.value)}/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Phone Number</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Your Phone number" value={phonenumber} onChange={(e)=>handleChange('phonenumber',e.target.value)}/>
  </div>
  <div className="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Your Email" value={email} onChange={(e)=>handleChange('email',e.target.value)}/>
  </div>
</form>


    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary" onClick = {()=>handleSubmit()}>Submit</button>
    </div>
  </div>
  )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addContact:(contact)=>dispatch(addContact(contact)),
        editContact : (contact,id)=>dispatch(editContact(contact,id))
    }
}
export default connect(null,mapDispatchToProps)(AddEditContact)