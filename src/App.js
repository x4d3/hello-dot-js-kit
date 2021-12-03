import './App.css';
import {useEffect} from "react";

const DocumentCamera = (props) => {
  useEffect(() => {
    const documentAutoCaptureHTMLElement = document.getElementById('x-dot-document-auto-capture');
    if(documentAutoCaptureHTMLElement){
      console.log(documentAutoCaptureHTMLElement)
      documentAutoCaptureHTMLElement.cameraOptions = props;
    }else{
      console.log("documentAutoCaptureHTMLElement not found")
    }
  })

  return <x-dot-document-auto-capture id="x-dot-document-auto-capture" />;
};

const modelUrls = {
  modelJSON: '/hello-dot-js-kit/blaze_model/model.json',
  modelBin: '/hello-dot-js-kit/blaze_model/group1-shard1of1.bin',
};

const App = () => {

  const handleDocumentPhotoTaken = (image, resolution) => {
    console.log("handleDocumentPhotoTaken")
    console.log({image, resolution})
  };

  // @ts-ignore
  return (
    <div className="container" style={{height: 500, width: 500}}>
      <div>Camera</div>
      <DocumentCamera
        imageType="png"
        cameraFacing="environment"
        photoTakenCb={handleDocumentPhotoTaken}
        modelUrls={modelUrls}
      />
    </div>
  );
};

export default App;
