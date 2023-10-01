import { useState, useRef } from "react";

const DragDropFiles = (props) => {

  const [files, setFiles] = useState(null);
  const [imagedata, setImagedata] = useState({})
  const [imageBase, setImageBase] = useState("");

  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };


  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files)
  };

  // send files to the server 
  const onChange = event => {
    setFiles(event.target.files)

    //converting the image to base64 and passing it to parent component
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = async () => {
      await props.getImageBase(reader.result)
    }
    reader.onerror = error => {
      console.log("error", error)
    }

    //setting the state variable to display selected image
    setImagedata({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  if (files) return (
    <div className="uploads">
      <div className="actions">
        <img className="upload-img" src={imagedata.file} alt="" />
        <button className="expense-submit-btn fileupload" onClick={() => setFiles(null)}>Cancel</button>
      </div>
    </div>
  )

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h2>Drag and Drop Files to Upload</h2>
        <h2>Or</h2>
        <input type="file" id="file" name="file" onChange={onChange} hidden accept="image/png, image/jpeg" ref={inputRef} />
        <button className="expense-submit-btn fileupload" type="button" onClick={() => inputRef.current.click()}>Select Files</button>
      </div>
    </>
  );
};

export default DragDropFiles;