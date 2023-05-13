import { Routes, Route } from "react-router-dom";
import TodoApp from "./TodoApp";
import "./App.css";
import BasicForm from "./BasicForm";
import CounterReducer from "./CounterReducer";
import Home from "./Home";
import Navbar from "./Navbar";
import ShortCircuitEvaluation from "./ShortCircuitEvaluation";
import SpreadOperator from "./SpreadOperator";
import UseEffectHook from "./UseEffectHook";
import UseLocationHook from "./UseLocationHook";
import UsestateHook from "./UsestateHook";
function App() {
	return (
		<div className="App">
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/usestate" element={<UsestateHook />} />
				<Route path="/useeffect" element={<UseEffectHook />} />
				<Route path="/useelocation" element={<UseLocationHook />} />
				<Route path="/counter" element={<CounterReducer />} />

				<Route
					path="/short-cuirt-evalution"
					element={<ShortCircuitEvaluation />}
				/>
				<Route path="/todoapp" element={<TodoApp/>}/>
				<Route path="/form-submit" element={<BasicForm />} />

				<Route path="/spread-operator" element={<SpreadOperator />} />
			</Routes>
		</div>
	);
}

export default App;
