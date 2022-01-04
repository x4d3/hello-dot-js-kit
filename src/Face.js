import 'dot-face-auto-capture';
import { useEffect, useState } from "react";

const FaceCamera = (props) => {
  useEffect(() => {
    const faceAutoCaptureHTMLElement = document.getElementById('x-dot-face-auto-capture');
    faceAutoCaptureHTMLElement.cameraOptions = props;
  });

  return <x-dot-face-auto-capture id="x-dot-face-auto-capture" />;
};

const Face = () => {
  const [imageInfo, setImageInfo] = useState({});
  
  const handleFacePhotoTaken = (image, resolution) => {
    console.log({image, resolution})
    setImageInfo({image, resolution})
  };

  const handleError = (error) => {
    console.log(error)
    setImageInfo({error})
  };

  const modelUrls = {
    modelJSON: 'blaze_model/face_4cl/model.json',
    modelBin: 'blaze_model/face_4cl/group1-shard1of1.bin',
  };

  return (
    <div className="container" style={{height: 500, width: 500}}>
      <FaceCamera
        imageType="png"
        cameraFacing="user"
        photoTakenCb={handleFacePhotoTaken}
        onError={handleError}
        modelUrls={modelUrls}
        uiCustomisation = {{
          placeholder: {
            facePlaceholder: 'ellipse-solid',
          },
          instructions: {
            face_too_close: 'TOO CLOSE YOU ',
            face_too_far: 'TOO FAR!!',
          },
          colors: {
            placeholderColor: '#EEEEEE',
            instructionTextColor: '#080808',
          },
        }}
      />
      <pre>
        {JSON.stringify(imageInfo,  null, 2)}
      </pre>
    </div>
  );
};

export default Face;