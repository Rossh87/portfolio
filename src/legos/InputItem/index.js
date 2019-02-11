import React from 'react';

import './styles.scss';

const InputItem = ({fieldName, id, value, handleChange, hasFocus, handleFocus, handleBlur}) => {

	return(
		<div className='c-text-input'>
			<label 
				htmlFor={fieldName + id}
				className={hasFocus || value ? 
					'c-text-input_label s-has-focus'
					: 'c-text-input_label'
				}
			>
				{fieldName}
			</label>

			<input
				onFocus={handleFocus}
				onBlur={handleBlur}
				className='c-text-input_input'
				id={fieldName + id}
				type="text"
				onChange={handleChange}
				name={fieldName}
				value={value}
			/>
		</div>
	)
}

export default React.memo(InputItem);