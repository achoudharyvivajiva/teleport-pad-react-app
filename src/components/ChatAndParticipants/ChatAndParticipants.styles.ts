import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 75vh;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;
export const HeaderRight = styled.div`
  background: ${({ theme }) => theme.colors.red};
  border-radius: 50px;
  width: 30px;
  height: 30px;
`;

export const HeaderLeftHeading = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;
export const Icon = styled.img.attrs<{
  width: number;
  height: number;
}>((props) => ({
  width: props.width || 24,
  height: props.height || 20,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const CloseButton = styled.button.attrs<{
  width?: string;
  height?: string;
}>((props) => ({
  width: props.width || "32px",
  height: props.height || "32px",
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #ff4a4a;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: ${({ theme }) => theme.typography.body};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ff1f1f;
  }
`;

export const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: auto;
`;
export const ParticipantInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.body};
  color: #4e4e4e;
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const ParticipantInfoLeft = styled.div``;

export const ParticipantInfoSubTitle = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.normal};
`;

export const ParticipantRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 0px 10px;
`;

export const MicroPhoneIcon = styled.img`
  width: 20px;
  height: 25px;
`;
export const VideoIcon = styled.img`
  width: 20px;
  height: 13px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectParticipantsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddNewParticipantsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const StyledDropdown = styled.div`
  .p-dropdown {
    width: 210px;
    height: 45px;
    padding: 15px;
    border: 1px solid #05324e;
    border-radius: 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkgray};
    font-size: ${({ theme }) => theme.typography.body};
    font-weight: ${({ theme }) => theme.weight.bold};
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 0px;
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const NumberInput = styled.input`
  padding: 12px 14px;
  font-size: 12px;
  color: #2b2b2b;
  border-radius: 6px;
  border: 1px solid #05324e;
  background: #f3f6f9;
  width: 100%;
  &:focus {
    outline: none;
    border-color: #376ea6;
  }
  /* Hide spinner arrows in Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide spinner arrows in Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
export const Input = styled.input`
  padding: 12px 14px;
  font-size: 12px;
  color: #2b2b2b;
  border-radius: 6px;
  border: 1px solid #05324e;
  background: #f3f6f9;
  width: 100%;
  ÷ &:focus {
    outline: none;
    border-color: #376ea6;
  }
  /* Hide spinner arrows in Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide spinner arrows in Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
