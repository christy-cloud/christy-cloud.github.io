import React from 'react';
import Form from './Form';
import './index.css';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing contacts */
        this.state = {

            contacts : []

        }
        
    }



    handleSubmit = contact => {

    // TODO - Create logic to setState and add new contact to contacts array in state
       this.setState((state) => ({
           contacts: state.contacts.concat([contact])

       }))
           
        
    }


    render() {

        return (
            <div className="container">
                
                <h4>Add your name, email, and a short message.</h4>
                
                
                <br/>
            
                <Form handleSubmit={this.handleSubmit} />
                {/*TODO - Add Form Component */}
            </div>
        );
    }
}

export default LinkContainer;