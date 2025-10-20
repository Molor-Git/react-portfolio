// Portfolio Data Configuration
// Edit this file to update your portfolio content without touching the code

export const portfolioData = {
  // Main portfolio settings
  settings: {
    title: "My Recent Work",
    subtitle: "Portfolio",
    displayTypes: ["projects", "files", "photos"], // What types to show
    itemsPerPage: 6, // How many items to show at once
  },

  // Projects - Your development/cybersecurity projects
  projects: [
    {
      id: "proj-1",
      type: "project",
      title: "Cybersecurity Risk Assessment Tool",
      description: "Python-based tool for automated vulnerability scanning and risk assessment",
      image: "/assets/projects/risk-assessment.jpg", // Add your image to public/assets/projects/
      technologies: ["Python", "Nmap", "SQL", "Cybersecurity"],
      github: "https://github.com/your-username/risk-assessment-tool",
      liveDemo: "https://your-demo-link.com",
      category: "cybersecurity",
      featured: true,
      dateCompleted: "2024-10-01"
    },
    {
      id: "proj-2", 
      type: "project",
      title: "Network Security Monitor",
      description: "Real-time network traffic analysis and intrusion detection system",
      image: "/assets/projects/network-monitor.jpg",
      technologies: ["Python", "Wireshark", "Linux", "IDS"],
      github: "https://github.com/your-username/network-monitor",
      liveDemo: null,
      category: "cybersecurity",
      featured: true,
      dateCompleted: "2024-09-15"
    },
    {
      id: "proj-3",
      type: "project", 
      title: "Portfolio Website",
      description: "React-based portfolio website with dark/light theme toggle",
      image: "/assets/projects/portfolio.jpg",
      technologies: ["React", "CSS", "JavaScript", "GitHub Pages"],
      github: "https://github.com/your-username/react-portfolio",
      liveDemo: "https://your-portfolio.github.io",
      category: "web-development",
      featured: false,
      dateCompleted: "2024-10-19"
    }
  ],

  // Files - Documents, reports, certifications
  files: [
    {
      id: "file-1",
      type: "file",
      title: "Google Cybersecurity Certificate",
      description: "Professional certificate in cybersecurity fundamentals",
      fileType: "pdf",
      fileUrl: "/assets/files/google-cybersecurity-cert.pdf", // Add your files to public/assets/files/
      thumbnail: "/assets/files/cert-thumbnail.jpg",
      category: "certification",
      dateAdded: "2024-08-20"
    },
    {
      id: "file-2",
      type: "file", 
      title: "Vulnerability Assessment Report",
      description: "Sample vulnerability assessment report for a simulated network",
      fileType: "pdf",
      fileUrl: "/assets/files/vuln-assessment-report.pdf",
      thumbnail: "/assets/files/report-thumbnail.jpg", 
      category: "report",
      dateAdded: "2024-09-10"
    },
    {
      id: "file-3",
      type: "file",
      title: "Resume - Cybersecurity Analyst",
      description: "Current resume focusing on cybersecurity skills and experience",
      fileType: "pdf", 
      fileUrl: "/assets/files/resume-cybersecurity.pdf",
      thumbnail: "/assets/files/resume-thumbnail.jpg",
      category: "resume",
      dateAdded: "2024-10-15"
    }
  ],

  // Photos - Screenshots, diagrams, infographics
  photos: [
    {
      id: "photo-1",
      type: "photo",
      title: "Network Topology Diagram", 
      description: "Visual representation of a secure network architecture",
      image: "/assets/photos/network-topology.jpg", // Add your photos to public/assets/photos/
      category: "diagram",
      dateAdded: "2024-09-05"
    },
    {
      id: "photo-2",
      type: "photo",
      title: "Security Dashboard Screenshot",
      description: "Real-time security monitoring dashboard interface",
      image: "/assets/photos/security-dashboard.jpg",
      category: "screenshot", 
      dateAdded: "2024-09-20"
    },
    {
      id: "photo-3",
      type: "photo",
      title: "Cybersecurity Framework Infographic",
      description: "Visual guide to NIST Cybersecurity Framework implementation",
      image: "/assets/photos/nist-framework.jpg",
      category: "infographic",
      dateAdded: "2024-10-01"
    }
  ],

  // Categories for filtering
  categories: {
    projects: ["cybersecurity", "web-development", "automation"],
    files: ["certification", "report", "resume", "documentation"], 
    photos: ["diagram", "screenshot", "infographic", "presentation"]
  }
};

export default portfolioData;