import React from "react";
import { Link } from "react-router-dom";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.nameField = React.createRef();
        this.handle = this.handle.bind(this);
    }
    handle() {
         alert(this.nameField.current.value);
    }
    render() {
        return <>
                 <input ref={this.nameField}  className="ref_input"/>
                 <button onClick = {this.handle} className="ref_button"> показать </button>
               </>;
  }
};

export default UserForm;