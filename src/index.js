/*

=========================================================
* Now UI Kit React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
// import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "assets/style.css"
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import OurVehicles from "views/examples/OurVehicles.js";
import OurServices from "views/examples/OurServices.js";
import ChargingStations from "views/examples/ChargingStations.js";
import AppOverview from "views/examples/AppOverview.js";
import BookADemo from "views/examples/BookADemo.js";
import DriverSignUp from "views/examples/DriverSignUp.js";
import AboutUs from "views/examples/AboutUs.js";
import OurTeam from "views/examples/OurTeam.js";
import OurPartners from "views/examples/OurPartners.js";
import ContactUs from "views/examples/ContactUs.js";


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />

        <Route
          path="/vehicles"
          render={(props) => <OurVehicles {...props} />}
        />
        <Route
          path="/services"
          render={(props) => <OurServices {...props} />}
        />
        <Route
          path="/charging"
          render={(props) => <ChargingStations {...props} />}
        />
        <Route
          path="/app"
          render={(props) => <AppOverview {...props} />}
        />
        <Route
          path="/demo"
          render={(props) => <BookADemo {...props} />}
        />
        <Route
          path="/driver-sign-up"
          render={(props) => <DriverSignUp {...props} />}
        />
        <Route
          path="/about"
          render={(props) => <AboutUs {...props} />}
        />
        <Route
          path="/team"
          render={(props) => <OurTeam {...props} />}
        />
        <Route
          path="/partners"
          render={(props) => <OurPartners {...props} />}
        />
        <Route
          path="/contact"
          render={(props) => <ContactUs {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
