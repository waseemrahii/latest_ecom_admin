import React from 'react';

const UserProfile = () => {
    return (
        <li className="nav-item">
            <div className="hs-unfold">
                <div>
                    <div className="topbar-text dropdown disable-autohide m-1 text-capitalize">
                        {/* Replace "#" with actual link and user details */}
                        <a className="topbar-link dropdown-toggle d-flex align-items-center title-color" href="#" data-toggle="dropdown">
                            <img className="avatar avatar-sm avatar-circle" src="https://example.com/user-avatar.jpg" alt="User Avatar" />
                            <span className="d-none d-sm-block">John Doe</span>
                            <span className="d-sm-none">Profile</span>
                        </a>
                        {/* User profile dropdown menu */}
                        <ul className="dropdown-menu dropdown-menu-right position-absolute">
                            <li>
                                <a className="dropdown-item" href="#">Profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default UserProfile;
