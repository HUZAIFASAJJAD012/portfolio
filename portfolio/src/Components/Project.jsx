import React from 'react';

const ProjectsSection = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-blue-950 ">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">Our Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-200 sm:mt-4">
            Check out some of our recent work and case studies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <ProjectCard
            image="https://placehold.co/600x400/transparent/FFF"
            title="Website Redesign"
            description="Complete redesign of corporate website with improved UX and modern aesthetics."
            tags={['Web Design', 'UX']}
            colors={['blue', 'green']}
          />

          {/* Project 2 */}
          <ProjectCard
            image="https://placehold.co/600x400/transparent/FFF"
            title="Mobile Application"
            description="Cross-platform mobile app for health tracking with real-time analytics."
            tags={['React Native', 'Health Tech']}
            colors={['purple', 'yellow']}
          />

          {/* Project 3 */}
          <ProjectCard
            image="https://placehold.co/600x400/transparent/FFF"
            title="E-commerce Platform"
            description="Custom e-commerce solution with integrated payment processing and inventory management."
            tags={['E-commerce', 'Payment Gateway']}
            colors={['red', 'indigo']}
          />
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ image, title, description, tags, colors }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden" style={{ backgroundColor: `${colors[0]}-500` }}>
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`rounded-full bg-${colors[index]}-100 px-3 py-1 text-xs font-medium text-${colors[index]}-800`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
          View case study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
