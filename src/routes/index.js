import { Route, Switch } from "react-router";
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

function Routes({opositeTheme}) {
  return (
    <Switch>
      <Route exact path="/">
        <Home opositeTheme={opositeTheme}/>
      </Route>
      <Route path="/signup">
        <SignUp opositeTheme={opositeTheme}/>
      </Route>
      <Route path="/login">
        <Login opositeTheme={opositeTheme}/>
      </Route>
      <Route path="/aboutus">
        <AboutUs opositeTheme={opositeTheme}/>
      </Route>
      <Route path="/pinkoctober">
        <PinkOctober opositeTheme={opositeTheme}/>
      </Route>
      <Route path="/dashboard">
        <Dashboard opositeTheme={opositeTheme}/>
      </Route>
      <Route path="/habits">
        <Habits opositeTheme={opositeTheme}/>
      </Route>
      <Route exact path="/groups">
        <Groups opositeTheme={opositeTheme}/>
      </Route>
      <Route path="/groups/:id">
        <GroupsID opositeTheme={opositeTheme}/>
      </Route>
      <Route path="/settings">
        <Settings opositeTheme={opositeTheme}/>
      </Route>
    </Switch>
  );
}

export default Routes;
