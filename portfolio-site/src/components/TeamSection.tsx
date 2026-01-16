import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  experience?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Saad Mustafa",
    role: "Full Stack Developer",
    image: "/saad.png",
    experience: "2 years"
  },
  {
    name: "Fahad Farman",
    role: "Full Stack Developer",
    image: "/fahad.png",
    experience: "1.5 years"
  },
  {
    name: "Syed Hassam",
    role: "Full Stack Developer",
    image: "/syedhassam.png",
    experience: "1.3 years"
  },
  {
    name: "M Saeed Siddiqui",
    role: "Full Stack Developer",
    image: "/sayeed.png",
    experience: "2 years"
  },
  {
    name: "Ansar Sultan",
    role: "Full Stack Developer",
    image: "/anser.png",
    experience: "2+ years"
  },
  {
    name: "Waleed Khan",
    role: "Backend Developer",
    image: "/project/waleed.png",
    experience: "3+ years"
  },
  {
    name: "Muneeb Bacha",
    role: "Sales Team",
    image: "/muneebbacha.png",
    experience: "3+ years"
  }
];

const mainMember = {
  name: "Mubarak Ali",
  role: "Team Lead",
  image: "/mubarak.png"
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
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-lg mb-3"
              />
              <h4 className="font-medium text-lg">{member.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              {member.experience && (
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{member.experience} experience</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
