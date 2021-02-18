import React from "react"
class UserProfile extends React.Component {
    constructor(props) {
      super(props)
    //   this.handleSubmit = this.handleSubmit.bind(this)
      this.input = React.createRef()
      this.pass = React.createRef()
    }
  
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.input.current.value)
    //   event.preventDefault()
    // }

     handleSubmit = (event)=> {
        alert('A name was submitted: ' + this.input.current.value,this.pass.current.value)
        event.preventDefault()
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            {'Name:'}
            <input type="text" ref={this.input} />
          </label>
          <label>
            {'password:'}
            <input type="text" ref={this.pass} />
          </label>

          <label>
            {'captcha:'}
            <input type="text"  />
          </label>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default UserProfile;