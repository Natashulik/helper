import React from "react";

function Students(props) {
    return <ul> 
        {props.info.map(function(item) {
            return <li key={item.name}>{item.name} {item.surname}, {item.age}</li>
        })}
     </ul>;
}

export default Students;
