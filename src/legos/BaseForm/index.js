import React from 'react';

import InputItem from 'legos/InputItem';
import Button from 'legos/Button';

// This form programatically generates controlled input elements
// based on an array of strings passed to props.fields.  We'll 
// add a unique id prop to each field name for use as its id prop,
// as well as its unique key for React.
import shortid from 'shortid';

class BaseForm extends React.Component {
	constructor(props) {
		super(props);
		// Build a state object with a prop for each field specified in the 
		// array of strings on props.fields.  Add a unique id to each.
		console.log('constructor')
		const fields = this.props.fields.reduce(
			(fields, field) => {
				fields[field] = {
					value: '',
					_id: shortid.generate(),
					hasFocus: false
				};

				return fields
			}, {}
		);

		this.state = {
			...fields
		};
	}

	handleInputChange = (e) => {
		const {name, value} = e.target;
		this.setState(prev => {
			return {
				[name]: {
					...prev[name],
					value: value
				}
			}
		});
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		this.props.handleFormSubmission(this.state)

		// reset state
		this.setState(prevState => {
			const newState = {};
			for(let k in prevState) {
				newState[k] = {
					...prevState[k],
					value: ''
				}
			};
			return newState
		});
	}

	handleInputFocus = (e) => {
		const {name} = e.target;
		// Adjust the state which is passed to InputItem
		// props and controls a small input animation
		if(!this.state[name].hasFocus) {
			this.setState(prev => {
				return {
					[name]: {
						...prev[name],
						hasFocus: true
					}
				}
			})
		}
	}

	handleInputBlur = (e) => {
		const {name} = e.target;
		// Adjust the state which is passed to InputItem
		// props and controls a small input animation
		if(this.state[name].hasFocus) {
			this.setState(prev => {
				return {
					[name]: {
						...prev[name],
						hasFocus: false
					}
				}
			})
		}
	}

	populateInputs() {
		// Now loop through array of field names.  Create label and input for each.
		return this.props.fields.map(field => {
			const {_id, value, hasFocus} = this.state[field];
			return(
				<InputItem
					handleFocus={this.handleInputFocus}
					handleBlur={this.handleInputBlur}
					key={_id}
					fieldName={field}
					id={_id}
					value={value}
					handleChange={this.handleInputChange}
					hasFocus={hasFocus}
				/>
			);
		});
	}

	render() {
		return(
			<form className="c-form" onSubmit={this.handleFormSubmit}> 
				{this.populateInputs()}
				<Button btnType = 'submit'>Submit</Button>
			</form>
		)
	}
}

export default BaseForm;



