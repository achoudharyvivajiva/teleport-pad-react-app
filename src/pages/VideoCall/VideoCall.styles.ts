import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  box-sizing: border-box;
`;

export const TakePictureContainer = styled.div.attrs<{ hasPhoto: boolean }>(
  (props) => ({
    hasPhoto: props.hasPhoto || false,
  })
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${({ hasPhoto }) => (hasPhoto ? "100%" : "auto")};
  justify-content: ${({ hasPhoto }) => (hasPhoto ? "flex-start" : "center")};
  gap: 20px;
`;

export const CapturedImage = styled.img.attrs<{ hasMaxHeight: boolean }>(
  (props) => ({
    hasMaxHeight: props.hasMaxHeight,
  })
)`
  width: 100%;
  height: 100%;
  ${(props) => props.hasMaxHeight && `max-height: calc(100% - 60px);`}
  object-fit: cover;
`;

export const ModelBody = styled.div.attrs<{ hasPhoto: boolean }>((props) => ({
  hasPhoto: props.hasPhoto || false,
}))`
  width: 100%;
  height: 80%;
  padding: 20px;
  display: flex;
  justify-content: ${({ hasPhoto }) => (hasPhoto ? "flex-start" : "center")};
  align-items: center;
  overflow: hidden;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
