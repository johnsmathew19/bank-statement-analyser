import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const FileUploadBox = ({ onFileSelect }) => {
  const [progress, setProgress] = useState(0);

  const handleFileInput = (e) => {
    const files = e.target.files;
    handleFileUpload(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleFileUpload = (files) => {
    // Assuming you handle file upload here and update progress
    if (files.length > 0) {
      // Simulating progress for demo
      setProgress(0); // Reset progress when new file is uploaded
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);
    }
  };

  return (
    <div
      className="file-upload-box"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        type="file"
        onChange={handleFileInput}
        style={{ display: 'none' }}
        id="file-input"
      />
      <label htmlFor="file-input" className="upload-label">
        Click to upload or drag and drop
      </label>

      {/* New button in the center */}
      <button className="upload-button">
        Select File
      </button>

      <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>

      {/* Progress Bar added below each drag and drop */}
      <ProgressBar progress={progress} />
    </div>
  );
};

export default FileUploadBox;
