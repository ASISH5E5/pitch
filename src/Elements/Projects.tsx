import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight, Volume2, Pause } from 'lucide-react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import pr1 from '../Images/agristock.jpeg'
import pr2 from '../Images/port2.jpg'
import pr3 from '../Images/resbuild.webp'

const ProjectSpeech = ({ text }: { text: string }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices()
      const preferred = voices.find(v => v.name.includes('Microsoft Connor') && v.lang === 'en-IE')
      setVoice(preferred || voices[0] || null)
    }

    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
  }, [])

  const speak = () => {
    if (!text || !voice) return
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = voice
    utterance.pitch = 1
    utterance.rate = 1
    utterance.onend = () => setIsPlaying(false)
    setIsPlaying(true)
    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
  }

  return isPlaying ? (
    <Button variant="outline" size="sm" onClick={stop} className="rounded-full">
      <Pause size={16} />
    </Button>
  ) : (
    <Button variant="outline" size="sm" onClick={speak} className="rounded-full">
      <Volume2 size={16} />
    </Button>
  )
}

interface Project {
  id: number
  title: string
  technologies: string[]
  image: string
  category: string
  problem: string
  solution: string
  overview: string
  demoLink: string
  githubLink: string
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeIndex, setActiveIndex] = useState(2)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Agri Stock Pro',
      technologies: ['EJS', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: pr1,
      category: 'done',
      problem: 'Farmers needed a better way to manage their agricultural inventory and track stock levels efficiently.',
      solution: 'Developed a comprehensive stock management system with real-time tracking, automated alerts, and detailed reporting.',
      overview: 'Agri Stock Pro is a comprehensive inventory management system for agricultural businesses.',
      demoLink: 'https://link-to-agri-stock',
      githubLink: 'https://github.com/your-username/agri-stock'
    },
    {
      id: 2,
      title: 'Agri Stock Pro 2',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      image: pr2,
      category: 'in-progress',
      problem: 'Farmers needed an updated version with mobile support.',
      solution: 'Implemented a responsive design and mobile app integration for real-time stock updates.',
      overview: 'Agri Stock Pro 2 builds upon the original system with mobile-first design principles.',
      demoLink: 'https://link-to-agri-stock-2',
      githubLink: 'https://github.com/your-username/agri-stock-2'
    },
    {
      id: 3,
      title: 'Agri Stock Pro 3',
      technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
      image: pr3,
      category: 'done',
      problem: 'Agricultural businesses needed advanced analytics capabilities.',
      solution: 'Integrated data visualization and predictive analytics to provide insights on inventory management.',
      overview: 'Agri Stock Pro 3 focuses on data analytics and visualization.',
      demoLink: 'https://link-to-agri-stock-3',
      githubLink: 'https://github.com/your-username/agri-stock-3'
    },
    {
      id: 4,
      title: 'Agri Stock Pro 4',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: pr1, // Using pr1 again, you may want to import more images
      category: 'in-progress',
      problem: 'Existing platform needed significant performance improvements.',
      solution: 'Complete rewrite using modern stack with improved data models and optimized queries.',
      overview: 'Agri Stock Pro 4 represents a complete technical overhaul of the platform.',
      demoLink: 'https://link-to-agri-stock-4',
      githubLink: 'https://github.com/your-username/agri-stock-4'
    },
    {
      id: 5,
      title: 'Agri Stock Pro 5',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: pr2, // Using pr2 again, you may want to import more images
      category: 'done',
      problem: 'Field workers needed offline mobile access to inventory data.',
      solution: 'Created a cross-platform mobile app with offline capabilities and sync when connectivity restored.',
      overview: 'Agri Stock Pro 5 is a dedicated mobile application designed for field workers.',
      demoLink: 'https://link-to-agri-stock-5',
      githubLink: 'https://github.com/your-username/agri-stock-5'
    }
  ]

  const visibleCards = () => {
    const result = []

    for (let i = activeIndex - 1; i <= activeIndex + 1; i++) {
      const index = (i + projects.length) % projects.length
      result.push({ project: projects[index], position: i - activeIndex })
    }

    return result
  }

  return (
    <motion.section className="py-8 min-h-screen dark:bg-gray-900" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4">
        <motion.div className="mb-12 text-center" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-4xl font-bold mb-2 dark:text-white">Projects</h2>
          <p className="max-w-2xl mx-auto dark:text-white">A collection of my recent work showcasing problem-solving skills and technical expertise.</p>
        </motion.div>

        <div className="relative h-96 max-w-6xl mx-auto">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg" onClick={() => setActiveIndex(i => (i > 0 ? i - 1 : projects.length - 1))}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg" onClick={() => setActiveIndex(i => (i + 1) % projects.length)}>
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            {visibleCards().map(({ project, position }, i) => {
              const isActive = position === 0
              return (
                <motion.div
                  key={project.id}
                  className={`absolute ${isActive ? 'max-w-2xl' : 'max-w-xs'} w-full cursor-pointer`}
                  style={{ zIndex: isActive ? 30 : 10, height: isActive ? '25rem' : '20rem' }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: isActive ? 1 : 0.2, x: `${position * 100}%`, y: 0 }}
                  transition={{ duration: 1.0, delay: i * 0.2, type: 'spring', stiffness: 60 }}
                  onClick={() => (isActive ? setSelectedProject(project) : setActiveIndex(projects.findIndex(p => p.id === project.id)))}
                >
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.88 }}
                    transition={{ type: '', stiffness: 300 }}
                  >
                    <Card className="flex h-full shadow-lg rounded-xl overflow-hidden bg-white  dark:bg-gray-900 dark:text-gray-100 ">
                      <motion.div
                        className="w-1/2 h-full"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                      >
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </motion.div>

                      <motion.div
                        className="w-1/2 h-full p-4 flex flex-col justify-between border"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      >
                        <div className='my-auto'>
                          <h3 className="text-2xl font-semibold dark:text-gray-100  ">{project.title}</h3>
                          {isActive && <p className="text-12 text-gray-800 mt-1 dark:text-gray-100 ">{project.solution}</p>}
                         
                            <motion.div
                              className="flex flex-wrap gap-1 mt-2 text-gray-500"
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 0.5, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.4 }}
                            >
                              {project.technologies.slice(0, 2).map(t => (
                                <Badge key={t} variant="secondary" className="text-xs text-black bg-gray-200 rounded-2xl dark:text-gray-800 ">{t}</Badge>
                              ))}
                              {project.technologies.length > 2 && (
                                <Badge variant="secondary" className="text-xs text-black">+{project.technologies.length - 2}</Badge>
                              )}
                               
                         
                        
                            </motion.div>
                             <motion.div
                            className="flex justify-center mt-6 "
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                          >
                            <Button
                              variant="default"
                              size="sm"
                              className="text-xs px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white"
                              onClick={() => setSelectedProject(project)}
                            >
                              View Details
                            </Button>
                          </motion.div>
                            
                          
                        </div>

                       
                      </motion.div>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          {projects.map((_, i) => (
            <button key={i} className={`h-3 rounded-full transition-all ${i === activeIndex ? 'w-6 bg-white' : 'w-3 bg-white'}`} onClick={() => setActiveIndex(i)} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[95%] bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-auto">
            <DialogHeader>
              <div className="flex justify-between items-center">
                <DialogTitle className="text-2xl font-bold dark:text-gray-100">{selectedProject.title}</DialogTitle>
                <ProjectSpeech text={selectedProject.overview}  />
              </div>
            </DialogHeader>
            <div className="mt-4">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <div className="space-y-4">
                <div><h3 className="text-lg dark:text-gray-100 font-semibold">Problem</h3><p className="mt-1 dark:text-gray-100">{selectedProject.problem}</p></div>
                <div><h3 className="text-lg dark:text-gray-100 font-semibold">Solution</h3><p className="mt-1 dark:text-gray-100">{selectedProject.solution}</p></div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-gray-100">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mt-2 dark:text-gray-900">{selectedProject.technologies.map(t => <Badge key={t} variant="secondary" className='bg-gray-100 rounded-xl'>{t}</Badge>)}</div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button variant="outline" onClick={() => window.open(selectedProject.demoLink, '_blank')} className="flex items-center dark:text-gray-100 gap-2"><FaExternalLinkAlt /> Live Demo</Button>
                  <Button variant="outline" onClick={() => window.open(selectedProject.githubLink, '_blank')} className="flex items-center dark:text-gray-100 gap-2"><FaGithub /> View Code</Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </motion.section>
  )
}

export default Projects