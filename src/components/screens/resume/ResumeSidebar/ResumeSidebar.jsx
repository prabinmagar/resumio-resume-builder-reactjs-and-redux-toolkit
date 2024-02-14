import { useLocation } from "react-router-dom";
import { Images } from "../../../../assets/images";
import "./ResumeSidebar.scss";

const ResumeSidebar = () => {
  const location = useLocation();
  return (
    <div className="resume-sidebar">
      <div className="sidebar-brand">
        <img src={Images.Logo} alt="" />
        <span>Resumio.</span>
      </div>

      <div className="sidebar-steps">
        <div className="step-item">
          <div
            className={`step-item-count ${
              location.pathname === "/resume/contact" ? "active" : ""
            }`}
          >
            1 <p className="step-item-text">Heading</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        <div className="step-item">
          <div className="step-item-count">
            2 <p className="step-item-text">Education</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        <div className="step-item">
          <div className="step-item-count">
            3<p className="step-item-text">Work History</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        <div className="step-item">
          <div className="step-item-count">
            4 <p className="step-item-text">Skills</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        <div className="step-item">
          <div className="step-item-count">
            5<p className="step-item-text">Summary</p>
          </div>
          <div className="step-item-line"></div>
        </div>
        <div className="step-item">
          <div className="step-item-count">
            6<p className="step-item-text">Finalize</p>
          </div>
          <div className="step-item-line"></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSidebar;
