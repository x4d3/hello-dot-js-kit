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
  const [imageInfo, setImageInfo] = useState({
    image: null,
    resolution: null,
  });
  
  const handleFacePhotoTaken = (image, resolution) => {
    console.log({image, resolution})
    setImageInfo({image, resolution})
  };

  const handleError = (error) => {
    console.log(error)
    setImageInfo({error})
  };
  
  const modelUrls = {
    modelJSON: 'blaze_model/model.json',
    modelBin: 'blaze_model/group1-shard1of1.bin',
  };

  return (
    <div className="container" style={{height: 500, width: 500}}>
      <FaceCamera
        imageType="png"
        cameraFacing="user"
        photoTakenCb={handleFacePhotoTaken}
        onError={handleError}
        modelUrls={modelUrls}
      />
      <pre>
        {JSON.stringify(imageInfo,  null, 2)}
      </pre>
    </div>
  );
};

export default Face;