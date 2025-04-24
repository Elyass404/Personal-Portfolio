"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronRight } from "lucide-react"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "An analytics dashboard for social media managers with data visualization, scheduling, and performance metrics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Real Estate Listing Platform",
      description:
        "A property listing platform with advanced search, map integration, and virtual tours functionality.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Health & Fitness Tracker",
      description:
        "A comprehensive health tracking application with workout plans, nutrition logging, and progress visualization.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "GraphQL", "AWS", "D3.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Learning Management System",
      description:
        "An educational platform with course creation, student management, and interactive learning materials.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Django", "PostgreSQL", "WebRTC"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in both development and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeIn}
            >
              <Card className="overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="outline" className="rounded-full" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Button onClick={loadMore} variant="outline" size="lg" className="group">
              Load More Projects
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
