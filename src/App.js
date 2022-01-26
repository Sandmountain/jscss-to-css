import { useState } from "react";
import "./App.css";
import { convertToCss } from "./converter";

function App() {
	const [output, setOutput] = useState("Output");

	const onChange = (e) => {
		setOutput(convertToCss(e.target.value));
	};

	return (
		<div style={{ padding: "5%" }}>
			<h2>Convert JS-CSS to CSS</h2>
			<div className="App">
				<textarea
					onChange={(e) => onChange(e)}
					className={"output"}
					style={{ width: "50%" }}
					placeholder="Insert js-css here"
					resizable={false}
				></textarea>

				<textarea
					style={{ width: "50%" }}
					value={output}
					readOnly={true}
					className={"output"}
					disabled={true}
				></textarea>
			</div>
		</div>
	);
}

export default App;
