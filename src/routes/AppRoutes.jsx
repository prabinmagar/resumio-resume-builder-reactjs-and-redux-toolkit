import { Route, Routes } from "react-router-dom";
import routeConstants from "../constants/routeConstants";
import LayoutContainer from "../layout/LayoutContainer/LayoutContainer";

import Home from "../screens/Home/HomeScreen";
import PageNotFound from "../screens/PageNotFound/PageNotFoundScreen";
import HowItWorks from "../screens/HowItWorks/HowItWorksScreen";
import ResumeContainer from "../screens/Resume/ResumeContainer/ResumeContainer";
import Contact from "../screens/Resume/Contact/Contact";
import EducationTips from "../screens/Resume/Education/EducationTips";
import EducationList from "../screens/Resume/Education/EducationList";
import EducationAdd from "../screens/Resume/Education/EducationAdd";
import EducationEdit from "../screens/Resume/Education/EducationEdit";
import WorkHistoryTips from "../screens/Resume/WorkHistory/WorkHistoryTips";
import WorkHistoryAdd from "../screens/Resume/WorkHistory/WorkHistoryAdd";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routeConstants.ROOT} element={<LayoutContainer />}>
        <Route path={routeConstants.HOME} element={<Home />} />
        <Route path={routeConstants.HOW_IT_WORKS} element={<HowItWorks />} />
      </Route>

      <Route path={routeConstants.RESUME} element={<ResumeContainer />}>
        <Route path={routeConstants.RESUME_CONTACT} element={<Contact />} />
        <Route
          path={routeConstants.RESUME_EDUCATION_TIPS}
          element={<EducationTips />}
        />
        <Route
          path={routeConstants.RESUME_EDUCATION_ADD}
          element={<EducationAdd />}
        />
        <Route
          path={routeConstants.RESUME_EDUCATION_LIST}
          element={<EducationList />}
        />
        <Route
          path={`${routeConstants.RESUME_EDUCATION_EDIT}/:id`}
          element={<EducationEdit />}
        />
        <Route
          path={routeConstants.RESUME_WORKHISTORY_TIPS}
          element={<WorkHistoryTips />}
        />
        <Route
          path={routeConstants.RESUME_WORKHISTORY_ADD}
          element={<WorkHistoryAdd />}
        />
      </Route>
      <Route path={routeConstants.PAGE_NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
