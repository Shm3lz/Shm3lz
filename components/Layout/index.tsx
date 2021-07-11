import Footer from "../Footer"

const Layout: React.FC = ({ children }) => {
    return (
        <>
			<div className="container">
				<main>
					{children}
				</main>
			</div>

			<Footer />
        </>
    );
}

export default Layout;