import React from 'react'

const CreatePost=()=> {
  return (
    <div className='card input-filed'
    style={{
        margin:"30px auto",
        maxWidth:"500px",
        padding:"40px",
        textAlign:"center",
    }}
    
    >
        <input type='text' placeholder="title"/>
        <input type='text' placeholder="body"/>
        <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-2">
                <span>Upload</span>
                <input type="file"/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text"/>
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-2" type="submit" name="action">
         Submit Post
         </button>


    </div>
  )
}

export default CreatePost