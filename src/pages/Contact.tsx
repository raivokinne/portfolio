import { useState } from "react";
import { motion } from "framer-motion";
import AppLayout from "@/layouts/AppLayout";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  Sparkles,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "raivo@example.com",
      href: "mailto:raivo@example.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Riga, Latvia",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/raivokinne",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
    },
  ];

  return (
    <AppLayout>
      {/* Animated background gradient - matching About page */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute top-20 right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="min-h-screen w-full py-24 px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header - matching About page */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 mb-4"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Let's connect
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from
              you.
            </p>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Send a Message
              </h2>
            </motion.div>
            <motion.div
              className="p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-white/50 shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border-2 focus:border-purple-500 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-2 focus:border-purple-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="border-2 focus:border-purple-500 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about your project or question..."
                    className="border-2 focus:border-purple-500 transition-all resize-none"
                    required
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg transition-all"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
