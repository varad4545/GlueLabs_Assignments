import React, { Component } from 'react'
import './FinalSpace.css';
class FinalSpace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const url = 'https://finalspaceapi.com/api/v0/character/'
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        this.setState({ posts: data})
    }

    render() {
        const { posts } = this.state;

        return (
            <>
            
          

            <div  className="break-container"> 
                {posts.map(post => <div className='breaking' key={post.id}> 
                
                <div className="img-container">
                 <img src={post.img_url}  />
                 </div>

                 
                <p > <strong>Name:</strong> {post.name}</p>
                <p > <strong>Gender:</strong> {post.gender}</p>
                <p > <strong>Hair:</strong> {post.hair}</p>
                <p >  <strong>Origin:</strong> {post.origin}</p>
                <p >  <strong>Species:</strong> {post.species}</p>
                <p > <strong>Status:</strong> {post.status}</p>
                <p > <strong>Abilities:</strong></p>
                <ul>
             
                {post.abilities.map(
                   ability=><p key={ability}>{ability}</p>
                )}
                </ul>
                <p > <strong>Alias:</strong></p>
                <ul>
             
             {post.alias.map(
                al=><p key={al}>{al}</p>
             )}
             </ul>
                </div>
                                  
                )}

             </div>
                   
            </>
        )
    }
}

export default FinalSpace;