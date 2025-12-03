import { Button, Container } from "../../components";
import {
  ButtonContainer,
  CapturedImage,
  ModelBody,
  PageWrapper,
  TakePictureContainer,
} from "./VideoCall.styles";
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
  ModelHeader,
  ModelHeaderTitle,
} from "../FamilyAndFriend/FamilyAndFriend.styles";
import uploadIcon from "../../assets/icons/upload.png";
import crossIcon from "../../assets/icons/white/cross.png";
import cameraIcon from "../../assets/icons/white/camera.png";

import { useState } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { theme } from "../../styles/theme";
import { rightSuccessMessage } from "../../utils/toasters";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
export default function VideoCall() {
  const dispatch = useAppDispatch();
  const layout = useAppSelector(selectLayout);
  const showModel = useAppSelector(selectShowUploadModel);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<
    { id: number; photo: string }[]
  >([]);

  const takePhoto = async () => {
    const capturedPhoto = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    setPhoto(capturedPhoto.dataUrl!);
  };
  // const handleUploadedImage = () => {
  //   setIsImageUploaded(false);
  //   toast.dismiss();
  // };
  const handleUploadImage = () => {
    setUploadedPhotos((prev: any) => {
      return [...prev, { id: Number(uploadedPhotos.length + 1) ?? 1, photo }];
    });
    setIsImageUploaded(true);
    rightSuccessMessage("File has been successfully uploaded.");
  };
  const handleAddMoreImage = () => {
    setPhoto(null);
    setIsImageUploaded(false);
  };

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
              width: "600px",
              height: "400px",
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
          <ModelBody hasPhoto={!!photo}>
            <TakePictureContainer hasPhoto={!!photo}>
              {photo && !isImageUploaded && (
                <CapturedImage src={photo} alt="Captured" hasMaxHeight />
              )}

              {uploadedPhotos?.length && isImageUploaded ? (
                <>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {uploadedPhotos?.map((data) => (
                      <SwiperSlide key={data.id}>
                        <CapturedImage
                          src={data?.photo}
                          alt="Captured"
                          hasMaxHeight={false}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {uploadedPhotos?.length && isImageUploaded ? (
                    <Button
                      bgcolor={theme.colors.primary}
                      src={uploadIcon}
                      hasIcon
                      iconWidth={16}
                      iconHeight={16}
                      width="180px"
                      onClick={handleAddMoreImage}
                      textDecoration="underline"
                    >
                      Add More Image
                    </Button>
                  ) : null}
                </>
              ) : photo ? (
                <ButtonContainer>
                  <Button
                    bgcolor={theme.colors.primary}
                    src={uploadIcon}
                    hasIcon
                    iconWidth={16}
                    iconHeight={16}
                    width="180px"
                    onClick={handleUploadImage}
                  >
                    Upload Image
                  </Button>
                  <Button
                    bgcolor={theme.colors.red}
                    src={crossIcon}
                    hasIcon
                    iconWidth={16}
                    iconHeight={16}
                    width="180px"
                    onClick={() => setPhoto(null)}
                  >
                    Retake Image
                  </Button>
                </ButtonContainer>
              ) : (
                <Button
                  bgcolor={theme.colors.primary}
                  src={cameraIcon}
                  hasIcon
                  iconWidth={16}
                  iconHeight={16}
                  width="220px"
                  onClick={takePhoto}
                  textDecoration="underline"
                >
                  Take a picture
                </Button>
              )}
            </TakePictureContainer>
          </ModelBody>
        </Modal>
      </PageWrapper>
    </Container>
  );
}
