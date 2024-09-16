import React, { useState } from 'react';
import './styles/App.css';
import FileUploadBox from './components/FileUploadBox';
import FileList from './components/FileList';

const App = () => {
  const [files, setFiles] = useState([]);

  const handleFileSelect = (selectedFiles) => {
    const uploadedFiles = Array.from(selectedFiles).map(file => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2),
      progress: Math.floor(Math.random() * 100),
      type: file.type,
    }));
    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div className="app-container">
      <div className="file-upload-section">
        <FileUploadBox onFileSelect={handleFileSelect} />
        <FileUploadBox onFileSelect={handleFileSelect} />
        <FileUploadBox onFileSelect={handleFileSelect} />
        <FileUploadBox onFileSelect={handleFileSelect} />
      </div>

      <div className="file-list-section">
        <FileList files={files} />
      </div>
    </div>
  );
};

export default App;
