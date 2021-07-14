import React, { Component } from 'react'
import ContactService from '../services/ContactService'

class CreateContactComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             fullName: '',
             contactNumber: '',
             address: ''
        }

        this.changeFullNameHandler = this.changeFullNameHandler.bind(this)
        this.changecontactNumberHandler = this.changecontactNumberHandler.bind(this)
        this.changeaddressHandler = this.changeaddressHandler.bind(this)
        this.saveOrUpdateContacts = this.saveOrUpdateContacts.bind(this)
        this.getTitle = this.getTitle.bind(this)

    }

    componentDidMount() {

        if(!this.state.id ){
            return
        }
        else{
            ContactService.getContactById(this.state.id).then((res) => {
                let contact = res.data
                this.setState({fullName: contact.fullName,
                        contactNumber: contact.contactNumber,
                        address: contact.address
                    })
            })
        }
        
    }

    saveOrUpdateContacts = (e) => {
        e.preventDefault();
        let contact = {fullName: this.state.fullName, contactNumber: this.state.contactNumber, address: this.state.address}
        console.log('contact => ' + JSON.stringify(contact));

        if(!this.state.id){
            ContactService.createContact(contact).then(res => {
                this.props.history.push('/contacts');
            })
        }
        else {
            ContactService.updateContactById(contact, this.state.id).then(res => {
                this.props.history.push('/contacts');
            })
        }

       
    }

    changeFullNameHandler(event) {
        this.setState({fullName: event.target.value})
    }
    changecontactNumberHandler(event) {
        this.setState({contactNumber: event.target.value})
    }
    changeaddressHandler(event) {
        this.setState({address: event.target.value})
    }
    
    cancel() {
        this.props.history.push('/contacts');
    }

    getTitle() {
        if(!this.state.id) {
            return <h3 className="text-center">Add Contact</h3>
        }
        else{
            return <h3 className="text-center">Edit Contact</h3>
        }
    }
    
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Full Name: </label>
                                        <input placeholder = "Full Name" name="fullName" className = "form-control"
                                        value={this.state.fullName} onChange={this.changeFullNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Contact Number: </label>
                                        <input placeholder = "Contact Number" name="contactNumber" className = "form-control"
                                        value={this.state.contactNumber} onChange={this.changecontactNumberHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label> Address </label>
                                        <input placeholder = "Address" name="address" className = "form-control"
                                        value={this.state.address} onChange={this.changeaddressHandler} />
                                    </div>

                                    <button className = "btn btn-success" onClick = {this.saveOrUpdateContacts}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateContactComponent
