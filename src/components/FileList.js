import React from 'react';
import ProgressBar from './ProgressBar';

const FileList = ({ files }) => {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <div key={index} className="file-item">
          <div className="file-icon">{/* Icon logic */}</div>
          <div className="file-info">
            <p>{file.name}</p>
            <p>{file.size} KB</p>
            <ProgressBar progress={file.progress} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileList;
