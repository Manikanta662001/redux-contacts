import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { deleteContact, getAllContacts, getSingleContact } from '../redux/actions/Actions'
import AddEditContact from './AddEditContact'

const Contacts = ({ contacts, getAllContacts, getSingleContact, contact, deleteContact }) => {
  const [show,setShow] = useState(false)
  useEffect(() => {
    getAllContacts()
    // eslint-disable-next-line
  }, [])

  const handleDelete = (index) => {
    let confirm = window.confirm('Are You Sure want to Delete')
    if (confirm) {
      setShow(true)
      setTimeout(()=>setShow(false),2000)
      deleteContact(index)
    }
  }
  return (
    <div>

      <div className='container d-flex flex-row justify-content-between mt-4'>
        <h1>All Contacts</h1>
        <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModal">+Add Contact</button>

      </div>
      <div className='container mt-4'>
        {contacts.length > 0 ?
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
                contacts.map((contact, index) => {
                  return (<tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.phonenumber}</td>
                    <td>{contact.email}</td>
                    <td>
                      <button className='btn btn-primary' data-toggle="modal" data-target="#exampleModal" onClick={() => getSingleContact(index)}>Edit</button> &nbsp;
                      <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </tr>)
                })
              }

            </tbody>
          </table>
          : <p className='text-danger text-center'>There is no Contacts</p>}

{show?<div className="alert alert-danger" role="alert">
  Contact is Deleted Successfully
</div>:null}


      </div>

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <AddEditContact editContactData={contact} />
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state, 'STATE')
  return {
    contacts: state.contacts,
    contact: state.contact
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getAllContacts: () => dispatch(getAllContacts()),
    getSingleContact: (index) => dispatch(getSingleContact(index)),
    deleteContact: (index) => dispatch(deleteContact(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)