import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RouterView from "@router/Index";
import { routes } from "@router/config";
import "antd/dist/antd.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<RouterView routes={routes} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
