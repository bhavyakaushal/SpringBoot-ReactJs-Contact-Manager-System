import React, { Component } from 'react'
import ContactService from '../services/ContactService'

class ListContactComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             contacts: []
        }
        this.addContact = this.addContact.bind(this)
        this.editContact = this.editContact.bind(this)
        this.deleteContact = this.deleteContact.bind(this);
    }

    editContact(id) {
        this.props.history.push(`/add-contact/${id}`)
    }

    deleteContact(id) {
        ContactService.deleteContact(id).then( res => {
            this.setState({contacts: this.state.contacts.filter(contact => contact.id !== id)});
        })

    }

    viewContact(id) {
       this.props.history.push(`/view-contact/${id}`)
    }

    componentDidMount(){
        ContactService.getContacts().then((res) => {
            this.setState({ contacts: res.data})
        })
    }

    addContact() {
        this.props.history.push('/add-contact')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Contacts List</h2>
                <div className = "row">
                    <button className = "btn btn-primary" onClick = {this.addContact}>Add Contact</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th> Full Name </th>
                                <th> Contact Number </th>
                                <th> Address </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.contacts.map(
                                    contact =>
                                    <tr key = {contact.id}>
                                        <td> {contact.fullName} </td>
                                        <td> {contact.contactNumber} </td>
                                        <td> {contact.address} </td>
                                        <td> 
                                            <button className ="btn btn-info" 
                                           onClick = {() => this.editContact(contact.id)} >Update</button> 
                                            <button style={{marginLeft: "10px"}} onClick={() => this.deleteContact(contact.id)} className = "btn btn-danger">Delete </button>   
                                            <button style={{marginLeft: "10px"}} onClick={() => this.viewContact(contact.id)} className = "btn btn-warning">View </button>   
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListContactComponent
