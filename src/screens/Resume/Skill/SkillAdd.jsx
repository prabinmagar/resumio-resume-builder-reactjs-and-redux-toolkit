import { Field, FieldArray, Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { FaMinusCircle, FaPlus, FaRegStar, FaTrash } from "react-icons/fa";
import ResumeTop from "../../../components/screens/resume/ResumeTop/ResumeTop";
import routeConstants from "../../../constants/routeConstants";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addOrUpdateSkillInfo } from "../../../redux/slices/resumeSlice";
import { useNavigate } from "react-router-dom";
import { selectSkillInfo } from "../../../redux/selectors/resumeSelectors";
import useResumeCompletionGuard from "../../../hooks/useResumeCompletionGuard";

const SkillAdd = () => {
  useResumeCompletionGuard();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const skills = useSelector(selectSkillInfo);

  const initialValues = {
    skills: skills.length ? skills : [{ id: uuidv4(), name: "", rating: 0 }],
  };

  const addSkillItem = (arrayHelpers) => {
    const id = uuidv4();
    arrayHelpers.push({
      id: id,
      name: "",
      rating: 0,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        dispatch(addOrUpdateSkillInfo(values.skills));
        navigate(routeConstants.RESUME_SKILL_LIST);
      }}
    >
      {({ values }) => (
        <Form>
          <div className="resume-board-block resume-block-skill">
            <ResumeTop goBackRoute={routeConstants.RESUME_SKILL_LIST} />
            <div className="resume-block-content">
              <h2 className="resume-block-ttl">
                What skills would you like to highlight?
              </h2>
              <p className="resume-block-lead">
                Write your skills with rating along with it.
              </p>
              <FieldArray name="skills">
                {(arrayHelpers) => (
                  <>
                    <div className="resume-row">
                      <div className="form-elems-wrap">
                        {values.skills.map((skill, index) => (
                          <div className="form-elem" key={index}>
                            <div className="form-rating">
                              <button
                                type="button"
                                onClick={() =>
                                  arrayHelpers.replace(index, {
                                    ...skill,
                                    rating: 0,
                                  })
                                }
                                className="skill-rating-btn"
                              >
                                <FaMinusCircle size={20} />
                              </button>
                              <div className="rating-stars">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <button
                                    type="button"
                                    key={i}
                                    className="star-btn"
                                    onClick={() =>
                                      arrayHelpers.replace(index, {
                                        ...skill,
                                        rating: i + 1,
                                      })
                                    }
                                  >
                                    {i + 1 <= skill.rating ? (
                                      <FaStar size={20} />
                                    ) : (
                                      <FaRegStar size={20} />
                                    )}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="form-ctrl-wrap">
                              <Field
                                type="text"
                                name={`skills.${index}.name`}
                                className="form-ctrl"
                                placeholder="Skill Name"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)}
                              className="skill-delete-btn"
                            >
                              <FaTrash size={20} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="summary-add">
                      <button
                        type="button"
                        className="summary-add-btn"
                        onClick={() => addSkillItem(arrayHelpers)}
                      >
                        <span className="btn-icon">
                          <FaPlus />
                        </span>
                        <span className="btn-text">Add Skill</span>
                      </button>
                    </div>
                  </>
                )}
              </FieldArray>
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
                <span className="btn-text">Next:Summary</span>
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SkillAdd;
