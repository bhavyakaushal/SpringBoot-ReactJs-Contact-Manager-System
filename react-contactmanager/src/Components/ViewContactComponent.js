import React, { Component } from 'react'
import ContactService from '../services/ContactService'

class ViewContactComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.match.params.id,
             contact: {}
        }
        this.backToHomePage = this.backToHomePage.bind(this);
    }
    
    componentDidMount() {
        ContactService.getContactById(this.state.id).then( res => {
            this.setState({contact: res.data})
        })
    }

    backToHomePage() {
        this.props.history.push("/contacts")
    }

    render() {
        return (
            <div>
                <div className = "card mt-4 col-md-6 offset-md-3">
                    <h3 className = "text-center">Contact Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Full Name: </label>
                            <div className="ml-2"> {this.state.contact.fullName} </div>

                        </div>
                        <div className = "row">
                            <label> Contact Number: </label>
                            <div className="ml-2"> {this.state.contact.contactNumber} </div>
                            
                        </div>
                        <div className = "row">
                            <label> Address: </label>
                            <div className="ml-2"> {this.state.contact.address} </div>
                            
                        </div>
                        <div className = "row">
                           <button className="btn btn-primary" onClick = {this.backToHomePage}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewContactComponent
