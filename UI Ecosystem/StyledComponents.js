// Component + styledComponentPackage => styled Component

// Automatic vendor prefixing
// Unique class names
// Elimination of dead styles

// npm i styled-components


import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  background-color: ${props => props.bg === "black" ? "black" : "blue"};
`;

function Profile() {
  return (
    <div>
      <StyledButton bg="black">Button A</StyledButton>
      <StyledButton bg="blue">Button B</StyledButton>
    </div>
  )
}

// Here, StyledButton is the styled component,
// it will be rendered as an HTML button with the contained styles.
// IMPORTANT =>
// "styled" is an internal utility method that transforms the styling from JavaScript into actual CSS