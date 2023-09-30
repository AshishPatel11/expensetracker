import { useState, useRef } from "react";

const DragDropFiles = () => {

  const [files, setFiles] = useState(null);
  const [imagedata, setImagedata] = useState({})
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

    setImagedata({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  if (files) return (
    <div className="uploads">
      <div className="actions">
        <button onClick={() => setFiles(null)}>Cancel</button>
        <img className="upload-img" src={imagedata.file} alt="" />
      </div>
    </div>
  )

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h2>Drag and Drop Files to Upload</h2>
        <h2>Or</h2>
        <input type="file" id="file" name="file" onChange={onChange} hidden accept="image/png, image/jpeg" ref={inputRef} />
        <button className="file-btn" onClick={() => inputRef.current.click()}>Select Files</button>
      </div>
    </>
  );
};

export default DragDropFiles;