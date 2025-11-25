import styled from "styled-components";

export const VideoContanier = styled.div<{ count: number }>`
  width: 100%;
  /* height: 100%; */
  display: grid;
  gap: 12px;
  ${({ count }) =>
    count === 1 &&
    `
    grid-template-columns: 1fr;
  `}

  ${({ count }) =>
    count === 2 &&
    `
    grid-template-columns: 1fr 1fr;

  `}

  ${({ count }) =>
    count === 3 &&
    `
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    
    /* last item centered */
    > div:nth-child(3) {
      grid-column: span 2;
      width: 50%;
      margin: 0 auto;
    }
  `}

  ${({ count }) =>
    count === 4 &&
    `
    grid-template-columns: 1fr 1fr;
  `}
`;

export const VideoBox = styled.div`
  background: #000;
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-left: 10px solid #05324e;
  border-right: 10px solid #05324e;
`;

export const VideoInfo = styled.div`
  width: 160px;
  height: 30px;
  position: absolute;
  padding: 10px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  background: #ebebeb;
  border: 1px solid #aeaeae;
  border-top-right-radius: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const UserVideoInfo = styled.span``;
export const MicrophoneIcon = styled.img.attrs<{
  width: number;
  height: number;
}>((props) => ({
  width: props.width || 0,
  height: props.height || 0,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
