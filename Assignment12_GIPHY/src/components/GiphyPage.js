import React, { Component } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import TextList from './TextList'
import './GiphyPage.css'






class GiphyPage extends Component {
  
    constructor(props) {
      
        super(props)
        this.state = {
           text:'',
           results:[],

        }
        this.handleInput=this.handleInput.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
     handleInput = (e) => {
 

        this.setState({
            text:e.target.value
        })
    
      }
     handleSubmit = (e) => {

        const apiCall = async () => {
            const giphy = new GiphyFetch('GTSVqnCRnyQ77Qwu2FBPtBbfnSXZUxft')
          const res = await giphy.animate(this.state.text, {limit: 20})
          this.setState({
              results:res.data,
          })
          console.log(res.data)
       
        
        }
       apiCall()
       this.setState({
           text:'',
       })
      }


    render() {
        return (
            <>
            <div className="App">
                   <h1>GIF Generator</h1>
                    <h3>Type a word in textarea and hit submit to generate 20 GIFs</h3>
                   <input className='input-field' value={this.state.text} onChange={this.handleInput} />
                    <button className='submit-btn' onClick={this.handleSubmit}>Submit</button>
                 

                    {<TextList gifs={this.state.results}  />}
     
         </div>
                   
            </>
        )
    }
}

export default GiphyPage;