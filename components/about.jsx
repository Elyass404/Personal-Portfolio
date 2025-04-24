"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate fullstack developer and designer with a keen eye for detail and a love for creating
            seamless user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Profile"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a fullstack developer and designer with over 5 years of experience creating digital products that are
              both beautiful and functional. I believe in the power of thoughtful design and clean code to solve complex
              problems.
            </p>

            <p className="text-muted-foreground mb-6">
              My approach combines technical expertise with design thinking, allowing me to build solutions that not
              only work flawlessly but also provide exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Creative Thinker</Badge>
              <Badge variant="secondary">Detail Oriented</Badge>
              <Badge variant="secondary">User Focused</Badge>
              <Badge variant="secondary">Continuous Learner</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-4xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
