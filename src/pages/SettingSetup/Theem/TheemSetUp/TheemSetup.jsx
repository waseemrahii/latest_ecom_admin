import { useState } from "react";
import { BsFileZip } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import "./TheemSetup.css";
// Assuming your image URL for the default theme
const defaultThemeImage =
  "https://6valley.6amtech.com/resources/themes/default/public/addon/default-theme.png";

const TheemSetup = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleUpload = () => {
    // Implement upload functionality
    // Example: Use Axios or fetch to upload the file
    console.log("Uploading file:", file);
  };

  return (
    <div className="content container-fluid snipcss-emeTS">
      <div className="card mb-5">
        <div className="card-body pl-md-10">
          <h4 className="mb-3 text-capitalize d-flex align-items-center mt-xl-2">
            Upload theme
          </h4>
          <form encType="multipart/form-data" id="theme-form">
            <input
              type="hidden"
              name="_token"
              value="NUpqhZtm7pRjhaqQhQPJVPmT5ShZIbb5yd6KyYU7"
              autoComplete="off"
            />
            <div className="row g-3">
              <div className="col-sm-6 col-lg-5 col-xl-5 col-xxl-5">
                <div className="uploadDnD">
                  <div
                    className="form-group inputDnD input_image input_image_edit"
                    data-title="Drag &amp; drop file or browse file"
                  >
                    <input
                      type="file"
                      name="theme_upload"
                      className="form-control-file text--primary font-weight-bold image-input"
                      id="input-file"
                      accept=".zip"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className="mt-5 card px-3 py-2 d--none" id="progress-bar">
                  <div className="d-flex flex-wrap align-items-center gap-3">
                    <div>
                      <BsFileZip size={24} />
                    </div>
                    <div className="flex-grow-1 text-start">
                      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
                        <span id="name_of_file" className="text-truncate fz-12">
                          {file ? file.name : ""}
                        </span>
                        <span className="text-muted fz-12" id="progress-label">
                          {progress}%
                        </span>
                      </div>
                      <progress
                        id="upload-progress"
                        className="w-100"
                        value={progress}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-5 col-xl-5 col-xxl-7">
                <div className="pl-sm-5">
                  <h5 className="mb-3 d-flex">Instructions</h5>
                  <ul className="pl-3 d-flex flex-column gap-2 instructions-list">
                    <li>Maximum file size 50 MB</li>
                    <li>Have to upload zip file</li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    onClick={handleUpload}
                    className="btn py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] px-5"
                    id="upload-theme"
                  >
                    Upload{" "}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card mb-5 p-xl-4">
        <div className="card-body">
          <div className="d-flex justify-content-end mb-4">
            <div className="text-primary d-flex align-items-end gap-3 font-weight-bolder">
              {" "}
              Read Before Change Theme
              <div
                className="ripple-animation"
                data-toggle="modal"
                data-target="#read_Before_Change_ThemeModal"
              >
                <RiArrowRightSLine width="18" height="18" />
              </div>
            </div>
          </div>
          <div className="row g-1 g-sm-2">
            <div className="col-sm-6 col-xxl-4">
              <div className="card theme-card h-100 theme-active">
                <div className="card-header">
                  <h3 className="card-title"> Default Theme </h3>
                  <div className="d-flex gap-2 gap-sm-3 align-items-center">
                    <button className="c1 bg-transparent p-0 border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="24"
                        viewBox="0 0 27 24"
                        fill="none"
                        className="svg replaced-svg"
                      >
                        <path
                          d="M15.7282 0.0917969C12.9635 0.0917969 10.312 1.19006 8.35711 3.14499C6.40218 5.09991 5.30392 7.75136 5.30392 10.516C5.30392 13.2807 6.40218 15.9322 8.35711 17.8871C10.312 19.842 12.9635 20.9403 15.7282 20.9403C18.4928 20.9403 21.1443 19.842 23.0992 17.8871C25.0541 15.9322 26.1524 13.2807 26.1524 10.516C26.1524 7.75136 25.0541 5.09991 23.0992 3.14499C21.1443 1.19006 18.4928 0.0917969 15.7282 0.0917969ZM3.90968 5.06937C2.71834 6.04659 1.75815 7.27547 1.09805 8.66776C0.437949 10.0601 0.0943063 11.5812 0.0917969 13.1221C0.0917969 15.8868 1.19006 18.5382 3.14499 20.4932C5.09991 22.4481 7.75136 23.5463 10.516 23.5463C11.35 23.5463 12.1709 23.4421 12.9657 23.2466C10.6724 22.7385 8.56149 21.5918 6.82846 20.0151C5.58064 19.3475 4.53739 18.3537 3.80995 17.1398C3.08251 15.9259 2.69815 14.5373 2.69786 13.1221C2.69786 12.7312 2.73695 12.3533 2.78907 11.9624C2.73695 11.4803 2.69786 10.9982 2.69786 10.516C2.69786 8.63968 3.11483 6.77634 3.90968 5.06937ZM21.0576 5.40816L22.8948 7.25846L14.4251 15.7282L9.48664 10.7897L11.3369 8.93937L14.4251 12.0406"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-auto p-2 p-sm-3">
                  <div className="aspect-ration-3:2 border border-color-primary-light radius-10">
                    <img
                      className="img-fit radius-10"
                      alt=""
                      src={defaultThemeImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modals and other content */}
        </div>
      </div>
    </div>
  );
};

export default TheemSetup;
