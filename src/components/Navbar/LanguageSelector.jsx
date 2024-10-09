import React from 'react';

const LanguageSelector = () => {
    return (
        <li className="nav-item">
            <div className="hs-unfold">
                <div>
                    <div className="topbar-text dropdown disable-autohide m-1 text-capitalize">
                        <a className="topbar-link dropdown-toggle d-flex align-items-center title-color" href="javascript:" data-toggle="dropdown">
                            <img className="mr-2" width="20" src="https://6valley.6amtech.com/public/assets/front-end/img/flags/en.png" alt="english" />
                            <span className="d-none d-sm-block">english</span>
                            <span className="d-sm-none">en</span>
                        </a>
                        <ul className="dropdown-menu position-absolute">
                            <li className="change-language" data-action="https://6valley.6amtech.com/change-language" data-language-code="en">
                                <a className="dropdown-item py-1 active" href="javascript:">
                                    <img className="mr-2" width="20" src="https://6valley.6amtech.com/public/assets/front-end/img/flags/en.png" alt="english" />
                                    <span className="text-capitalize">english</span>
                                </a>
                            </li>
                            <li className="change-language" data-action="https://6valley.6amtech.com/change-language" data-language-code="sa">
                                <a className="dropdown-item py-1 :" href="javascript:">
                                    <img className="mr-2" width="20" src="https://6valley.6amtech.com/public/assets/front-end/img/flags/sa.png" alt="Arabic" />
                                    <span className="text-capitalize">Arabic</span>
                                </a>
                            </li>
                            <li className="change-language" data-action="https://6valley.6amtech.com/change-language" data-language-code="bd">
                                <a className="dropdown-item py-1 :" href="javascript:">
                                    <img className="mr-2" width="20" src="https://6valley.6amtech.com/public/assets/front-end/img/flags/bd.png" alt="Bangla" />
                                    <span className="text-capitalize">Bangla</span>
                                </a>
                            </li>
                            <li className="change-language" data-action="https://6valley.6amtech.com/change-language" data-language-code="in">
                                <a className="dropdown-item py-1 :" href="javascript:">
                                    <img className="mr-2" width="20" src="https://6valley.6amtech.com/public/assets/front-end/img/flags/in.png" alt="Hindi" />
                                    <span className="text-capitalize">Hindi</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default LanguageSelector;
