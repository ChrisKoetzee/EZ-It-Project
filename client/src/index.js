import { createRoot } from "react-dom/client";
import { BrowserRouter ,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<Route path="/" component={App} />
	</BrowserRouter>
);
