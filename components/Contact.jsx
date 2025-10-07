'use client'
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  useEffect(() => {
    emailjs.init("EgRu5EDZ5mty3T2an"); // ✅ তোমার EmailJS Public Key
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        "service_74md3pp", // ✅ তোমার Service ID
        "template_ghfy459", // ✅ তোমার Template ID
        formData
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "✅ বার্তা সফলভাবে পাঠানো হয়েছে!",
      });

      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "❌ বার্তা পাঠাতে ব্যর্থ হয়েছে, আবার চেষ্টা করুন।",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="bg-green-50 py-16 px-6 rounded-3xl max-w-5xl mx-auto my-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-semibold text-center text-green-700 mb-10"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        যোগাযোগ করুন 🌾
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 max-w-md mx-auto"
        variants={staggerContainer}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="আপনার নাম..."
          required
          value={formData.name}
          whileFocus={{ scale: 1.02 }}
          onChange={handleInputChange}
          className="p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <motion.input
          type="email"
          name="email"
          placeholder="আপনার ইমেইল..."
          required
          value={formData.email}
          whileFocus={{ scale: 1.02 }}
          onChange={handleInputChange}
          className="p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <motion.input
          type="number"
          name="number"
          placeholder="আপনার মোবাইল নাম্বার..."
          required
          value={formData.number}
          whileFocus={{ scale: 1.02 }}
          onChange={handleInputChange}
          className="p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <motion.textarea
          name="message"
          placeholder="আপনার বার্তা লিখুন..."
          required
          value={formData.message}
          whileFocus={{ scale: 1.02 }}
          onChange={handleInputChange}
          className="p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={formStatus.submitting}
          className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all"
        >
          {formStatus.submitting ? "পাঠানো হচ্ছে..." : "বার্তা পাঠান"}
        </motion.button>

        {formStatus.message && (
          <motion.div
            className={`text-center mt-4 text-sm ${
              formStatus.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {formStatus.message}
          </motion.div>
        )}
      </motion.form>
    </motion.section>
  );
}
