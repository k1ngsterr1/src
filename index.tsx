import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./App";
import TeethHealing from "./pages/services/teeth-healing/TeethHealing";
import ChildDental from "./pages/children-dental/ChildrenDental";
import PricesPage from "./pages/prices/PricesPage";
import Privacy from "./pages/privacy/PrivacyPage";
import ReviewsPage from "./pages/reviews/ReviewsPage";
import WorksPage from "./pages/works/worksPage";
import DoctorsPage from "./pages/doctors/DoctorsPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import ClinicsPage from "./pages/clinics/ClinicsPage";
import Whitening from "./pages/services/whitening/Whitening";
import Hygiene from "./pages/services/hygiene/Hygiene";
import BiteCorrection from "./pages/services/bite-correction/BiteCorrection";
import ProstheticsPage from "./pages/services/prosthetics/ProstheticsPage";
import VinirsPage from "./pages/services/vinirs/VinirsPage";
import Surgery from "./pages/services/surgery/Surgery";
import DiagnosticPage from "./pages/services/diagnostic/DiagnosticPage";
import ChildBiteCorrection from "./pages/services/child-bite-correction/ChildBite";
import ChildSurgery from "./pages/services/child-surgery/ChildSurgery";
import ChildTeeth from "./pages/services/child-teeth-healing/ChildTeeth";
import ChildHygiene from "./pages/services/child-hygiene/ChildHygiene";
import ChildSleep from "./pages/services/child-healing-insleep/ChildSleep";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <Router>
    <ScrollToTop></ScrollToTop>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/children-dental" element={<ChildDental />}></Route>
      <Route path="/prices" element={<PricesPage />}></Route>
      <Route path="/privacy" element={<Privacy />}></Route>
      <Route path="/reviews" element={<ReviewsPage />}></Route>
      <Route path="/works" element={<WorksPage />}></Route>
      <Route path="/doctors" element={<DoctorsPage />}></Route>
      <Route path="/clinics" element={<ClinicsPage />}></Route>
      <Route path="/contacts" element={<ContactsPage />}></Route>
      <Route path="/services/whitening" element={<Whitening />}></Route>
      <Route path="/services/hygiene" element={<Hygiene />}></Route>
      <Route
        path="/services/bite-correction"
        element={<BiteCorrection />}
      ></Route>
      <Route path="/services/teeth-healing" element={<TeethHealing />}></Route>
      <Route path="/services/prosthetics" element={<ProstheticsPage />}></Route>
      <Route path="/services/vinirs" element={<VinirsPage />}></Route>
      <Route path="/services/surgery" element={<Surgery />}></Route>
      <Route path="/services/diagnostic" element={<DiagnosticPage />}></Route>
      <Route
        path="/services/child-bite-correction"
        element={<ChildBiteCorrection />}
      ></Route>
      <Route path="/services/child-surgery" element={<ChildSurgery />}></Route>
      <Route path="/services/child-teeth" element={<ChildTeeth />}></Route>
      <Route path="/services/child-hygiene" element={<ChildHygiene />}></Route>
      <Route path="/services/child-sleep" element={<ChildSleep />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
