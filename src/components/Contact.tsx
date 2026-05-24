import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { SectionHeading, SectionSubtitle, FadeIn } from "@/components/SectionHeading";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as Record<string, string>;
    const validation = contactSchema.safeParse(data);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validation.error.issues) {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");

    try {
      await fetch("https://getform.io/f/allqxeza", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="min-h-dvh py-32 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <SectionHeading>Contact</SectionHeading>
          <SectionSubtitle>Have a question or want to work together?</SectionSubtitle>
        </div>

        <FadeIn>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={false}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono tracking-wider text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  maxLength={100}
                  className="w-full px-4 py-2.5 bg-background border border-foreground/10 rounded-lg text-sm focus:outline-none focus:border-foreground/40 transition-colors"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 font-mono">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  maxLength={255}
                  className="w-full px-4 py-2.5 bg-background border border-foreground/10 rounded-lg text-sm focus:outline-none focus:border-foreground/40 transition-colors"
                />
                {errors.email && (
                  <p className="text-xs text-red-500 font-mono">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-xs font-mono tracking-wider text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                maxLength={200}
                className="w-full px-4 py-2.5 bg-background border border-foreground/10 rounded-lg text-sm focus:outline-none focus:border-foreground/40 transition-colors"
              />
              {errors.subject && (
                <p className="text-xs text-red-500 font-mono">{errors.subject}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                maxLength={1000}
                className="w-full px-4 py-2.5 bg-background border border-foreground/10 rounded-lg text-sm focus:outline-none focus:border-foreground/40 transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-xs text-red-500 font-mono">{errors.message}</p>
              )}
            </div>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-sm text-green-600 font-mono"
              >
                <CheckCircle2 className="w-4 h-4" />
                Thanks! I'll get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-500 font-mono"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-full text-sm font-mono tracking-wider font-medium shadow-sm hover:shadow-md transition-shadow disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <motion.div
                    className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </FadeIn>
      </div>
    </section>
  );
}
