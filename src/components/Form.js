

import React from "react";

function Form(props) {
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [submittedata, setdataSubmit] = React.useState([]);
	const [errors, setErrors] = React.useState([]);

	function handleFirstNameChange(event) {
		setFirstName(event.target.value);
	}

	function handleLastNameChange(event) {
		setLastName(event.target.value);
	}
	//onsubmit.
	const handleSubmit = (event) => {
		event.preventDefault();
	
		if (firstName.length > 0) {
			const formData = { firstName, lastName };
			const nameData = [...submittedata, formData];
			//copy of data submitted
			setdataSubmit([...submittedata, nameData]);
			setdataSubmit(nameData);
			console.log(nameData);
			//empty stringt
			setFirstName("");
			setLastName("");
		} else {
			setErrors(["First Name is required"]);
		}
	};

	const handleSubmitnames = submittedata.map((data, index) => {
		return (
			<div key={index}>
				<p>
					{`${data.firstName} 
						${data.lastName}`}
				</p>
			</div>
		);
	});

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleFirstNameChange} value={firstName} />
				<input type="text" onChange={handleLastNameChange} value={lastName} />
				<button type="submit">Submit</button>
			</form>
			{/* Render Error Message */}
			{errors.length > 0 && (
				<div>
					{errors.map((error, index) => (
						<p key={index}>{error}</p>
					))}
				</div>
			)}

			<h3>Submissions</h3>
			{handleSubmitnames}
		</>
	);
}

export default Form;
