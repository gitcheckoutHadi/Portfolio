import styled from "styled-components";

export const BannerBox = styled.div<{ theme?: string }>`
  box-shadow: ${(props) =>
    props.theme === "light"
      ? "10px 10px 19px #e0e0e0, -10px -10px 19px #f0f0f0"
      : "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e"};
  background: ${(props) => (props.theme === "light" ? "red" : "#191B1E")};
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.325rem;
`;
