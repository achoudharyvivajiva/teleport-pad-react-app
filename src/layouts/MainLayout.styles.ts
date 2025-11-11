import styled from "styled-components";

export const IpadContainer = styled.div`
  width: 1180px; /* Landscape width */
  height: 820px; /* Landscape height */

  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;

  overflow: hidden;

  /* Fake device shadow for realistic feel */
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

  /* If the app is running on iPad 7 (slightly smaller) */
  @media screen and (device-width: 810px) and (orientation: landscape) {
    width: 1024px;
    height: 768px;
  }

  .content {
    flex: 1;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;
