import React, { useState } from 'react';
import './fileBrowser.css';

const FileBrowser = ({ onFileSelect, acceptedTypes = "image/*,.pdf,.doc,.docx", multiple = false }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleFiles = (files) => {
    const fileList = Array.from(files);
    const validFiles = fileList.filter(file => {
      if (acceptedTypes.includes('image/*') && file.type.startsWith('image/')) return true;
      if (acceptedTypes.includes('.pdf') && file.type === 'application/pdf') return true;
      if (acceptedTypes.includes('.doc') && file.type === 'application/msword') return true;
      if (acceptedTypes.includes('.docx') && file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return true;
      return acceptedTypes.split(',').some(type => file.name.toLowerCase().endsWith(type.trim().toLowerCase()));
    });

    if (validFiles.length === 0) {
      alert('Please select valid files');
      return;
    }

    setSelectedFiles(multiple ? validFiles : [validFiles[0]]);
    
    // Create preview URLs for images
    const urls = validFiles.map(file => {
      if (file.type.startsWith('image/')) {
        return URL.createObjectURL(file);
      }
      return null;
    });
    setPreviewUrls(urls);

    // Notify parent component
    onFileSelect(multiple ? validFiles : validFiles[0]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newUrls = previewUrls.filter((_, i) => i !== index);
    
    // Revoke old URL
    if (previewUrls[index]) {
      URL.revokeObjectURL(previewUrls[index]);
    }
    
    setSelectedFiles(newFiles);
    setPreviewUrls(newUrls);
    onFileSelect(multiple ? newFiles : (newFiles[0] || null));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (file) => {
    if (file.type.startsWith('image/')) return '🖼️';
    if (file.type === 'application/pdf') return '📄';
    if (file.type.includes('word')) return '📝';
    return '📎';
  };

  // Cleanup URLs on unmount
  React.useEffect(() => {
    return () => {
      previewUrls.forEach(url => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, [previewUrls]);

  return (
    <div className="file-browser">
      <div
        className={`file-drop-zone ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-input"
          className="file-input"
          accept={acceptedTypes}
          multiple={multiple}
          onChange={handleFileInputChange}
        />
        
        <label htmlFor="file-input" className="file-input-label">
          <div className="drop-zone-content">
            <span className="drop-icon">📁</span>
            <p className="drop-text">
              Drag & drop files here or <span className="browse-text">browse</span>
            </p>
            <p className="drop-hint">
              Supported: {acceptedTypes.replace(/\*/g, '')}
            </p>
          </div>
        </label>
      </div>

      {selectedFiles.length > 0 && (
        <div className="selected-files">
          <h4>Selected Files:</h4>
          <div className="file-list">
            {selectedFiles.map((file, index) => (
              <div key={index} className="file-item">
                <div className="file-preview">
                  {previewUrls[index] ? (
                    <img src={previewUrls[index]} alt={file.name} className="file-thumbnail" />
                  ) : (
                    <span className="file-icon">{getFileIcon(file)}</span>
                  )}
                </div>
                
                <div className="file-info">
                  <span className="file-name">{file.name}</span>
                  <span className="file-size">{formatFileSize(file.size)}</span>
                  <span className="file-type">{file.type || 'Unknown'}</span>
                </div>
                
                <button 
                  className="remove-file-btn"
                  onClick={() => removeFile(index)}
                  title="Remove file"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="file-browser-actions">
        <button
          className="btn clear-files-btn"
          onClick={() => {
            setSelectedFiles([]);
            setPreviewUrls([]);
            onFileSelect(multiple ? [] : null);
          }}
          disabled={selectedFiles.length === 0}
        >
          Clear All
        </button>
        
        <span className="file-count">
          {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} selected
        </span>
      </div>
    </div>
  );
};

export default FileBrowser;