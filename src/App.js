import React, { useState } from "react";
import { Modal } from "./Components/Modal/Modal";
import Container from "./Components/Style/Container";
import { GlobalStyle } from "./Components/Style/globalStyle";

function App() {
	const [showModal, setShowModal] = useState(true);

	return (
		<>
			<Container>
				<Modal showModal={showModal} setShowModal={setShowModal} />
				<GlobalStyle />
			</Container>
		</>
	);
}

export default App;
