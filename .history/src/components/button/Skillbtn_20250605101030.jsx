import { FaHtml5 } from "react-icons/fa6";
function Skillbtn() {
  return (
    <div>
      <div className="flex  p-4 gap-2 flex-col">
        <FaHtml5 className="text-orange-500 text-5xl shadow-2xl shadow-amber-600" />
        <span className="text-md font-bold">HTML</span>
      </div>
    </div>
  );
}

export default Skillbtn;
