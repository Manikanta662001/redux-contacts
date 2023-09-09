import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { getAllContacts } from '../redux/actions/Actions'
import AddEditContact from './AddEditContact'

const Contacts = ({contacts,getAllContacts}) => {
  useEffect(()=>{
    getAllContacts()
  },[])
   
  return (
    <div>

    <div className='container d-flex flex-row justify-content-between mt-4'>
        <h1>All Contacts</h1>
        <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModal">+Add Contact</button>
       
    </div>
    <div className='container mt-4'>
    <table className="table">
  <thead>
     <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        contacts.map((contact,index)=>{
            return(<tr key={index}>
                <td>{index+1}</td>
                <td>{contact.name}</td>
                <td>{contact.phonenumber}</td>
                <td>{contact.email}</td>
                <td>
                  <button className='btn btn-primary'>Edit</button> &nbsp;
                  <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>)
        })
    }
   
  </tbody>
</table>


      </div>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
   <AddEditContact/>
  </div>
</div>
    </div>
  )
}
const mapStateToProps =(state)=>{
  console.log(state,'STATE')
  return {
    contacts : state.contacts
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    getAllContacts : ()=>dispatch(getAllContacts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contacts)