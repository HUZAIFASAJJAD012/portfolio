"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Image import removed (not used) to keep file clean

const products = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Complete white-label e-commerce solution with admin dashboard, inventory management, and payment integration.",
    image: "/products/ecommerce.jpg",
    price: "Starting at $2,999",
    features: [
      "Multi-vendor support",
      "Payment gateway integration",
      "Inventory management",
      "Analytics dashboard",
      "Mobile responsive",
    ],
    status: "Coming Soon",
    link: "#"
  },
  {
    id: 2,
    name: "CRM System",
    description: "Customer relationship management system to streamline your sales, marketing, and customer service operations.",
    image: "/products/crm.jpg",
    price: "Starting at $1,999",
    features: [
      "Contact management",
      "Sales pipeline tracking",
      "Email automation",
      "Reporting & analytics",
      "Team collaboration",
    ],
    status: "Coming Soon",
    link: "#"
  },
  {
    id: 3,
    name: "Learning Management System",
    description: "Full-featured LMS for creating, managing, and delivering online courses with student tracking and assessments.",
    image: "/products/lms.jpg",
    price: "Starting at $3,499",
    features: [
      "Course creation tools",
      "Student enrollment",
      "Progress tracking",
      "Quiz & assignments",
      "Certificate generation",
    ],
    status: "Coming Soon",
    link: "#"
  },
  {
    id: 4,
    name: "Project Management Tool",
    description: "Comprehensive project management solution with task tracking, team collaboration, and time management features.",
    image: "/products/pm.jpg",
    price: "Starting at $1,499",
    features: [
      "Task & project tracking",
      "Gantt charts",
      "Time tracking",
      "Team collaboration",
      "File sharing",
    ],
    status: "Coming Soon",
    link: "#"
  },
];

export default function Products() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Products</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ready-to-use software solutions designed to accelerate your business growth. 
              Get started quickly with our proven products.
            </p>
          </motion.div>

          {/* Products Grid or Coming Soon placeholder */}
          {/** If there are no products or all products are marked as Coming Soon, show a themed placeholder. */}
          {(
            products.length === 0 || products.every((p) => (p.status || '').toLowerCase().includes('coming'))
          ) ? (
            <motion.div variants={itemVariants} className="py-20">
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-primary to-secondary text-white p-10 rounded-2xl shadow-lg text-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Products — Coming Soon</h3>
                  <p className="text-white/90 mb-6">
                    We're preparing an exciting lineup of products. Check back soon or reach out to be notified when we launch.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300"
                >
                  {/* Product Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <span className="text-6xl font-bold text-primary/30">{product.name.charAt(0)}</span>
                    {product.status === "Coming Soon" && (
                      <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">Coming Soon</div>
                    )}
                    {product.status === "Available" && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Available Now</div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>

                    {/* Features List */}
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
                        <p className="text-xl font-bold text-primary">{product.price}</p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${
                          product.status === "Available"
                            ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
                            : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        }`}
                        disabled={product.status !== "Available"}
                      >
                        {product.status === "Available" ? "Learn More" : "Coming Soon"}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                We also provide custom software development services tailored to your specific business needs.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Contact Us for Custom Development
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
