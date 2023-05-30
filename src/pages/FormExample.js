import React from "react";
import { Link } from "react-router-dom";

class FormExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ""};
 
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(e) {
      let val = e.target.value;
      this.setState({name: val});
  }
 
    handleSubmit(e) {
      e.preventDefault();
      alert("Имя: " + this.state.name);
    }
 
    render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <label className="form_label">Имя:</label><br />
              <input type="text" value={this.state.name} onChange={this.onChange} className="form_input"/> <br />
              <input type="submit" value="Отправить"  className="form_submit"/>
          </form>
      );
    }
  }

export default FormExample;