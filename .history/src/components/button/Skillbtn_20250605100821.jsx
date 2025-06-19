import { FaHtml5 } from "react-icons/fa6";
function Skillbtn() {
  return (
    <div>
      <div className="flex items-center gap-2 flex-col">
        <FaHtml5 className="text-orange-500 text-4xl" />
        <span className="text-medium font-bold">HTML</span>
      </div>
    </div>
  );
}

export default Skillbtn;
