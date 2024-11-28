

type Skill = {
  name: string;
  logo: string;
};

type SkillCardProps = {
  title: string;
  skills: Skill[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
          >
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="w-12 h-12 object-contain mb-2 dark:invert-[.85]"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;