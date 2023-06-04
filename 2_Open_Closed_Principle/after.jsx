/*
 * Open Closed Principle
 *
 * With this approach, we completely remove the variable logic that we had inside
 * of the Header and now can use composition to put there literally anything we want
 * without modifying the component itself. A good way of thinking about it is that
 * we provide a placeholder in the component that we can plug into. This is a very
 * powerful technique that we can use to make our components more flexible and
 * reusable.
 *
 * Following this principle, we reduced coupling between the components, and
 * made them more extensible and reusable.
 */

const Header = ({ children }) => (
	<header>
		<Logo />

		<Actions>
			{children}
		</Actions>
	</header>
)

const HomePage = () => (
	<>
		<Header>
			<Link to="/dashboard">Go to dashboard</Link>
		</Header>
		<OtherHomeStuff />
	</>
)

const DashboardPage = () => (
	<>
		<Header>
			<Link to="/events/new">Create event</Link>
		</Header>
		<OtherDashboardStuff />
	</>
)
