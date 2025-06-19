import { FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
function Skillbtn({ icon, title }) {
  const IconComponent = {
    html: <FaHtml5 className="text-orange-500 text-2xl" />,
    tailwind: <SiTailwindcss className="text-cyan-400 text-2xl" />,
    react: <FaReact className="text-blue-500 text-2xl" />,
    nextjs: <SiNextdotjs className="text-black text-2xl" />,
  };
  const selectSkill = IconComponent[icon] || (
    <FaHtml5 className="text-orange-500 text-2xl" />
  );

  return (
    <div>
      <div className="flex  p-1 gap-2 flex-col">
        {selectSkill}
        <span className="text-md font-bold">{title}</span>
      </div>
    </div>
  );
}

export default Skillbtn;
