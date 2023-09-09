import React, { useRef, useState } from 'react'
import {connect} from 'react-redux'
import { addContact } from '../redux/actions/Actions'
 const AddEditContact = ({addContact}) => {
    const [contact,setcontact] = useState({
        name :'',
        phonenumber:'',
        email:''
    })
    const {name,phonenumber,email} = contact


    const handleChange = (name,value)=>{
        let oldContact = {...contact};
        oldContact[name]=value;
        setcontact(oldContact);

    }
    console.log(contact,'CONTACT')
const closeRef = useRef()
const handleSubmit = ()=>{
    addContact(contact)
    setcontact({
        name :'',
        phonenumber:'',
        email:''
    })
    closeRef.current.click()

}
  return (
    <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">ADD/EDIT Contact</h5>
      <button type="button" ref={closeRef} class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      

    <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name" value={name} onChange={(e)=>handleChange('name',e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Phone Number</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Your Phone number" value={phonenumber} onChange={(e)=>handleChange('phonenumber',e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">Email</label>
    <input type="email" class="form-control" id="formGroupExampleInput2" placeholder="Your Email" value={email} onChange={(e)=>handleChange('email',e.target.value)}/>
  </div>
</form>


    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" onClick = {()=>handleSubmit()}>Submit</button>
    </div>
  </div>
  )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addContact:(contact)=>dispatch(addContact(contact))
    }
}
export default connect(null,mapDispatchToProps)(AddEditContact)