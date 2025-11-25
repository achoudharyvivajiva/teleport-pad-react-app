import { Container } from "../../components";
import { PageWrapper } from "./VideoCall.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  globalActions,
  selectLayout,
  selectShowUploadModel,
} from "../../store/features/global/globalSlice";
import { GridLayout } from "../../components/VideoLayouts/GridLayout/GridLayout";
import { ListLayout } from "../../components/VideoLayouts/ListLayout/ListLayout";
import Modal from "react-modal";
import {
  ModelBody,
  ModelHeader,
  ModelHeaderTitle,
} from "../FamilyAndFriend/FamilyAndFriend.styles";
export default function VideoCall() {
  const dispatch = useAppDispatch();
  const layout = useAppSelector(selectLayout);
  const showModel = useAppSelector(selectShowUploadModel);

  return (
    <Container>
      <PageWrapper>
        {layout === "grid" ? <GridLayout /> : <ListLayout />}
        <Modal
          id="uploadModel"
          isOpen={showModel}
          ariaHideApp={false}
          onRequestClose={() =>
            dispatch(globalActions.handleShowUploadModel(false))
          }
          shouldCloseOnOverlayClick={false}
          style={{
            content: {
              width: "840px",
              height: "350px",
              margin: "auto",
              background: "white",
              borderRadius: "4px",
              padding: "0px",
              border: "none",
            },
            overlay: {
              background: "#0A0A0AC7",
            },
          }}
        >
          <ModelHeader>
            <ModelHeaderTitle>Send File To EMR</ModelHeaderTitle>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer"
              onClick={() => {
                dispatch(globalActions.handleShowUploadModel(false));
              }}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </ModelHeader>
          <ModelBody></ModelBody>
        </Modal>
      </PageWrapper>
    </Container>
  );
}
