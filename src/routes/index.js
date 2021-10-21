import { Route, Switch, useLocation } from "react-router";
import Home from "../pages/home";
import SignUp from "../pages/signup";
import Login from "../pages/login";
import AboutUs from "../pages/aboutus";
import PinkOctober from "../pages/pinkoctober";
import Dashboard from "../pages/dashboard";
import Habits from "../pages/habits";
import Groups from "../pages/groups";
import Settings from "../pages/settings";
import GroupsID from "../pages/groupsID";
import GroupsName from "../pages/groupsName";
import { AnimatePresence } from "framer-motion";

function Routes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
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
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/habits">
          <Habits />
        </Route>
        <Route exact path="/groups">
          <Groups />
        </Route>
        <Route path="/groups/:name/:id">
          <GroupsID />
        </Route>
        <Route path="/groups/:id">
          <GroupsName />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
