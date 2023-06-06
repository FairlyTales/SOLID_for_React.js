/*
 * Liskov Substitution Principle
 *
 * Adding the rest props makes CustomInput more flexible and substitutable with
 * the native input element, thus making it LSP compliant.
 */


const CustomInput = ({ value, onChange, ...props }) => {
	// ...some additional logic

	return <input {...props} value={value} onChange={onChange} />
}
