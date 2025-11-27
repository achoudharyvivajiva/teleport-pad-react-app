import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  box-sizing: border-box;
`;
export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

export const HeaderLeft = styled.div`
  flex: 1;
`;
export const HeaderMid = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
  }
`;

export const HeaderMainHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
  font-weight: ${({ theme }) => theme.weight.bold};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
`;
export const HeaderMainPara = styled.p`
  font-size: ${({ theme }) => theme.typography.body};
  opacity: 0.8;
  font-weight: ${({ theme }) => theme.weight.normal};
  color: ${({ theme }) => theme.colors.gray};
`;

export const HeaderRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const BodySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const StepSection = styled.div`
  display: flex;

  gap: 10px;
`;
export const StepSpan = styled.span`
  font-weight: ${({ theme }) => theme.weight.bold};
  border-bottom: 1px solid white;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid white;
  font-size: ${({ theme }) => theme.typography.h3};
`;
export const TableContainer = styled.div`
  width: 100%;
  height: 250px;
  padding: 0;
  border-radius: 4px;
  overflow-y: auto;
  color: white;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: rgba(255, 255, 255, 0.12);
`;
export const TableBody = styled.tbody`
  background: ${({ theme }) => theme.colors.primary};
`;
export const HeadRow = styled.tr`
  text-align: left;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.body};
`;

export const HeadCell = styled.th`
  padding: 16px 20px;
  color: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  z-index: 2;
  background: #d9d9d926;
`;

export const BodyRow = styled.tr`
  transition: 0.2s;
`;
export const BodyRowWithCenter = styled.tr`
  transition: 0.2s;
  text-align: center;
`;
export const Divider = styled.div`
  width: 1px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
export const BodyCell = styled.td`
  padding: 9px 15px;
  vertical-align: middle;
  font-size: ${({ theme }) => theme.typography.body};
  color: white;
  position: relative;
`;

export const CheckBoxWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 0;
`;

export const CheckMark = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid #888;
  border-radius: 4px;
  display: inline-block;
  transition: all 0.2s ease;
  position: relative;

  /* When checked → green box */
  ${CheckBoxInput}:checked + & {
    background-color: #27c152; /* your theme green */
    border-color: #27c152;
  }

  /* Tick icon */
  ${CheckBoxInput}:checked + &::after {
    content: "✔";
    position: absolute;
    font-size: ${({ theme }) => theme.typography.body};
    color: white;
    left: 3px;
    top: 0px;
  }
`;

export const DeleteBtn = styled.button`
  width: 32px;
  height: 32px;
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

export const Paragraph = styled.p`
  font-weight: ${({ theme }) => theme.weight.normal};
  color: ${({ theme }) => theme.colors.medgray};
  font-size: ${({ theme }) => theme.typography.h3};
`;

export const AddNewButton = styled.button`
  padding: 5px;
  width: 120px;
  height: 45px;
  border: none;
  margin-left: 20px;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.bold};
  &:hover {
    opacity: 0.85;
  }
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #ffffff;
`;

export const Icon = styled.img.attrs<{
  width: number;
  height: number;
}>((props) => ({
  width: props.width || 0,
  height: props.height || 0,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 10px;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export const ModelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 15px;
`;

export const ModelHeaderTitle = styled.p`
  font-style: ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const ModelBody = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 5px;
  gap: 5px;
`;
export const ModelFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModelPrimaryButton = styled.button`
  padding: 15px 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.weight.normal};
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.85;
  }

  background-color: ${({ theme }) => theme.colors.green};
  border: 1px solid #ffffff;
  margin-top: 40px;
`;
export const Form = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  margin: 10px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 40px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.white} !important;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 6px;
`;

export const Input = styled.input`
  padding: 12px 14px;
  font-size: 16px;
  color: #2b2b2b;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background: #f3f6f9;
  width: 240px;

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
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    background-color: rgba(0, 255, 0, 0.05);
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary};
  }
`;

export const Select = styled.select`
  padding: 12px 14px;
  font-size: 16px;
  color: #2b2b2b;
  border-radius: 2px;
  background: #eef2f5;
  border: 1px solid #cecece;
  width: 240px;
  &:focus {
    outline: none;
    border-color: #376ea6;
  }
`;

export const InvitationSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0px 0px 20px 0px;
`;

export const TickIcon = styled.img`
  width: 55px;
  height: 55px;
  color: ${({ theme }) => theme.colors.white};
`;
export const InvitationHeading = styled.h1`
  font-weight: ${({ theme }) => theme.weight.bold};
  border-bottom: 1px solid white;
  color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid white;
  font-size: ${({ theme }) => theme.typography.h1};
`;
export const InvitationSubHeading = styled.p`
  font-weight: ${({ theme }) => theme.weight.normal};
  color: ${({ theme }) => theme.colors.medgray};
  font-size: 22px;
`;
