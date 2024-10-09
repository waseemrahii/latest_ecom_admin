import React, { useState } from 'react';
import './Addon.css'
const AddonUpload = () => {
    // State to manage the file and progress
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = () => {
        if (!file) return;

        // Simulate file upload progress
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 200);
    };

    return (
        <div className="card-body pl-md-10 snipcss0-0-0-1 snipcss-EdJEL">
            <h4 className="mb-3 text-capitalize d-flex align-items-center snipcss0-1-1-2">Upload Addons</h4>
            <form encType="multipart/form-data" id="addon-upload-form" className="snipcss0-1-1-3">
                <input type="hidden" name="_token" value="NUpqhZtm7pRjhaqQhQPJVPmT5ShZIbb5yd6KyYU7" autoComplete="off" className="snipcss0-2-3-4" />
                <div className="row g-3 snipcss0-2-3-5">
                    <div className="col-sm-6 col-lg-5 col-xl-4 col-xxl-3 snipcss0-3-5-6">
                        <div className="uploadDnD snipcss0-4-6-7">
                            <div className="form-group inputDnD input_image input_image_edit snipcss0-5-7-8" data-title="Drag &amp; drop file or browse file">
                                <input 
                                    type="file" 
                                    name="file_upload" 
                                    className="form-control-file text--primary font-weight-bold image-input snipcss0-6-8-9" 
                                    id="input-file" 
                                    accept=".zip" 
                                    onChange={handleFileChange} 
                                />
                            </div>
                        </div>
                        <div className={`mt-5 card px-3 py-2 ${!file ? 'd--none' : ''} snipcss0-4-6-10`} id="progress-bar">
                            <div className="d-flex flex-wrap align-items-center gap-3 snipcss0-5-10-11">
                                <div className="snipcss0-6-11-12">
                                    <img width="24" src="https://6valley.6amtech.com/public/assets/back-end/img/zip.png" alt="" className="snipcss0-7-12-13" />
                                </div>
                                <div className="flex-grow-1 text-start snipcss0-6-11-14">
                                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 snipcss0-7-14-15">
                                        <span id="name_of_file" className="text-truncate fz-12 snipcss0-8-15-16">{file ? file.name : ''}</span>
                                        <span className="text-muted fz-12 snipcss0-8-15-17" id="progress-label">{progress}%</span>
                                    </div>
                                    <progress id="uploadProgress" className="w-100 snipcss0-7-14-18" value={progress} max="100"></progress>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-5 col-xl-4 col-xxl-9 snipcss0-3-5-19">
                        <div className="pl-sm-5 snipcss0-4-19-20">
                            <h5 className="mb-3 d-flex snipcss0-5-20-21">Instructions</h5>
                            <ul className="pl-3 d-flex flex-column gap-2 instructions-list snipcss0-5-20-22">
                                <li className="snipcss0-6-22-23">Please make sure, your server PHP "Upload max filesize" value is greater or equal to 20MB. Current value is 2MB.</li>
                                <li className="snipcss0-6-22-24">Please make sure, your server PHP "Post max size" value is greater or equal to 20MB. Current value is 8MB.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 snipcss0-3-5-25">
                        <div className="d-flex justify-content-end snipcss0-4-25-26">
                            <button type="button" className="btn btn--primary px-4 call-demo snipcss0-5-26-27" id="upload-theme" onClick={handleUpload}>Upload</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddonUpload;
