/*
 * Single Responsibility Principle
 *
 * This principle states that class or component should have only one reason to change or, in other words, it should have only one responsibility.
 *
 * The code below violates the single responsibility principle because it is
 * responsible for fetching the products, rendering them, rendering list title
 * and also styling the container. Right not it doesn't seem like a big deal,
 * but as the application grows, this component will become more complex and
 * harder to maintain.
 *
 * We can apply the single responsibility principle by separating this code into
 * separate components with each component having only one role. And can also
 * extract the logic for fetching the products into a custom hook to separate our
 * rendering from the business logic.
 *
 * See the refactored code in the after.js file.
 */

export const ProductList = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		const loadProducts = async () => {
			const { data } = await axios.get('https://acme.com/api/products');

			setProducts(data);
		}

		loadProducts();
	}, []);

	return (
		<div className="styling_the_container">
			<h2 className="styling_the_list_title">Products</h2>

			<ul>
				{products.map(product => (
					<li key={ product.id }>
						{ product.name }
					</li>
				))}
			</ul>
		</div>
	)
}
