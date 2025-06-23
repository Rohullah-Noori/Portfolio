import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
function Skillbtn({ icon, title }) {
  const IconComponent = {
    html: <FaHtml5 className="text-2xl text-orange-500" />,
    css: <FaCss3Alt className="text-2xl text-blue-500 " />,
    tailwind: <SiTailwindcss className="text-2xl text-cyan-400" />,
    react: <FaReact className="text-2xl text-blue-500" />,
    nextjs: <SiNextdotjs className="text-2xl text-black" />,
  };
  const selectSkill = IconComponent[icon] || (
    <FaHtml5 className="text-2xl text-orange-500" />
  );

  return (
    <div>
      <div className="flex flex-col gap-2 p-1">
        {selectSkill}
        <span className="text-sm font-bold">{title}</span>
      </div>
    </div>
  );
}

export default Skillbtn;
