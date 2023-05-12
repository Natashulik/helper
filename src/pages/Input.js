import React, {useState} from "react";

function Input(){
    const [value, setValue] = useState(0);
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<input className="state_input" value={value} onChange={handleChange} />
		<p className="state_p">{value ** 2}</p>
	</div>;
}


export default Input;