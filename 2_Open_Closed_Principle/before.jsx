/*
 * Open Closed Principle
 *
 * This principle states that software entities (classes, modules, functions, etc.)
 * should be open for an extension, but closed for modification.
 *
 * The code below violates the open closed principle because it is not open for
 * extension. If we want to add a new type of event, we have to modify the
 * existing code. This is not a big deal right now, but as the application grows,
 * this component will become more complex and harder to maintain.
 *
 * To fix this problem, and uphold the open closed principle, we can use component
 * composition. Our Header component doesn’t need to concern itself with what
 * it will render inside, and instead, it can delegate this responsibility to
 * the components that will use it using children prop
 *
 * See the refactored code in the after.jsx file.
 */

const Header = () => {
	const { pathname } = useRouter()

	return (
		<header>
			<Logo />

			<Actions>
				{pathname === '/dashboard' && <Link to="/events/new">Create event</Link>}
				{pathname === '/' && <Link to="/dashboard">Go to dashboard</Link>}
			</Actions>
		</header>
	)
}

const HomePage = () => (
	<>
		<Header />
		<OtherHomeStuff />
	</>
)

const DashboardPage = () => (
	<>
		<Header />
		<OtherDashboardStuff />
	</>
)
