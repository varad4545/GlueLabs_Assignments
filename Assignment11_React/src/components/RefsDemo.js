import React, { Component } from 'react'

class RefsDemo extends Component {
 
    constructor(props)
    {
       
        super(props)
       
        this.emailRef = React.createRef()
        this.commentRef = React.createRef()
        this.language=React.createRef()          //dropdown menu   reference
        this.checkstate=React.createRef();       // checkbox reference
        this.radiobj={};
        for(var i=0;i<3;i++){
            var sname="radiostate"+i
            this.radiobj[sname]=React.createRef();   // radiobuttons reference for 3 different buttons
        }
        this.state = { 
                      langselect:'React',            // the state object for adding extra divs- not used for referencing
                      ischecked: false,
                      subject:'',
                        
        };
       
     
    }

    changelanghandler=()=>
    {
        this.setState({  langselect: this.language.current.value });

    }
   changecheckhandler=()=>{
     console.log(this.checkstate.current.checked)
    this.setState({ ischecked: this.checkstate.current.checked });
   }


   changeradiohandler=(event)=>{

    for(var i=0;i<3;i++)
    {
        var statename='radiostate'+i;

        if(event.target.value!=this.radiobj[statename].current.value){
          
            this.radiobj[statename].current.checked=false;
           
        }
        else{
            this.state.subject=event.target.value;
        }

    }
    
   }

    componentDidMount(){
        this.emailRef.current.focus()
    }

    clickHandler = () => {
        console.log(this.emailRef.current.value)
        console.log(this.commentRef.current.value)
        console.log(this.language.current.value)
        console.log(this.checkstate.current.checked)
        console.log(this.state.subject);


    }

    render() {
        return (
            <>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="text" ref={this.emailRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment: </label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <br/>
                <div>
                    <label htmlFor="language">Language: </label>
                    <select ref={this.language} onChange={this.changelanghandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>

                    <div>
                    {this.state.langselect} is selected.
                    </div>
                </div>
                <br />

                <div>
                    <label htmlFor="checkbox">Verify: </label>
                    
                    <input type='checkbox' id='check'  ref={this.checkstate} onChange={this.changecheckhandler}/>
                    <div>
                    Above checkbox is {this.state.ischecked ? "checked" : "un-checked"}.
                    </div>

                </div>

                <br/>

                <div>
                    <label htmlFor="radiobox">OS </label>
                    
                    <input type='radio' id='radio' value='OS'  ref={this.radiobj.radiostate0} onChange={this.changeradiohandler} />
                 

                    <label htmlFor="radiobox">DBMS </label>
                    
                    <input type='radio' id='radio' value='DBMS' ref={this.radiobj.radiostate1} onChange={this.changeradiohandler}/>

                    <label htmlFor="radiobox">DSA </label>
                    
                    <input type='radio' id='radio' value='DSA' ref={this.radiobj.radiostate2} onChange={this.changeradiohandler}/> 
               

                </div>

                <br/>

                <button onClick={this.clickHandler}>Submit</button>            
            </>
        )
    }
}

export default RefsDemo;