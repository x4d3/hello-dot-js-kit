import 'dot-face-auto-capture';
import { useEffect, useState } from "react";

const FaceCamera = (props) => {
  useEffect(() => {
    const faceAutoCaptureHTMLElement = document.getElementById('x-dot-face-auto-capture');
    faceAutoCaptureHTMLElement.cameraOptions = props;
  });

  return <x-dot-face-auto-capture id="x-dot-face-auto-capture"/>;
};

const Face = () => {
  const [imageInfo, setImageInfo] = useState({});

  const handleFacePhotoTaken = (image, resolution) => {
    console.log({ image, resolution })

    const imageSrc = URL.createObjectURL(image);

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      const imageBase64WithTag = reader.result;
      const imageBase64 = imageBase64WithTag.substr(imageBase64WithTag.indexOf(',') + 1);
      setImageInfo({ imageBase64, imageSrc, resolution })
    };
  };

  const handleError = (error) => {
    console.log(error)
    setImageInfo({ error })
  };

  const modelUrls = {
    modelJSON: 'blaze_model/face_4cl/model.json',
    modelBin: 'blaze_model/face_4cl/group1-shard1of1.bin',
  };

  return (
    <div className="container" style={ { height: 500, width: 500 } }>
      <FaceCamera
        imageType="jpg"
        cameraFacing="user"
        photoTakenCb={ handleFacePhotoTaken }
        onError={ handleError }
        modelUrls={ modelUrls }
        uiCustomisation={ {
          placeholder: {
            facePlaceholder: 'ellipse-solid',
          },
          instructions: {
            face_too_close: 'This is too close',
            face_too_far: 'Ah no, you are too far',
          },
          colors: {
            placeholderColor: '#EEEEEE',
            instructionTextColor: '#080808',
          },
        } }
      />
      <pre>
        { JSON.stringify(imageInfo, null, 2) }
      </pre>
      { imageInfo.imageSrc && (<img alt="your face" src={ imageInfo.imageSrc } style={ { height: 200, width: null, flex: 1 } }/>) }

    </div>
  );
};

export default Face;