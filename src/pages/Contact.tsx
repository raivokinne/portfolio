import { useState } from "react";
import { motion } from "framer-motion";
import AppLayout from "@/layouts/AppLayout";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name cannot be empty" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Subject cannot be empty" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Message cannot be empty" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const validation = contactSchema.safeParse(data);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch("https://getform.io/f/allqxeza", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      setSubmitStatus("success");
      form.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (e) {
      console.log(e);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-background shadow-sharp"
            >
              <div className="w-2 h-2 bg-foreground animate-pulse" />
              <span className="text-sm font-mono uppercase tracking-wider">
                Let's connect
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              <span className="inline-block border-8 border-foreground px-8 py-4 shadow-sharp-lg">
                GET IN TOUCH
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto border-l-4 border-foreground pl-6 text-left">
              Have a question or want to work together? I'd love to hear from
              you.
            </p>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: -4, y: -4 }}
            >
              <div className="p-3 bg-foreground text-background border-2 border-foreground shadow-sharp">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b-4 border-foreground pb-1">
                Send a Message
              </h2>
            </motion.div>
            <motion.div
              className="p-8 bg-background border-4 border-foreground shadow-sharp-lg"
              whileHover={{ x: -4, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-mono uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="border-2 border-foreground focus:ring-0 focus:border-foreground font-mono"
                      maxLength={100}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-mono uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="border-2 border-foreground focus:ring-0 focus:border-foreground font-mono"
                      maxLength={255}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-mono uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="border-2 border-foreground focus:ring-0 focus:border-foreground font-mono"
                    maxLength={200}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive font-mono">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or question..."
                    className="border-2 border-foreground focus:ring-0 focus:border-foreground resize-none font-mono"
                    maxLength={1000}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="p-4 bg-background border-4 border-foreground flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="font-mono uppercase tracking-wider text-sm">
                      Thanks for reaching out! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="p-4 bg-destructive/10 border-4 border-destructive flex items-center gap-3"
                  >
                    <p className="font-mono uppercase tracking-wider text-sm text-destructive">
                      Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ x: -4, y: -4 }}
                  whileTap={{ x: 0, y: 0 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background hover:bg-foreground/90 py-6 text-lg font-mono uppercase tracking-wider border-2 border-foreground shadow-sharp hover:shadow-sharp-lg transition-all"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-background border-t-transparent mr-2"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          style={{
                            clipPath:
                              "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
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
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
