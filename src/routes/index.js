import { Route, Switch } from "react-router";
import Home from "../pages/home";
// import SignUp from "../pages/signup";
// import Login from "../pages/login";
// import AboutUs from "../pages/aboutus";
// import PinkOctober from "../pages/pinkoctober";
import Dashboard from "../pages/dashboard";
// import Habits from "../pages/habits";
// import Groups from "../pages/groups";
// import Settings from "../pages/settings";

// import SignUp from "../pages/signup";
// import Login from "../pages/login";
// import AboutUs from "../pages/aboutus";
// import PinkOctober from "../pages/pinkoctober";
// import Habits from "../pages/habits";
// import Groups from "../pages/groups";
// import Settings from "../pages/settings";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      {/* <Route path="/signup">
=======
      <Route path="/signup">
>>>>>>> 7ecb4e40943efa78ff131fa874839af2d523975c
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
      <Route path="/pinkoctober">
        <PinkOctober />
<<<<<<< HEAD
      </Route> */
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      /* <Route path="/habits">
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/habits">
        <Habits />
      </Route>
      <Route path="/groups">
        <Groups />
      </Route>
      <Route path="/settings">
        <Settings />
  </Route> */}

    </Switch>
  );
}

export default Routes;
