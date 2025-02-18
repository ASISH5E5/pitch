import { JSXElementConstructor, Key, ReactElement, ReactNode, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaStar, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4; // Changed to 4 for 2x2 grid

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const projectColors = [
    'bg-emerald-50 hover:bg-emerald-100',
    'bg-sky-50 hover:bg-sky-100',
    'bg-purple-50 hover:bg-purple-100',
    'bg-amber-50 hover:bg-amber-100'
  ];

  // Button colors for each project
  const buttonColors = [
    'bg-emerald-400 hover:bg-emerald-500',
    'bg-sky-400 hover:bg-sky-500',
    'bg-purple-400 hover:bg-purple-500',
    'bg-amber-400 hover:bg-amber-500'
  ];

  const projects = [
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 3,
      title: 'Agri Stock Pro2',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 1,
      title: 'Agri Stock Pro2',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },

    // Other projects...
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Calculate the displayed projects based on the current page
  const displayedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );
 
  const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;
    
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl bg-white rounded-xl shadow-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary">Problem</h3>
                <p className="mt-1">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Solution</h3>
                <p className="mt-1">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Technologies</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Key | null | undefined) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button 
                  variant="outline"
                  onClick={() => window.open(project.demoLink, '_blank')}
                  className="flex items-center gap-2"
                >
                  <FaExternalLinkAlt /> Live Demo
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open(project.githubLink, '_blank')}
                  className="flex items-center gap-2"
                >
                  <FaGithub /> View Code
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <>
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work showcasing problem-solving skills and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              ref={ref}
              className="transform transition-all duration-300 hover:scale-105"
              style={{
                opacity: inView ? 1 : 0,
                transform: `translateY(${inView ? 0 : '20px'})`,
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
              }}
            >
              <Card className={`h-full overflow-hidden shadow-lg hover:shadow-xl ${projectColors[index % projectColors.length]}`}>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {project.category === 'featured' && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    variant="default"
                    className={`w-full shadow-lg text-white ${buttonColors[index % buttonColors.length]}`}
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Prev
          </Button>
          
          {/* Pagination numbers */}
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index ? "default" : "default"}
                onClick={() => setCurrentPage(index)}
                className={`w-8 h-8 p-0 ${
                  currentPage === index ? 'bg-primary  text-blue-500 border border-blue-500' : ''
                }`}
              >
                {index + 1}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
    

    
    </>
  );
};

export default Projects;
