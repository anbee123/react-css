import styled from "styled-components"

export default function Button({ buttonText }) {

    // styled components use plain css syntax inside their tagged template literal
    const StyledButton = styled.button`
        background-color: white
        border-radius: 8px;
        color: pink;
        font-size: 24pt;
        padding: 15px 50px;
        width: 300px;`

    return (
      <StyledButton>{ buttonText }</StyledButton>
    );
  }