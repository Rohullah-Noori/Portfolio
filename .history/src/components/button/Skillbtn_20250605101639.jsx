import { FaHtml5 } from "react-icons/fa6";
function Skillbtn({ icon,title}) {
    
  return (
    <div>
      <div className="flex  p-4 gap-2 flex-col">
        <{icon} className="text-orange-500 text-5xl text-shadow-2xs " />
        <span className="text-md font-bold">{title}</span>
      </div>
    </div>
  );
}a

export default Skillbtn;
