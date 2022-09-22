import { Switch, Route, Redirect } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Patient from "./pages/Patient";
import "./pages/FormHistoryMedical.css";

import FormularioPatient from "./pages/FormularioPatient";
import HistoyMedical from "./pages/HistoyMedical";
import FormHistoryMedical from "./pages/FormHistoryMedical";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/patient" component={Patient} />
          <Route exact path="/formPatient" component={FormularioPatient} />
          <Route exact path="/history" component={HistoyMedical} />
          <Route exact path="/formHistory" component={FormHistoryMedical} />
          <Redirect from="*" to="/patient" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
