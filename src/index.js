import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Wrapper from "./context/Wrapper";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Wrapper>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Wrapper>
	</React.StrictMode>,
	document.getElementById("root")
);
