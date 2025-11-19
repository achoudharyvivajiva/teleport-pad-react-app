import styled from "styled-components";

export const IpadContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  aspect-ratio: 1024 / 768;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

  .content {
    flex: 1;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;
// export const IpadContainer = styled.div`
//   width: 100%;
//   max-width: 1180px;
//   aspect-ratio: 1180 / 820;
//   margin: 0 auto;
//   background: ${({ theme }) => theme.colors.background};
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
//   box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);

//   @media screen and (max-width: 1024px) {
//     max-width: 1024px;
//     aspect-ratio: 1024 / 768;
//   }

//   .content {
//     flex: 1;
//     overflow-y: auto;
//   }
// `;

// export const Content = styled.div`
//   flex: 1;
//   overflow-y: auto;
// `;
