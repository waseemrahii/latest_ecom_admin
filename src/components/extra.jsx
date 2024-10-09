<div class="content container-fluid main-card ltr snipcss-B2K3K">
    <div class="mb-4">
        <h2 class="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/add-new-seller.png" class="mb-1" alt=""> Add new Vendor
        </h2>
    </div>
    <form class="user" action="https://6valley.6amtech.com/admin/vendors/add" method="post" enctype="multipart/form-data" id="add-vendor-form">
        <input type="hidden" name="_token" value="OatzLIEm9bwuZ3zpndZjuPUEjNulJdDDGFVMhrzi" autocomplete="off">
        <div class="card">
            <div class="card-body">
                <input type="hidden" name="status" value="approved">
                <h5 class="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/vendor-information.png" class="mb-1" alt=""> Vendor information
                </h5>
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="form-group">
                            <label for="exampleFirstName" class="title-color d-flex gap-1 align-items-center">First name</label>
                            <input type="text" class="form-control form-control-user" id="exampleFirstName" name="f_name" value="" placeholder="Ex: Jhone" required="">
                        </div>
                        <div class="form-group">
                            <label for="exampleLastName" class="title-color d-flex gap-1 align-items-center">Last name</label>
                            <input type="text" class="form-control form-control-user" id="exampleLastName" name="l_name" value="" placeholder="Ex: Doe" required="">
                        </div>
                        <div class="form-group">
                            <label class="title-color d-flex" for="exampleFormControlInput1">Phone</label>
                            <div class="mb-3">
                                <div class="iti iti--allow-dropdown iti--show-selected-dial-code iti--show-flags iti--inline-dropdown">
                                    <div class="iti__flag-container">
                                        <div class="iti__selected-flag" role="combobox" aria-haspopup="listbox" aria-controls="iti-0__country-listbox" aria-expanded="false" aria-label="Selected country" tabindex="0" title="United States">
                                            <div class="iti__flag iti__us"></div>
                                            <div class="iti__selected-dial-code">+1</div>
                                            <div class="iti__arrow"></div>
                                        </div>
                                        <div class="iti__dropdown-content iti__hide "><input type="text" class="iti__search-input" placeholder="Search">
                                            <ul class="iti__country-list" id="iti-0__country-listbox" role="listbox" aria-label="List of countries">
                                                <li id="iti-0__item-af" class="iti__country iti__standard" tabindex="-1" role="option" data-dial-code="93" data-country-code="af" aria-selected="false">
                                                    <div class="iti__flag-box">
                                                        <div class="iti__flag iti__af"></div>
                                                    </div><span class="iti__country-name">Afghanistan</span><span class="iti__dial-code">+93</span>
                                                </li>
                                                <li id="iti-0__item-al" class="iti__country iti__standard" tabindex="-1" role="option" data-dial-code="355" data-country-code="al" aria-selected="false">
                                                    <div class="iti__flag-box">
                                                        <div class="iti__flag iti__al"></div>
                                                    </div><span class="iti__country-name">Albania</span><span class="iti__dial-code">+355</span>
                                                </li>
 
 
                                                <li id="iti-0__item-zw" class="iti__country iti__standard" tabindex="-1" role="option" data-dial-code="263" data-country-code="zw" aria-selected="false">
                                                    <div class="iti__flag-box">
                                                        <div class="iti__flag iti__zw"></div>
                                                    </div><span class="iti__country-name">Zimbabwe</span><span class="iti__dial-code">+263</span>
                                                </li>
                                                <li id="iti-0__item-ax" class="iti__country iti__standard" tabindex="-1" role="option" data-dial-code="358" data-country-code="ax" aria-selected="false">
                                                    <div class="iti__flag-box">
                                                        <div class="iti__flag iti__ax"></div>
                                                    </div><span class="iti__country-name">Åland Islands</span><span class="iti__dial-code">+358</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div><input class="form-control form-control-user phone-input-with-country-picker iti__tel-input style-6iJXY" type="tel" id="exampleInputPhone" value="" placeholder="Enter phone number" required="" autocomplete="off" data-intl-tel-input-id="0">
                                </div>
                                <div class="">
                                    <input type="text" class="country-picker-phone-number w-50" value="" name="phone" hidden="" readonly="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <div class="d-flex justify-content-center">
                                <img class="upload-img-view" id="viewer" src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg" alt="Banner image">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="title-color mb-2 d-flex gap-1 align-items-center">Vendor Image <span class="text-info">(Ratio 1:1)</span></div>
                            <div class="custom-file text-left">
                                <input type="file" name="image" id="custom-file-upload" class="custom-file-input image-input" data-image-id="viewer" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*">
                                <label class="custom-file-label" for="custom-file-upload">Upload image</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-body">
                <input type="hidden" name="status" value="approved">
                <h5 class="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/vendor-information.png" class="mb-1" alt=""> Account information
                </h5>
                <div class="row">
                    <div class="col-lg-4 form-group">
                        <label for="exampleInputEmail" class="title-color d-flex gap-1 align-items-center">Email</label>
                        <input type="email" class="form-control form-control-user" id="exampleInputEmail" name="email" value="" placeholder="Ex:Jhone@company.com" required="">
                    </div>
                    <div class="col-lg-4 form-group">
                        <label for="user_password" class="title-color d-flex gap-1 align-items-center"> Password <span class="input-label-secondary cursor-pointer d-flex" data-toggle="tooltip" data-placement="top" title="" data-original-title="The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit , one special character, and no spaces.">
                                <img alt="" width="16" src="https://6valley.6amtech.com/public/assets/back-end/img/info-circle.svg">
                            </span>
                        </label>
                        <div class="input-group input-group-merge">
                            <input type="password" class="js-toggle-password form-control password-check" name="password" required="" id="user_password" minlength="8" placeholder="Password minimum 8 characters" data-hs-toggle-password-options="{
                                                         &quot;target&quot;: &quot;#changePassTarget&quot;,
                                                        &quot;defaultClass&quot;: &quot;tio-hidden-outlined&quot;,
                                                        &quot;showClass&quot;: &quot;tio-visible-outlined&quot;,
                                                        &quot;classChangeTarget&quot;: &quot;#changePassIcon&quot;
                                                }">
                            <div id="changePassTarget" class="input-group-append">
                                <a class="input-group-text" href="javascript:">
                                    <i id="changePassIcon" class="tio-hidden-outlined"></i>
                                </a>
                            </div>
                        </div>
                        <span class="text-danger mx-1 password-error"></span>
                    </div>
                    <div class="col-lg-4 form-group">
                        <label for="confirm_password" class="title-color d-flex gap-1 align-items-center">Confirm password</label>
                        <div class="input-group input-group-merge">
                            <input type="password" class="js-toggle-password form-control" name="confirm_password" required="" id="confirm_password" placeholder="Confirm password" data-hs-toggle-password-options="{
                                                         &quot;target&quot;: &quot;#changeConfirmPassTarget&quot;,
                                                        &quot;defaultClass&quot;: &quot;tio-hidden-outlined&quot;,
                                                        &quot;showClass&quot;: &quot;tio-visible-outlined&quot;,
                                                        &quot;classChangeTarget&quot;: &quot;#changeConfirmPassIcon&quot;
                                                }">
                            <div id="changeConfirmPassTarget" class="input-group-append">
                                <a class="input-group-text" href="javascript:">
                                    <i id="changeConfirmPassIcon" class="tio-hidden-outlined"></i>
                                </a>
                            </div>
                        </div>
                        <div class="pass invalid-feedback">Repeat password not match.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-body">
                <h5 class="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
                    <img src="https://6valley.6amtech.com/public/assets/back-end/img/vendor-information.png" class="mb-1" alt=""> Shop information
                </h5>
                <div class="row">
                    <div class="col-lg-6 form-group">
                        <label for="shop_name" class="title-color d-flex gap-1 align-items-center">Shop name</label>
                        <input type="text" class="form-control form-control-user" id="shop_name" name="shop_name" placeholder="Ex:Jhon" value="" required="">
                    </div>
                    <div class="col-lg-6 form-group">
                        <label for="shop_address" class="title-color d-flex gap-1 align-items-center">Shop address</label>
                        <textarea name="shop_address" class="form-control text-area-max" id="shop_address" rows="1" placeholder="Ex:Doe"></textarea>
                    </div>
                    <div class="col-lg-6 form-group">
                        <div class="d-flex justify-content-center">
                            <img class="upload-img-view" id="viewerLogo" src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg" alt="Banner image">
                        </div>
                        <div class="mt-4">
                            <div class="d-flex gap-1 align-items-center title-color mb-2"> Shop logo <span class="text-info">(Ratio 1:1)</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" name="logo" id="logo-upload" class="custom-file-input image-input" data-image-id="viewerLogo" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*">
                                <label class="custom-file-label" for="logo-upload">Upload logo</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 form-group">
                        <div class="d-flex justify-content-center">
                            <img class="upload-img-view upload-img-view__banner" id="viewerBanner" src="https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg" alt="Banner image">
                        </div>
                        <div class="mt-4">
                            <div class="d-flex gap-1 align-items-center title-color mb-2"> Shop banner <span class="text-info">Ratio 4:1 (2000 x 500 px)</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" name="banner" id="banner-upload" class="custom-file-input image-input" data-image-id="viewerBanner" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*">
                                <label class="custom-file-label text-capitalize" for="banner-upload">Upload Banner</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-end gap-10">
                    <input type="hidden" name="from_submit" value="admin">
                    <button type="reset" class="btn btn-secondary reset-button">Reset </button>
                    <button type="button" class="btn btn--primary btn-user form-submit" data-form-id="add-vendor-form" data-redirect-route="https://6valley.6amtech.com/admin/vendors/list" data-message="Want to add this vendor?">Submit</button>
                </div>
            </div>
        </div>
    </form>
</div>