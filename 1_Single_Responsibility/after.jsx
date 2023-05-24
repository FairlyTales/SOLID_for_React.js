/*
 * Single Responsibility Principle
 *
 * We separated the previous code into separate components with each one of them
 * having only one role
 *
 * ProductItem component is responsible for rendering a single product item
 * ProductList component is responsible for rendering a list of ProductItems
 * useProducts custom hook is responsible for fetching the products
 * ProductListContainer component is responsible for combining all the above
 *
 * This allowed us to give each component a distinct role/responsibility and
 * made our code more readable and maintainable. Because now we can easily
 * change one of them without affecting the other components and also reuse
 * these components. Moreover, since our business logic is separated from our
 * rendering logic, we can test it in isolation and easily change its exact
 * implementation, i.e. swapping axios with fetch or any other library.
 */

export const ProductListContainer = () => {
	const products = useProducts();

	return (
		<div className="styling_the_container">
			<h2 className="styling_the_list_title">Products</h2>

			<ProductList products={ products } />
		</div>
	)
}

const useProducts = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		const loadProducts = async () => {
			const { data } = await axios.get('https://acme.com/api/products');

			setProducts(data);
		}

		loadProducts();
	}, []);

	return products;
}

const ProductList = ({ products }) => {
	return (
		<ul>
			{products.map(product => (
				<ProductItem key={ product.id } product={ product } />
			))}
		</ul>
	)
}

const ProductItem = ({ product }) => {
	return (
		<li key={ product.id }>
			{ product.name }
		</li>
	)
}
