import { Field, Form, Formik } from "formik";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import "./Education.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEducationInfo } from "../../../redux/slices/resumeSlice";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import EducationInfoValidationSchema from "../../../forms/EducationInfoValidationSchema";

const EducationAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [years, setYears] = useState([]);

  const initialState = {
    schoolName: "",
    schoolLocation: "",
    degree: "",
    fieldOfStudy: "",
    graduationMonth: "",
    graduationYear: "",
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startYear = currentYear - 20;
    const endYear = currentYear + 10;

    const yearsArray = [];
    for (let year = startYear; year <= endYear; year++) {
      yearsArray.push(year);
    }

    setYears(yearsArray);
  }, []);

  const saveEducationInfo = (values, { setSubmitting }) => {
    try {
      const id = uuidv4();
      const educationInfoData = { id, ...values };
      dispatch(addEducationInfo(educationInfoData));
      navigate("/resume/education/list");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={EducationInfoValidationSchema}
      onSubmit={saveEducationInfo}
      validateOnMount
    >
      {({ errors, touched }) => (
        <Form>
          <div className="resume-board-block resume-block-education">
            <ResumeTop goBackRoute={"/resume/education/tips"} />
            <div className="resume-block-content">
              <h2 className="resume-block-ttl">Tell us about your education</h2>
              <p className="resume-block-lead">
                Enter your education experience so far, even if you are a
                current student or did not graduate.
              </p>

              <div className="resume-row">
                <div className="resume-form">
                  <p className="form-hint">*indicates a required field</p>
                  <div className="form-elems-wrap">
                    <div className="form-elem-cols-2">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          School Name
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. University of Texas"
                            name="schoolName"
                          />
                          {touched.schoolName && (
                            <span className="form-symbol">
                              {errors.schoolName ? (
                                <span className="form-symbol-invalid">
                                  <FaExclamationCircle />
                                </span>
                              ) : (
                                <span className="form-symbol-valid">
                                  <FaCheckCircle />
                                </span>
                              )}
                            </span>
                          )}
                          {errors.schoolName && touched.schoolName && (
                            <p className="error-text">{errors.schoolName}</p>
                          )}
                        </div>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          School Location
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. Cebu City, Cebu, Philippines"
                            name="schoolLocation"
                          />
                          {touched.schoolLocation && (
                            <span className="form-symbol">
                              {errors.schoolLocation ? (
                                <span className="form-symbol-invalid">
                                  <FaExclamationCircle />
                                </span>
                              ) : (
                                <span className="form-symbol-valid">
                                  <FaCheckCircle />
                                </span>
                              )}
                            </span>
                          )}
                          {errors.schoolLocation && touched.schoolLocation && (
                            <p className="error-text">
                              {errors.schoolLocation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-elem-cols-2">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Degree
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. Bachelor of Arts"
                            name="degree"
                          />
                          {touched.degree && (
                            <span className="form-symbol">
                              {errors.degree ? (
                                <span className="form-symbol-invalid">
                                  <FaExclamationCircle />
                                </span>
                              ) : (
                                <span className="form-symbol-valid">
                                  <FaCheckCircle />
                                </span>
                              )}
                            </span>
                          )}
                          {errors.degree && touched.degree && (
                            <p className="error-text">{errors.degree}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-elem-cols-2">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Field of Study
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. Arts & Humanities"
                            name="fieldOfStudy"
                          />
                          {touched.fieldOfStudy && (
                            <span className="form-symbol">
                              {errors.fieldOfStudy ? (
                                <span className="form-symbol-invalid">
                                  <FaExclamationCircle />
                                </span>
                              ) : (
                                <span className="form-symbol-valid">
                                  <FaCheckCircle />
                                </span>
                              )}
                            </span>
                          )}
                          {errors.fieldOfStudy && touched.fieldOfStudy && (
                            <p className="error-text">{errors.fieldOfStudy}</p>
                          )}
                        </div>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Graduation Date (Or Expected Graduation Date)
                        </label>
                        <div className="form-ctrl-cols-2">
                          <div className="form-ctrl-wrap">
                            <Field
                              as="select"
                              name="graduationMonth"
                              className="form-ctrl"
                            >
                              <option value="">Select Month</option>
                              <option value="January">January</option>
                              <option value="February">February</option>
                              <option value="March">March</option>
                              <option value="April">April</option>
                              <option value="May">May</option>
                              <option value="June">June</option>
                              <option value="July">July</option>
                              <option value="August">August</option>
                              <option value="September">September</option>
                              <option value="October">October</option>
                              <option value="November">November</option>
                              <option value="December">December</option>
                            </Field>
                            <span className="select-icon">
                              <FaCaretDown />
                            </span>
                            {errors.graduationMonth &&
                              touched.graduationMonth && (
                                <p className="error-text">
                                  {errors.graduationMonth}
                                </p>
                              )}
                          </div>
                          <div className="form-ctrl-wrap">
                            <Field
                              as="select"
                              name="graduationYear"
                              className="form-ctrl"
                            >
                              <option value="">Select Year</option>
                              {years.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </Field>
                            <span className="select-icon">
                              <FaCaretDown />
                            </span>
                            {errors.graduationYear &&
                              touched.graduationYear && (
                                <p className="error-text">
                                  {errors.graduationYear}
                                </p>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-block-bottom">
              <button
                type="button"
                className="resume-preview-btn btn btn-oxford-blue btn-outline border-effect"
              >
                <span className="btn-text">Preview</span>
              </button>
              <button
                type="submit"
                className="resume-next-btn btn btn-orange border-effect"
              >
                <span className="btn-text">Next</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EducationAdd;
