import './form-input.styles.scss'

const FormInput = ({label, className, ...otherProps }) => {
	return (
		<div className="group">
      <input className="form-input" {...otherProps}/>    
      {label && (

			<label className={`${className} ${otherProps.value.length ? 'shrink' : '' } form-input-label`}>{label}
      </label>
       )}

		</div>
	);
};

export default FormInput;