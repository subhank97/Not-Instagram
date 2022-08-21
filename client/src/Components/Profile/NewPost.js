import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NewPost({ setPost, user }) {
  const [errors, setErrors] = useState([])
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image:image, 
        description: description, 
        user_id: user.id})
    }).then((res) => {
      if (res.ok) {
      res.json().then((data) => setPost(data))
        window.location.reload(false)
    } else {
      res.json().then((err) => setErrors(err.errors));
    }})
    setImage()
    setDescription()
  }

  return (
    <div className="post-form">
        <form onSubmit={handleSubmit}>
            <div className="image-form">
                <input type="text" className="form-control" placeholder="Image " 
                       onChange={(e => setImage(e.target.value))} value={image}/>
            </div>
            <Form.Group className="article-description" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Description" 
             onChange={(e => setDescription(e.target.value))} value={description}/>
            </Form.Group>
            <div className="article-form-button">
            <Button type="submit" variant="secondary">Create</Button>
            </div>      
        </form>
    </div>
  )
  }

export default NewPost;