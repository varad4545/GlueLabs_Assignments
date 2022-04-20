import React, { Component } from 'react'
import  {withRouter}  from 'react-router-dom'


class AddContact extends Component {
    constructor(props){
     

        super(props)
        this.state={
            name:'',
            email:'',
        }
    }

    add = (e) => {
   
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("Please fill all the fields");
            return;
        }
       console.log(this.state)

       this.props.addContactHandler(this.state);
      
       this.props.history.push('/');

      this.setState({name:'',email:''})
 
    }


    render() {

        return (
            <div className="ui main" onSubmit={this.add}>
                <h2>Add Contact</h2>
                <form className="ui form" >
                    <div className="field">
                        <label>Name</label>
                        <input type="text" placeholder="Name" value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" placeholder="Email" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <button type='submit' className="ui button blue">Add</button>
                </form>
            </div>

        )
        }
}

export default withRouter(AddContact)