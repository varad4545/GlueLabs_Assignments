import React,{useEffect,useState} from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import TextList from './TextList'
import './GiphyPage.css'

const GiphyPageHook = () => {
    const [text,setText]=useState('');
    const [results, setResults] = useState([]);

    const handleInput = (e) => {
        setText(e.target.value);
      }
     const handleSubmit = (e) => {
        const apiCall = async () => {
            const giphy = new GiphyFetch('GTSVqnCRnyQ77Qwu2FBPtBbfnSXZUxft')
          const res = await giphy.animate(text, {limit: 20})
         setResults(res.data)
          console.log(res.data)
       
        
        }
       apiCall()
       setText('');
      }
  

    return (
        <>
        <div className="App">
               <h1>GIF Generator</h1>
                <h3>Type a word in textarea and hit submit to generate 20 GIFs</h3>
               <input className='input-field' value={text} onChange={handleInput} />
                <button className='submit-btn' onClick={handleSubmit}>Submit</button>
             

                {<TextList gifs={results}  />}
 
     </div>
               
        </>
    )
}

export default GiphyPageHook