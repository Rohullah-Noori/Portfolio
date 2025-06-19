// Make sure your bundler (e.g., Webpack) supports importing PDF files. You may need a file-loader or asset module configuration.
import Cv from "../../../public/cv.pdf";
function DownloadCV() {
  return (
    <a href={Cv} download>
      Download CV
    </a>
  );
}

export default DownloadCV;
