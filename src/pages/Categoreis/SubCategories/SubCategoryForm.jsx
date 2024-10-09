// SubCategoryForm.js
import React from "react";
import LanguageTabs from "./LanguageTabs";

const SubCategoryForm = ({
  formData,
  categories,
  handleChange,
  handleSubmit,
  activeTab,
  handleTabClick,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <LanguageTabs activeTab={activeTab} handleTabClick={handleTabClick} />
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              {["en", "sa", "bd", "in"].map((lang) => (
                <div
                  key={lang}
                  className={`form-group form-system-language-form ${
                    activeTab === lang ? "" : "d-none"
                  }`}
                >
                  <label
                    className="title-color"
                    htmlFor={`subCategoryName-${lang}`}
                  >
                    Sub category name <span className="text-danger">*</span> (
                    {lang.toUpperCase()})
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    id={`subCategoryName-${lang}`}
                    placeholder="New Sub Category"
                  />
                  <input type="hidden" name="lang[]" value={lang} />
                </div>
              ))}
              <input name="position" value="1" className="d-none" />
            </div>
            <div className="form-group col-md-6 col-lg-4">
              <label className="title-color" htmlFor="mainCategory">
                Main Category <span className="text-danger">*</span>
              </label>
              <select
                id="mainCategory"
                name="mainCategory"
                value={formData.mainCategory}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled>
                  Select main category
                </option>
                {categories.map((category, index) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6 col-lg-4">
              <label className="title-color flex" htmlFor="priority">
                Priority
              </label>
              <select
                className="form-control"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                id="priority"
                required
              >
                <option disabled selected>
                  Set Priority
                </option>
                {Array.from({ length: 11 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-2 justify-content-end">
        <button
          type="reset"
          className="btn bg-secondary border border-secondary"
        >
          Reset
        </button>
        <button
          type="submit"
          className="btn bg-primary text-white hover:bg-primary-dark hover:text-white"
          style={{ color: "white" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SubCategoryForm;
