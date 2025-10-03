import { motion } from "framer-motion";
import { useState } from "react";
import AppLayout from "@/layouts/AppLayout";
import { Code, Lightbulb, Rocket, GraduationCap } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SkillItem {
  name: string;
  level: number;
  description: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export default function About() {
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  const skills: SkillGroup[] = [
    {
      category: "Frontend",
      items: [
        {
          name: "React",
          level: 85,
          description: "Building complex SPAs with hooks and context",
        },
        {
          name: "TypeScript",
          level: 80,
          description: "Type-safe development with advanced types",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          description: "Rapid UI development with utility-first CSS",
        },
        {
          name: "HTML/CSS",
          level: 95,
          description: "Semantic markup and modern CSS features",
        },
        {
          name: "Htmx",
          level: 70,
          description: "Hypermedia-driven applications",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Golang",
          level: 75,
          description: "Concurrent programming and web services",
        },
        {
          name: "Express.js",
          level: 80,
          description: "RESTful APIs and middleware",
        },
        {
          name: "PHP",
          level: 70,
          description: "Server-side scripting and web development",
        },
        {
          name: "Laravel",
          level: 65,
          description: "MVC framework and Eloquent ORM",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "Sqlite",
          level: 80,
          description: "Embedded database for local applications",
        },
        {
          name: "PostgreSQL",
          level: 75,
          description: "Advanced queries and relationships",
        },
        {
          name: "MySQL",
          level: 70,
          description: "Relational database design and optimization",
        },
      ],
    },
    {
      category: "Tools",
      items: [
        {
          name: "Tmux",
          level: 85,
          description: "Terminal multiplexer for workflow efficiency",
        },
        { name: "Zed", level: 70, description: "Modern code editor" },
        {
          name: "Neovim",
          level: 90,
          description: "Customized development environment",
        },
        {
          name: "Docker",
          level: 50,
          description: "Containerization and deployment",
        },
        {
          name: "Git",
          level: 70,
          description: "Version control and collaboration",
        },
      ],
    },
    {
      category: "Low-Level",
      items: [
        {
          name: "C++",
          level: 40,
          description: "Systems programming and performance optimization",
        },
        {
          name: "Rust",
          level: 50,
          description: "Memory-safe systems programming",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const getLevelLabel = (level: number) => {
    if (level >= 80) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Learning";
  };

  return (
    <AppLayout>
      <div className="fixed inset-0 -z-10 geometric-bg opacity-40" />

      <motion.div
        className="fixed top-32 right-16 w-32 h-32 border-2 border-foreground/10 -z-10"
        animate={{
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        }}
      />
      <motion.div
        className="fixed bottom-32 left-16 w-24 h-24 border-2 border-foreground/10 -z-10"
        animate={{
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        }}
      />

      <div className="min-h-screen w-full py-24 px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-background shadow-sharp"
            >
              <div className="w-2 h-2 bg-foreground animate-pulse" />
              <span className="text-sm font-mono uppercase tracking-wider">
                Get to know me
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              <span className="inline-block border-8 border-foreground px-8 py-4 shadow-sharp-lg">
                ABOUT ME
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: -4, y: -4 }}
            >
              <div className="p-3 bg-foreground text-background border-2 border-foreground shadow-sharp">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b-4 border-foreground pb-1">
                My Journey
              </h2>
            </motion.div>
            <motion.div
              className="space-y-4 text-foreground leading-relaxed p-8 bg-background border-4 border-foreground shadow-sharp-lg"
              whileHover={{ x: -4, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>
                I'm currently pursuing my studies as a Programming Technician at
                Vidzemes Technology and Design Technical School, where I've
                developed a strong foundation in software development and a
                particular passion for web technologies.
              </p>
              <p>
                What started as curiosity about how websites work has evolved
                into a genuine love for creating digital experiences. I enjoy
                the entire process of building applications—from planning and
                design to implementation and deployment. Each project teaches me
                something new and pushes me to improve my craft.
              </p>
              <p>
                Beyond the classroom, I actively work on personal projects and
                continuously explore new frameworks and technologies. I believe
                the best way to learn is by building real things and solving
                actual problems.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: -4, y: -4 }}
            >
              <div className="p-3 bg-foreground text-background border-2 border-foreground shadow-sharp">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b-4 border-foreground pb-1">
                What I Do
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="group p-8 bg-background border-4 border-foreground space-y-4 hover:shadow-sharp-lg transition-all relative overflow-hidden"
                whileHover={{ x: -4, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-foreground/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Lightbulb className="w-10 h-10" />
                </motion.div>
                <h3 className="text-xl font-bold font-mono uppercase tracking-wider relative z-10 border-b-2 border-foreground pb-2">
                  Web Development
                </h3>
                <p className="relative z-10">
                  Building responsive and user-friendly web applications using
                  modern frameworks like React. I focus on creating clean,
                  maintainable code and delightful user experiences.
                </p>
              </motion.div>
              <motion.div
                className="group p-8 bg-background border-4 border-foreground space-y-4 hover:shadow-sharp-lg transition-all relative overflow-hidden"
                whileHover={{ x: -4, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-foreground/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Rocket className="w-10 h-10" />
                </motion.div>
                <h3 className="text-xl font-bold font-mono uppercase tracking-wider relative z-10 border-b-2 border-foreground pb-2">
                  Problem Solving
                </h3>
                <p className="relative z-10">
                  Tackling challenges with creative solutions and efficient
                  algorithms. I enjoy breaking down complex problems into
                  manageable pieces and finding elegant ways to solve them.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b-4 border-foreground pb-2 inline-block">
              Technical Skills
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              Click on any skill to see proficiency details
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="group p-6 bg-background border-4 border-foreground space-y-4 hover:shadow-sharp-lg transition-all relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: -4, y: -4 }}
                >
                  <div className="absolute inset-0 bg-foreground/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <h3 className="text-lg font-bold font-mono uppercase tracking-wider flex items-center gap-2 relative z-10 border-l-4 border-foreground pl-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {skillGroup.items.map((skill) => (
                      <Popover
                        key={skill.name}
                        open={openSkill === skill.name}
                        onOpenChange={(open) =>
                          setOpenSkill(open ? skill.name : null)
                        }
                      >
                        <PopoverTrigger asChild>
                          <motion.button
                            className="px-3 py-1.5 bg-background border-2 border-foreground text-sm font-mono hover:bg-foreground hover:text-background transition-all cursor-pointer"
                            whileHover={{ x: -2, y: -2 }}
                            whileTap={{ x: 0, y: 0 }}
                          >
                            {skill.name}
                          </motion.button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80 border-4 border-foreground shadow-sharp-lg p-6 space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-mono font-bold text-lg border-b-2 border-foreground pb-2">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {skill.description}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-mono font-bold">
                                Proficiency
                              </span>
                              <span className="text-sm font-mono px-2 py-1 bg-foreground text-background">
                                {getLevelLabel(skill.level)}
                              </span>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 bg-foreground text-background border-4 border-foreground space-y-4 shadow-sharp-lg relative overflow-hidden"
            whileHover={{ x: -4, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-bold font-mono uppercase tracking-wider pb-2 border-b-2 border-background">
              Currently Exploring
            </h2>
            <p className="leading-relaxed">
              I'm always learning and expanding my skillset. Right now, I'm
              diving deeper into low level programming, exploring compilers and
              learning more about system design and architecture. The tech world
              moves fast, and I love keeping up with the latest developments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
