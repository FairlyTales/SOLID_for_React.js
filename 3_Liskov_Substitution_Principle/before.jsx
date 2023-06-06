/*
 * Liskov Substitution Principle
 *
 * Liskov substitution principle recommends designing objects in such a way that
 * “subtype objects should be substitutable for supertype objects”. In its original
 * definition, the subtype/supertype relationship is achieved via class inheritance,
 * but it doesn’t have to be that way. In a broader sense, inheritance is simply
 * basing one object upon another object while retaining a similar implementation,
 * and this is something we do in React quite often.
 *
 * However, we should acknowledge that this principle cannot and should not always
 * be observed in React. More often than not, we create subcomponents with the goal
 * of adding new functionality that their super-components don’t have, and that will
 * often break the interface of the super-component. This is a completely valid use
 * case, and we shouldn’t try to shoehorn LSP everywhere.
 *
 * As for components where LSP does make sense, we need to make sure that we don’t
 * break the principle unnecessarily. Here is an example of that.
 *
 * See the refactored code in the after.jsx file.
 */

// cutting out props that can be passed to the subcomponent
const CustomInput = ({ value, onChange }) => {
	// ...some additional logic

	// since a parent component only accepts value and onChange, we can't pass
	// other props like id, on click, etc. to the subcomponent
	return <input value={value} onChange={onChange} />
}


