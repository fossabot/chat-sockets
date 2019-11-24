import styled from "Styles/theme";

export default styled("div")<{ floatToRight: boolean }>`
  font-size: .7em;
  float: ${props => props.floatToRight ? "right" : "left"};
  margin: 7px 0 0 4px;
`;