const FormInput = ({label, className, ...otherProps }) => {
	return (
		<>
			<label className={className}>{label}</label>
			<input {...otherProps}/>
		</>
	);
};

export default FormInput;