import React, { useState, useEffect } from 'react';
import portfolioData from '../../data/portfolioData';
import './portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeType, setActiveType] = useState('projects');
  const [filteredItems, setFilteredItems] = useState([]);

  // Filter items based on category
  useEffect(() => {
    const getAllItemsForEffect = () => {
      switch (activeType) {
        case 'projects':
          return portfolioData.projects;
        case 'files':
          return portfolioData.files;
        case 'photos':
          return portfolioData.photos;
        default:
          return portfolioData.projects;
      }
    };

    const items = getAllItemsForEffect();
    if (activeFilter === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === activeFilter));
    }
  }, [activeFilter, activeType]);

  // Get categories for current type
  const getCategories = () => {
    return portfolioData.categories[activeType] || [];
  };

  // Handle file downloads
  const handleFileDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Render project item
  const renderProject = (project) => (
    <article key={project.id} className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={project.image} alt={project.title} />
        {project.featured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="portfolio__item-content">
        <h3>{project.title}</h3>
        <p className="portfolio__item-description">{project.description}</p>
        
        {project.technologies && (
          <div className="portfolio__item-tech">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
        
        <div className="portfolio__item-cta">
          {project.github && (
            <a 
              href={project.github} 
              className="btn btn-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {project.liveDemo && (
            <a 
              href={project.liveDemo} 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );

  // Render file item
  const renderFile = (file) => (
    <article key={file.id} className="portfolio__item file-item">
      <div className="portfolio__item-image">
        <img src={file.thumbnail} alt={file.title} />
        <div className="file-type-overlay">
          <span className="file-type">{file.fileType.toUpperCase()}</span>
        </div>
      </div>
      <div className="portfolio__item-content">
        <h3>{file.title}</h3>
        <p className="portfolio__item-description">{file.description}</p>
        
        <div className="portfolio__item-cta">
          <button 
            onClick={() => handleFileDownload(file.fileUrl, file.title)}
            className="btn btn-primary"
          >
            Download {file.fileType.toUpperCase()}
          </button>
          <a 
            href={file.fileUrl} 
            className="btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
    </article>
  );

  // Render photo item
  const renderPhoto = (photo) => (
    <article key={photo.id} className="portfolio__item photo-item">
      <div className="portfolio__item-image">
        <img src={photo.image} alt={photo.title} />
        <div className="photo-overlay">
          <button 
            className="view-full-btn"
            onClick={() => window.open(photo.image, '_blank')}
          >
            View Full Size
          </button>
        </div>
      </div>
      <div className="portfolio__item-content">
        <h3>{photo.title}</h3>
        <p className="portfolio__item-description">{photo.description}</p>
        
        <div className="portfolio__item-meta">
          <span className="category-tag">{photo.category}</span>
          <span className="date-tag">{new Date(photo.dateAdded).toLocaleDateString()}</span>
        </div>
      </div>
    </article>
  );

  return (
    <section id="portfolio">
      <h5>{portfolioData.settings.subtitle}</h5>
      <h2>{portfolioData.settings.title}</h2>

      {/* Type Selector */}
      <div className="portfolio__type-selector">
        {portfolioData.settings.displayTypes.map(type => (
          <button
            key={type}
            className={`type-btn ${activeType === type ? 'active' : ''}`}
            onClick={() => {
              setActiveType(type);
              setActiveFilter('all');
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="portfolio__filters">
        <button
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          All
        </button>
        {getCategories().map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="container portfolio__container">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => {
            switch (item.type) {
              case 'project':
                return renderProject(item);
              case 'file':
                return renderFile(item);
              case 'photo':
                return renderPhoto(item);
              default:
                return renderProject(item);
            }
          })
        ) : (
          <div className="portfolio__empty">
            <p>No {activeType} found for the selected category.</p>
          </div>
        )}
      </div>

      {/* Instructions for adding content */}
      <div className="portfolio__instructions">
        <p>
          <strong>To add content:</strong> Edit <code>src/data/portfolioData.js</code> and add your images to:
        </p>
        <ul>
          <li>Projects: <code>public/assets/projects/</code></li>
          <li>Files: <code>public/assets/files/</code></li>
          <li>Photos: <code>public/assets/photos/</code></li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
