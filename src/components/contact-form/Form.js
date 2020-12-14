import React, {Component} from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        
        //TODO - set initial state for link name and URL 
        this.state = {
            name: "",
            email: "",
            msg: ""
        }
        
        
    }

    handleChange = event => {

        //  TODO - Logic for changing state based on form changes
        this.setState({
            name: event.target.value,

        })
          
    }

    changeEmail = (event) => {

        this.setState({
            
            email: event.target.value,
        })

    }

    changeMsg = (event) => {

        this.setState({
            
            msg: event.target.value,
        })

    }

    onFormSubmit = (data, event) => {
        // to prevent page reload on form submit
        event.preventDefault();

         
            //TODO - Logic for calling props to handle submission and setting state changes
        this.props.handleSubmit(this.state)

        //alert message when user submits input
        console.log(data);
        

    }


    render() {

        return (
            
            <form onSubmit={this.onFormSubmit} >
            {/* TODO - Logic for returning a form element with labels and inputs for user name, email, and short message */}
                <label for="name">Name</label>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <label for="email">Email</label>
                <input type="text" value={this.state.email} onChange={this.changeEmail}/>
                <label for="msg">Leave a message</label>
                <input type="text" value={this.state.msg} onChange={this.changeMsg}/>

                <button type="submit" method="post" onClick="return confirm('Thank your input!');"> Submit </button>
                <div class="alert">
                    <span class="submit" onclick="this.parentElement.style.display='none';">&times;</span>
                        Thank you for reaching out.
                </div>
            </form>
        )
    
    }
}


export default Form;
