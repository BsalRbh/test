import { Icon } from "@iconify/react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "vscode-icons:file-type-css" },

    { name: "Javascript", icon: "logos:javascript" },
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "devicon:nextjs" },
    { name: "Node.js", icon: "devicon:nodejs" },
    { name: "Tailwindcss", icon: "devicon:tailwindcss" },
    { name: "Git", icon: "devicon:git" },
    { name: "JQuery", icon: "devicon:jquery" },
  ];

  return (
    <div className="text-center py-8">
      <p className="px-5 py-1 bg-[#E5E7EB]  w-fit mx-auto rounded-2xl">
        Skills
      </p>
      <p>The skills, tools, and technologies I am really good at:</p>

      <ul className="flex gap-10 flex-wrap justify-center mt-4 text-center after:content-[''] after:w-16">
        {skills.map((skill) => (
          <li key={skill.name} className="flex flex-col">
            <Icon icon={skill.icon} className="h-16 w-16 mb-1" />
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
