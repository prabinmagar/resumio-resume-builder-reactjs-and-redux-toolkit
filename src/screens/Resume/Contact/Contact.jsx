import "./Contact.scss";
import { FaCheckCircle } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { Images } from "../../../assets/images";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  updateContactInfo,
  updateUploadedImage,
} from "../../../redux/slices/resumeSlice";
import { selectContactInfo } from "../../../redux/selectors/resumeSelectors";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactInfoValidationSchema from "../../../forms/ContactInfoValidationSchema";

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contactInfoData = useSelector(selectContactInfo);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const saveContactInfo = (values, { setSubmitting }) => {
    try {
      const contactInfoData = values;
      dispatch(updateContactInfo(contactInfoData));
      navigate("/resume/education/tips");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleImageChange = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    event.preventDefault();
    const selectedImage = event.target.files[0];
    const preview = URL.createObjectURL(selectedImage);
    setImagePreview(preview);
    const reader = new FileReader();

    reader.onload = () => {
      const imageData = reader.result;
      dispatch(updateUploadedImage(imageData));
    };

    reader.readAsDataURL(selectedImage);
  };

  return (
    <Formik
      initialValues={contactInfoData}
      validationSchema={ContactInfoValidationSchema}
      onSubmit={saveContactInfo}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="resume-board-block resume-block-contact">
            <ResumeTop />
            <div className="resume-block-content">
              <h2 className="resume-block-ttl">
                What&apos;s the best way for employers to contact you?
              </h2>
              <p className="resume-block-lead">
                We suggset including an email and phone number.
              </p>
              <div className="resume-row">
                <div className="resume-img">
                  <div className="resume-img-preview">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Uploaded" />
                    ) : contactInfoData?.uploadImage ? (
                      <img src={contactInfoData.uploadImage} alt="Uploaded" />
                    ) : (
                      <img src={Images.SampleImage} alt="Default" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleImageChange}
                    className="img-upload-btn border-effect"
                  >
                    Upload Photo
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    name="image"
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                  />
                </div>
                <div className="resume-form">
                  <p className="form-hint">*indicates a required field</p>
                  <div className="form-elems-wrap">
                    <div className="form-elem-cols-2">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          First Name*
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. Maria"
                            name="firstName"
                          />
                          {touched.firstName && (
                            <span className="form-symbol">
                              {errors.firstName ? (
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
                          {errors.firstName && touched.firstName && (
                            <p className="error-text">{errors.firstName}</p>
                          )}
                        </div>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Surname*
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. Talley"
                            name="surName"
                          />
                          {touched.surName && (
                            <span className="form-symbol">
                              {errors.surName ? (
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
                          {errors.surName && touched.surName && (
                            <p className="error-text">{errors.surName}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-elem-cols-1">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Profession
                          <span className="form-opt">(optional)</span>
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. Sr. Accountant"
                            name="profession"
                          />
                          {touched.profession && (
                            <span className="form-symbol">
                              {errors.profession ? (
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
                          {errors.profession && touched.profession && (
                            <p className="error-text">{errors.profession}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-elem-cols-2">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          City/Municipality*
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. Talley"
                            name="cityOrMunicipality"
                          />
                          {touched.cityOrMunicipality && (
                            <span className="form-symbol">
                              {errors.cityOrMunicipality ? (
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
                          {errors.cityOrMunicipality &&
                            touched.cityOrMunicipality && (
                              <p className="error-text">
                                {errors.cityOrMunicipality}
                              </p>
                            )}
                        </div>
                      </div>
                      <div className="form-elem-subcols-2">
                        <div className="form-elem">
                          <label htmlFor="" className="form-lbl">
                            Country*
                          </label>
                          <div className="form-ctrl-wrap">
                            <Field
                              type="text"
                              className="form-ctrl"
                              placeholder="e.g. Thailand"
                              name="country"
                            />
                            {touched.country && (
                              <span className="form-symbol">
                                {errors.country ? (
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
                            {errors.country && touched.country && (
                              <p className="error-text">{errors.country}</p>
                            )}
                          </div>
                        </div>
                        <div className="form-elem">
                          <label htmlFor="" className="form-lbl">
                            Postal Code{" "}
                            <span className="form-opt">(optional)</span>
                          </label>
                          <div className="form-ctrl-wrap">
                            <Field
                              type="text"
                              className="form-ctrl"
                              placeholder="e.g. 6000"
                              name="postalCode"
                            />
                            {touched.postalCode && (
                              <span className="form-symbol">
                                {errors.postalCode ? (
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
                            {errors.postalCode && touched.postalCode && (
                              <p className="error-text">{errors.postalCode}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-elem-cols-2">
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Phone*
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. +234873249545"
                            name="phone"
                          />
                          {touched.phone && (
                            <span className="form-symbol">
                              {errors.phone ? (
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
                          {errors.phone && touched.phone && (
                            <p className="error-text">{errors.phone}</p>
                          )}
                        </div>
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-lbl">
                          Email*
                        </label>
                        <div className="form-ctrl-wrap">
                          <Field
                            type="text"
                            className="form-ctrl"
                            placeholder="e.g. mdelacruz@gmail.com"
                            name="email"
                          />
                          {touched.email && (
                            <span className="form-symbol">
                              {errors.email ? (
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
                          {errors.email && touched.email && (
                            <p className="error-text">{errors.email}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="resume-preview"></div>
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
                <span className="btn-text">Next: Education</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Contact;
