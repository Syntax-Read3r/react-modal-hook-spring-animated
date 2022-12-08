import styled from "styled-components";

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    color: #141414;

    p {
        margin-bottom: 1rem;
        margin: 0 auto;
        padding: 10px 7px 10px 15px;
    }

    button {
        padding: 10px 24px;
        background-color: #141414;
        color: #fff;
        cursor: pointer;
        border: 1px solid #141414;
    }

    button:hover {
        transition: 0.3s;
        background-color: #fff;
        color: #141414;
        border: 1px solid #141414;
    }
`;