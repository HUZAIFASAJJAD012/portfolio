import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    image: "/team/alice.jpg"
  },
  {
    name: "Bob Smith",
    role: "Backend Developer",
    image: "/team/bob.jpg"
  },
  {
    name: "Carol Lee",
    role: "UI/UX Designer",
    image: "/team/carol.jpg"
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    image: "/team/david.jpg"
  }
];

const mainMember = {
  name: "Project Lead",
  role: "Team Lead",
  image: "/team/lead.jpg"
};

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 gradient-text">Meet the Team</h2>
        <div className="flex flex-col items-center mb-12">
          <img
            src={mainMember.image}
            alt={mainMember.name}
            className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-1">{mainMember.name}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{mainMember.role}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-primary shadow mb-2"
              />
              <h4 className="font-medium">{member.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
