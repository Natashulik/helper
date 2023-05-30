import React from "react";

function Hello() {
    function press(){
        alert("Привет");
    }
    return <button onClick={press} className="hello_button">button</button>;
  }

export default Hello;