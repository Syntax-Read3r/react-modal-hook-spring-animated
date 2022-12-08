import React, { useRef} from "react";
import { Background } from "../Style/Background";
import { ModalWrapper } from "../Style/ModalWrapper";
import { ModalContent } from "../Style/ModalContent";
import { ModalImg } from "../Style/ModalImg";
import IMG from '../../Images/3-PhotoRoom low res.png'

import RingLoader from "react-spinners/RingLoader";


export const Modal = ({ showModal, setShowModal }) => {
	const modalRef = useRef();

    /*
	const animation = useSpring({
		config: {
			duration: 500,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0)` : `translateY(-100%)`,
	});
    */




	return (
		<>
			{showModal ? (
				<Background ref={modalRef} >
					{/* <animated.div style={animation}> */}
						<ModalWrapper showModal={showModal}>
							<ModalImg src={IMG} alt="Munyaradzi's Photo" />
							<ModalContent>
								<h1>SyntaxRead3r Solutions</h1>
								<p>
									{" "}
									Welcome to our website! We are currently in the process of building and improving our site, so what you see now is a beta version. We apologize for any inconvenience this may cause and appreciate your patience as we continue to work on making our site the best it can be. Thank you for visiting and please check back soon for updates!
								</p>
								<RingLoader color={"#123abc"} loading={true} size={150} />
							</ModalContent>
							
						</ModalWrapper>
					{/* </animated.div> */}
				</Background>
			) : null}
		</>
	);
};
