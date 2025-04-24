"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Palette, Database, Globe, Layers, Terminal, Figma, Smartphone, Server } from "lucide-react"

export default function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skillCategories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: "HTML5/CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 75 },
      ],
    },
    {
      id: "backend",
      label: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Django", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 75 },
      ],
    },
    {
      id: "database",
      label: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "Redis", level: 70 },
        { name: "Prisma", level: 75 },
      ],
    },
    {
      id: "design",
      label: "Design",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "Illustrator", level: 70 },
        { name: "Design Systems", level: 85 },
      ],
    },
    {
      id: "tools",
      label: "Tools",
      icon: <Terminal className="h-5 w-5" />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "Netlify", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've developed a diverse set of skills across both development and design, allowing me to create
            comprehensive solutions from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                      {category.icon}
                      {category.label} Skills
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          <Card className="group hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Writing maintainable, efficient, and well-documented code.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Full Stack</h3>
              <p className="text-sm text-muted-foreground">End-to-end development from frontend to backend systems.</p>
            </CardContent>
          </Card>

          <Card className="group hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Figma className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">UI/UX Design</h3>
              <p className="text-sm text-muted-foreground">
                Creating intuitive and visually appealing user interfaces.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:border-primary transition-colors">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Responsive</h3>
              <p className="text-sm text-muted-foreground">
                Building applications that work flawlessly across all devices.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
