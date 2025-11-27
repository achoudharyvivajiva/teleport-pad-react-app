import styled from "styled-components";

export const IpadContainer = styled.div`
  width: 100%;
  height: 100dvh; /* dynamic viewport height — works on all iPads */
  margin: 0 auto;

  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);

  /* smooth corners + shadow */
  box-shadow: 0px 0px 2vw rgba(0, 0, 0, 0.25);

  .content {
    flex: 1;
    overflow-y: auto;
    padding: 1.5vh 1.5vh 0px 1.5vw;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  /* padding: 1.5vh 1.5vw; */
`;
