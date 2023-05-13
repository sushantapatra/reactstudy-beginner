import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Navbar
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to={`/`}
								>
									Home
								</Link>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Hooks
								</a>
								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<Link
											className="dropdown-item"
											to={`/usestate`}
										>
											UseState
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to={`/useeffect`}
										>
											UseEffect
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to={`/useelocation`}
										>
											UseLocation
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to={`/counter`}
										>
											Counter Redux
										</Link>
									</li>
									<li><Link className="dropdown-item" to="/todoapp">Todo App</Link></li>
									<li>
										<Link
											className="dropdown-item"
											to={`/short-cuirt-evalution`}
										>
											Short Circuit Evalution
										</Link>
									</li>
									<li>
										<Link
											className="dropdown-item"
											to={`/form-submit`}
										>
											Basic Form Submit
										</Link>
									</li>

									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<Link
											className="dropdown-item"
											to={`/spread-operator`}
										>
											Spread Operator
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
