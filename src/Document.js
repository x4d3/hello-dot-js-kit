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
  modelJSON: 'blaze_model/docu_3cl_background/model.json',
  modelBin: 'blaze_model/docu_3cl_background/group1-shard1of1.bin',
};

const Document = () => {

  const handleDocumentPhotoTaken = (image, resolution) => {
    console.log("handleDocumentPhotoTaken")
    console.log({image, resolution})
  };

  return (
    <div className="container" style={{height: 500, width: 500}}>
      <div>Scan Documents</div>
      <DocumentCamera
        imageType="png"
        cameraFacing="environment"
        photoTakenCb={handleDocumentPhotoTaken}
        modelUrls={modelUrls}
      />
    </div>
  );
};

export default Document;
