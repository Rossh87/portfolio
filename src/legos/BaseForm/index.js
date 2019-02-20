import React from 'react';

// Get local components
import InputItem from 'legos/InputItem';
import Button from 'legos/Button';

// This form programatically generates controlled input elements
// based on an array of config objects passed on props.fields.  We'll 
// add a unique id to each field name for use as its input's id prop,
// and also use this id as a key for React.
import shortid from 'shortid';

import './styles.scss';

class BaseForm extends React.Component {
	constructor(props) {
		super(props);
		// Build a state object with a prop for each field specified in the 
		// array of objects on props.fields.  Add a unique id to each.
		const fields = this.props.fields.reduce(
			(fields, field) => {
				fields[field.name] = {
					name: field.name,
					value: '',
					_id: shortid.generate(),
					hasFocus: false,
					type: field.type
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
					value
				}
			}
		});
	}

	handleFormSubmit = (e) => {
		e.preventDefault();

		// trim unneeded form data
		const dataToSubmit = {};

		for(let field in this.state) {
			dataToSubmit[this.state[field].name] = this.state[field].value;
		}

		// pass data to handler on props
		this.props.handleFormSubmission(dataToSubmit)

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
		// props and controls a small animation
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
		// Now loop through array of field objects in state .  Create label and input for each.
		const fields = Object.values(this.state);

		return fields.map(field => {
			return(
				<InputItem
					handleFocus={this.handleInputFocus}
					handleBlur={this.handleInputBlur}
					handleChange={this.handleInputChange}
					key={field._id}
					{...field}
				/>
			);
		});
	}

	render() {
		return(
			<form className="c-form" onSubmit={this.handleFormSubmit}> 
				{this.populateInputs()}
				<Button 
					receivedClassName="c-form_button"
					btnType ='submit'
				>
					Send Message
				</Button>
			</form>
		)
	}
}

export default BaseForm;



