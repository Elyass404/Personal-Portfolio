"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function DesignWork() {
  const [selectedImage, setSelectedImage] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const categories = [
    { id: "all", label: "All Work" },
    { id: "ui", label: "UI Design" },
    { id: "web", label: "Web Design" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "branding", label: "Branding" },
  ]

  const designWorks = [
    {
      id: 1,
      title: "Finance Dashboard UI",
      category: "ui",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Fitness App UI",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 4,
      title: "Tech Startup Branding",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 5,
      title: "Social Media App",
      category: "mobile",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section id="design" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Work</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my design projects showcasing UI/UX design, web design, mobile apps, and branding work.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {designWorks
                    .filter((work) => category.id === "all" || work.category === category.id)
                    .map((work, index) => (
                      <motion.div
                        key={work.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Dialog>
                          <DialogTrigger asChild>
                            <Card className="overflow-hidden cursor-pointer group">
                              <div className="relative overflow-hidden">
                                <Image
                                  src={work.image || "/placeholder.svg"}
                                  alt={work.title}
                                  width={800}
                                  height={600}
                                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <span className="text-white font-medium">View Project</span>
                                </div>
                              </div>
                              <CardContent className="p-4">
                                <h3 className="font-medium">{work.title}</h3>
                              </CardContent>
                            </Card>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-0">
                            <div className="relative">
                              <Image
                                src={work.image || "/placeholder.svg"}
                                alt={work.title}
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                              />
                              <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="p-6">
                              <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                              <p className="text-muted-foreground">
                                A detailed description of the {work.title} project would go here, explaining the design
                                process, challenges, and solutions.
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
