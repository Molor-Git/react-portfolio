import React, { useState } from 'react';
import AdminAuth from '../admin/AdminAuth';
import FileBrowser from '../admin/FileBrowser';
import portfolioData from '../../data/portfolioData';
import './contentManager.css';
import './fileBrowser.css';

const ContentManager = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [showFileBrowser, setShowFileBrowser] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Reset image load states when tab changes
  React.useEffect(() => {
    setImageLoadStates({});
  }, [activeTab]);

  const getItems = () => {
    switch (activeTab) {
      case 'projects':
        return portfolioData.projects;
      case 'files':
        return portfolioData.files;
      case 'photos':
        return portfolioData.photos;
      default:
        return [];
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setFormData({ ...item });
  };

  const handleCancel = () => {
    setEditingItem(null);
    setFormData({});
  };

  const handleSave = () => {
    // In a real application, this would save to a database
    // For now, we'll show instructions to manually update the data file
    alert(`To save changes, update the ${activeTab} array in src/data/portfolioData.js with these values:\n\n${JSON.stringify(formData, null, 2)}`);
    setEditingItem(null);
    setFormData({});
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      alert(`To delete this item, remove the object with id "${id}" from the ${activeTab} array in src/data/portfolioData.js`);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleArrayInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value.split(',').map(item => item.trim()).filter(item => item)
    });
  };

  const handleImageLoad = (itemId) => {
    setImageLoadStates(prev => ({
      ...prev,
      [itemId]: 'loaded'
    }));
  };

  const handleImageError = (itemId, e) => {
    // Prevent infinite error loop
    if (e.target.src.includes('placeholder.jpg')) {
      setImageLoadStates(prev => ({
        ...prev,
        [itemId]: 'error'
      }));
      return;
    }
    
    setImageLoadStates(prev => ({
      ...prev,
      [itemId]: 'error'
    }));
    e.target.src = '/assets/placeholder.jpg';
  };

  const handleFileSelect = (files) => {
    setSelectedFiles(Array.isArray(files) ? files : [files].filter(Boolean));
  };

  const handleFileUpload = () => {
    if (selectedFiles.length === 0) {
      alert('Please select files to upload');
      return;
    }

    const uploadInstructions = selectedFiles.map(file => {
      const targetFolder = activeTab === 'projects' ? 'projects' : activeTab === 'files' ? 'files' : 'photos';
      return `1. Copy "${file.name}" to "public/assets/${targetFolder}/"`;
    }).join('\n');

    const newEntries = selectedFiles.map((file, index) => {
      const targetFolder = activeTab === 'projects' ? 'projects' : activeTab === 'files' ? 'files' : 'photos';
      const id = `${activeTab.slice(0, -1)}-${Date.now()}-${index}`;
      
      if (activeTab === 'projects') {
        return {
          id: id,
          type: "project",
          title: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
          description: "Description for " + file.name.replace(/\.[^/.]+$/, ""),
          image: `/assets/${targetFolder}/${file.name}`,
          technologies: ["Technology1", "Technology2"],
          github: "https://github.com/your-username/repo",
          liveDemo: null,
          category: portfolioData.categories[activeTab][0] || "uncategorized",
          featured: false,
          dateCompleted: new Date().toISOString().split('T')[0]
        };
      } else if (activeTab === 'files') {
        return {
          id: id,
          type: "file",
          title: file.name.replace(/\.[^/.]+$/, ""),
          description: "Description for " + file.name.replace(/\.[^/.]+$/, ""),
          fileType: file.name.split('.').pop().toLowerCase(),
          fileUrl: `/assets/${targetFolder}/${file.name}`,
          thumbnail: `/assets/${targetFolder}/${file.name.replace(/\.[^/.]+$/, "")}-thumb.jpg`,
          category: portfolioData.categories[activeTab][0] || "uncategorized",
          dateAdded: new Date().toISOString().split('T')[0]
        };
      } else { // photos
        return {
          id: id,
          type: "photo",
          title: file.name.replace(/\.[^/.]+$/, ""),
          description: "Description for " + file.name.replace(/\.[^/.]+$/, ""),
          image: `/assets/${targetFolder}/${file.name}`,
          category: portfolioData.categories[activeTab][0] || "uncategorized",
          dateAdded: new Date().toISOString().split('T')[0]
        };
      }
    });

    const fullInstructions = `
${uploadInstructions}

2. Add these entries to the ${activeTab} array in src/data/portfolioData.js:

${JSON.stringify(newEntries, null, 2)}

3. Restart your development server to see the changes
    `;

    alert(fullInstructions);
    setSelectedFiles([]);
    setShowFileBrowser(false);
  };

  const renderEditForm = () => {
    if (!editingItem) return null;

    return (
      <div className="edit-form-overlay">
        <div className="edit-form">
          <h3>Edit {activeTab.slice(0, -1)}</h3>
          
          <div className="form-row">
            <label>Title</label>
            <input
              type="text"
              value={formData.title || ''}
              onChange={(e) => handleInputChange('title', e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
            />
          </div>

          {activeTab === 'projects' && (
            <>
              <div className="form-row">
                <label>Technologies (comma-separated)</label>
                <input
                  type="text"
                  value={formData.technologies?.join(', ') || ''}
                  onChange={(e) => handleArrayInputChange('technologies', e.target.value)}
                  placeholder="React, CSS, JavaScript"
                />
              </div>
              
              <div className="form-row">
                <label>GitHub URL</label>
                <input
                  type="url"
                  value={formData.github || ''}
                  onChange={(e) => handleInputChange('github', e.target.value)}
                />
              </div>
              
              <div className="form-row">
                <label>Live Demo URL</label>
                <input
                  type="url"
                  value={formData.liveDemo || ''}
                  onChange={(e) => handleInputChange('liveDemo', e.target.value)}
                />
              </div>
              
              <div className="form-row">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.featured || false}
                    onChange={(e) => handleInputChange('featured', e.target.checked)}
                  />
                  Featured Project
                </label>
              </div>
            </>
          )}

          {activeTab === 'files' && (
            <>
              <div className="form-row">
                <label>File Type</label>
                <input
                  type="text"
                  value={formData.fileType || ''}
                  onChange={(e) => handleInputChange('fileType', e.target.value)}
                  placeholder="pdf, doc, etc."
                />
              </div>
              
              <div className="form-row">
                <label>File URL</label>
                <input
                  type="text"
                  value={formData.fileUrl || ''}
                  onChange={(e) => handleInputChange('fileUrl', e.target.value)}
                  placeholder="/assets/files/document.pdf"
                />
              </div>
              
              <div className="form-row">
                <label>Thumbnail URL</label>
                <input
                  type="text"
                  value={formData.thumbnail || ''}
                  onChange={(e) => handleInputChange('thumbnail', e.target.value)}
                  placeholder="/assets/files/thumbnail.jpg"
                />
              </div>
            </>
          )}

          <div className="form-row">
            <label>Category</label>
            <select
              value={formData.category || ''}
              onChange={(e) => handleInputChange('category', e.target.value)}
            >
              <option value="">Select Category</option>
              {portfolioData.categories[activeTab]?.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <label>Image/File Path</label>
            <input
              type="text"
              value={formData.image || formData.fileUrl || ''}
              onChange={(e) => handleInputChange(activeTab === 'files' ? 'fileUrl' : 'image', e.target.value)}
              placeholder={`/assets/${activeTab}/your-file.jpg`}
            />
          </div>

          <div className="form-actions">
            <button className="btn btn-primary" onClick={handleSave}>
              Save Changes
            </button>
            <button className="btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AdminAuth>
      <div className="content-manager">
        <h2>Portfolio Content Manager</h2>
        
        <div className="manager-tabs">
          {['projects', 'files', 'photos'].map(tab => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="content-list">
          <div className="list-header">
            <h3>Manage {activeTab}</h3>
            <p className="list-info">
              Current items: {getItems().length} | 
              Categories: {portfolioData.categories[activeTab]?.join(', ') || 'None'}
            </p>
            <div className="list-actions">
              <button 
                className="btn btn-primary add-files-btn"
                onClick={() => setShowFileBrowser(!showFileBrowser)}
              >
                {showFileBrowser ? 'Cancel' : `Add ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
              </button>
            </div>
          </div>

          {showFileBrowser && (
            <div className="file-upload-section">
              <h4>Upload Files</h4>
              <FileBrowser
                onFileSelect={handleFileSelect}
                acceptedTypes={
                  activeTab === 'projects' ? "image/*" :
                  activeTab === 'files' ? ".pdf,.doc,.docx,image/*" :
                  "image/*"
                }
                multiple={true}
              />
              {selectedFiles.length > 0 && (
                <div className="upload-actions">
                  <button 
                    className="btn btn-primary upload-btn"
                    onClick={handleFileUpload}
                  >
                    Generate Code for {selectedFiles.length} File{selectedFiles.length !== 1 ? 's' : ''}
                  </button>
                  <p className="upload-note">
                    This will generate code to add these files to your portfolio data
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="items-grid">
            {getItems().map(item => (
              <div key={item.id} className="content-item">
                <div className="item-preview">
                  <div className="image-container">
                    {(imageLoadStates[item.id] === 'error' && !item.image && !item.thumbnail) ? (
                      <div className="no-image-placeholder">
                        <span>📷</span>
                        <small>No Image</small>
                      </div>
                    ) : (
                      <>
                        <img 
                          src={item.image || item.thumbnail || '/assets/placeholder.jpg'} 
                          alt={item.title}
                          onLoad={() => handleImageLoad(item.id)}
                          onError={(e) => handleImageError(item.id, e)}
                          loading="lazy"
                          className={`item-image ${imageLoadStates[item.id] === 'loaded' ? 'loaded' : ''}`}
                        />
                        {imageLoadStates[item.id] !== 'loaded' && imageLoadStates[item.id] !== 'error' && (
                          <div className="image-placeholder">
                            <div className="loading-placeholder"></div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {item.featured && <span className="featured-indicator">Featured</span>}
                </div>
                
                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p className="item-description">{item.description}</p>
                  <div className="item-meta">
                    <span className="category-badge">{item.category}</span>
                    {item.technologies && (
                      <span className="tech-count">{item.technologies.length} techs</span>
                    )}
                  </div>
                </div>
                
                <div className="item-actions">
                  <button 
                    className="btn-small btn-primary"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-small btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {getItems().length === 0 && (
            <div className="empty-state">
              <p>No {activeTab} found.</p>
              <p>Add items by editing <code>src/data/portfolioData.js</code></p>
            </div>
          )}
        </div>

        <div className="manager-instructions">
          <h4>Content Management Instructions</h4>
          <div className="instruction-grid">
            <div className="instruction-card">
              <h5>🔧 Edit Items</h5>
              <p>Click "Edit" to modify existing content. Changes will show you the exact code to update in portfolioData.js</p>
            </div>
            <div className="instruction-card">
              <h5>📁 Add Files</h5>
              <p>Upload images to <code>public/assets/{activeTab}/</code> then add entries to portfolioData.js</p>
            </div>
            <div className="instruction-card">
              <h5>🗑️ Delete Items</h5>
              <p>Click "Delete" for instructions on removing items from the data file</p>
            </div>
            <div className="instruction-card">
              <h5>🔄 Apply Changes</h5>
              <p>After editing portfolioData.js, restart the development server to see changes</p>
            </div>
          </div>
        </div>

        {renderEditForm()}
      </div>
    </AdminAuth>
  );
};

export default ContentManager;