import react,{Component} from "react";

class DemoForm extends Component{
    
    constructor(props){
        super(props)
        this.state={
  email:'',
  comment:'',
  language: 'vue',
  checkstate:false,
  subject:'',
        }
      
    
      
    }
  

    changeEmailHandler=(event)=>{

        this.setState({
            email: event.target.value
        })
    }
    changeCommentHandler=(event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    changeLangHandler = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    changecheckhandler=(event)=>{
        this.setState({
            checkstate:!this.state.checkstate,
        })
    }
    changeradiohandler=(event)=>
    {
        console.log(event.target.value)
            this.setState({
                subject:event.target.value
            })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        return(
            <form>
   
                    <div>
                    <label htmlFor="email">Email</label>
                    <input type='text' id='email' value={this.state.email} onChange={this.changeEmailHandler}/>
                    </div>

                    <br />
                    <div>
                    <label htmlFor="comment">Comment</label>
                    
                    <textarea type='text' id='comment' value={this.state.comment} onChange={this.changeEmailHandler}></textarea>

                    </div>

                    <br />
                <div>
                    <label htmlFor="language">Language: </label>
                    <select value={this.state.language} id="language" onChange={this.changeLangHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <br />

                <div>
                    <label htmlFor="checkbox">Verify: </label>
                    
                    <input type='checkbox' id='check' value={this.state.checkstate} onChange={this.changecheckhandler}/>
                    <div>
                      Above checkbox is {this.state.checkstate ? "checked" : "un-checked"}.
                    </div>

                </div>

                <br/>

                <div>
                    <label htmlFor="radiobox">OS </label>
                    
                    <input type='radio' id='radio' value='OS'  checked={this.state.subject === 'OS'} onChange={this.changeradiohandler}/>
                 

                    <label htmlFor="radiobox">DBMS </label>
                    
                    <input type='radio' id='radio' value='DBMS' checked={this.state.subject === 'DBMS'} onChange={this.changeradiohandler}/>

                    <label htmlFor="radiobox">DSA </label>
                    
                    <input type='radio' id='radio' value='DSA'checked={this.state.subject === 'DSA'}  onChange={this.changeradiohandler}/> 
               

                </div>

                <br/>


                <div>
                    <button type="submit">Submit</button>
                </div>
             
   
            </form>
        )
    }
}


export default DemoForm;