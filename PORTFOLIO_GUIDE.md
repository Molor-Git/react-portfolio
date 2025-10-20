# Portfolio Content Management Guide

## How to Add and Manage Your Portfolio Content

Your portfolio now supports three types of content: **Projects**, **Files**, and **Photos**. Here's how to manage them:

## 📁 File Structure

```
public/assets/
├── projects/     # Project screenshots and images
├── files/        # PDFs, documents, certifications
└── photos/       # Diagrams, infographics, screenshots
```

## 🔧 Adding New Content

### 1. Edit Portfolio Data
Open `src/data/portfolioData.js` and add your content to the appropriate arrays:

#### Projects
```javascript
{
  id: "proj-4",
  type: "project",
  title: "Your Project Name",
  description: "Brief description of your project",
  image: "/assets/projects/your-image.jpg",
  technologies: ["React", "Node.js", "CSS"],
  github: "https://github.com/your-username/repo",
  liveDemo: "https://your-demo.com",
  category: "web-development", // or "cybersecurity", "automation"
  featured: true, // Shows "Featured" badge
  dateCompleted: "2024-10-19"
}
```

#### Files
```javascript
{
  id: "file-4",
  type: "file",
  title: "Your Document Title",
  description: "What this document contains",
  fileType: "pdf", // pdf, doc, etc.
  fileUrl: "/assets/files/your-document.pdf",
  thumbnail: "/assets/files/your-thumbnail.jpg",
  category: "certification", // or "report", "resume", "documentation"
  dateAdded: "2024-10-19"
}
```

#### Photos
```javascript
{
  id: "photo-4",
  type: "photo",
  title: "Your Photo Title",
  description: "What this image shows",
  image: "/assets/photos/your-photo.jpg",
  category: "diagram", // or "screenshot", "infographic", "presentation"
  dateAdded: "2024-10-19"
}
```

### 2. Add Your Files

1. **Projects**: Add project screenshots to `public/assets/projects/`
2. **Files**: Add PDFs and thumbnails to `public/assets/files/`
3. **Photos**: Add images to `public/assets/photos/`

### 3. Update Categories (Optional)

If you want to add new categories, edit the `categories` section in `portfolioData.js`:

```javascript
categories: {
  projects: ["cybersecurity", "web-development", "automation", "your-new-category"],
  files: ["certification", "report", "resume", "documentation", "your-new-category"],
  photos: ["diagram", "screenshot", "infographic", "presentation", "your-new-category"]
}
```

## 🎨 Customization

### Change Display Settings
Edit the `settings` object in `portfolioData.js`:

```javascript
settings: {
  title: "My Recent Work",
  subtitle: "Portfolio", 
  displayTypes: ["projects", "files", "photos"], // What tabs to show
  itemsPerPage: 6, // Items per page (future feature)
}
```

### Hide Content Types
To hide files or photos, remove them from `displayTypes`:

```javascript
displayTypes: ["projects"], // Only shows projects
```

## 🔄 Features

- **Type Switching**: Toggle between Projects, Files, and Photos
- **Category Filtering**: Filter content by category within each type
- **File Downloads**: Download files directly from the portfolio
- **Photo Viewer**: Click photos to view full size
- **Featured Projects**: Mark important projects with a "Featured" badge
- **Technology Tags**: Show technologies used in projects
- **Responsive Design**: Works on all devices

## 🚀 Tips

1. **Image Sizes**: Use consistent image sizes for better layout (recommended: 400x300px)
2. **File Thumbnails**: Create thumbnail images for PDFs and documents
3. **Descriptions**: Keep descriptions concise but informative
4. **Categories**: Use consistent category names for better filtering
5. **Featured Items**: Only mark your best work as "featured"

## 📝 Example Files to Add

### Cybersecurity Portfolio
- **Projects**: Vulnerability scanners, network monitoring tools, security dashboards
- **Files**: Certifications (CompTIA, CISSP), vulnerability assessment reports, resumes
- **Photos**: Network diagrams, security architecture diagrams, dashboard screenshots

### Web Development Portfolio  
- **Projects**: React apps, full-stack applications, landing pages
- **Files**: Project documentation, API specifications, resumes
- **Photos**: UI mockups, database schemas, application screenshots

## 🔧 Troubleshooting

- **Images not showing**: Check file paths and ensure files are in the correct `public/assets/` folders
- **Broken links**: Verify GitHub and demo URLs are correct
- **Categories not filtering**: Ensure category names match exactly between items and the categories object
- **Build errors**: Check for syntax errors in `portfolioData.js` (missing commas, quotes, etc.)

Remember: After making changes to `portfolioData.js`, restart your development server to see updates!