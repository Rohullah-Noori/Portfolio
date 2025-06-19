import Cv from "./cv.pdf";
function DownloadCV() {
  return (
    <a
      href={Cv}
      download
      className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
    ></a>
  );
}

export default DownloadCV;
