// import React, { useState } from "react";
// import logo from "../../assets/images/svg/logo.svg";
// import Login from "./Login";
// import Register from "./Register";
// import VehicleDetails from "./VehcileDetails";

// type TabType = "login" | "register";

// const LoginAndSignupHeader: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState<TabType>("login");

//   const handleTabClick = (tab: TabType) => {
//     setSelectedTab(tab);
//   };

//   const getTabClass = (tab: TabType) => {
//     return selectedTab === tab
//       ? "fs_24 red_ff color_blue fw-semibold active-tab"
//       : "fs_24 red_ff color_lightblack fw-semibold";
//   };

//   const getBorderClass = (tab: TabType) => {
//     return selectedTab === tab ? "custom_border border" : "border";
//   };

//   return (
//     <div className="min-vh-100 py-3 d-flex flex-column align-items-center justify-content-center bg_theme">
//       <div className="custom_auth_header_width">
//         <a className="d-flex justify-content-center" href="#">
//           <img className="" src={logo} alt="logo" />
//         </a>
//         <div className="bg-white  rounded-2 mt-4 py-md-3 px-md-4 p-3">
//           <div className="row">
//             <div
//               className="col-6 pe-0 text-center"
//               onClick={() => handleTabClick("login")}
//             >
//               <a href="#" className={getTabClass("login")}>
//                 Login
//               </a>
//               <div className={`mt-2 ${getBorderClass("login")}`}></div>
//             </div>
//             <div
//               className="col-6 ps-0 text-center"
//               onClick={() => handleTabClick("register")}
//             >
//               <a href="#" className={getTabClass("register")}>
//                 Register
//               </a>
//               <div className={`mt-2 ${getBorderClass("register")}`}></div>
//             </div>
//           </div>
//           {selectedTab === "login" ? (
//             <>
//               <Login />
//             </>
//           ) : (
//             <>
//               <Register />
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginAndSignupHeader;

import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import logo from "../../assets/images/svg/logo.svg";
import Login from "./Login";
import Register from "./Register";

type TabType = "login" | "register";

const LoginAndSignupHeader: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-vh-100 py-3 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container className="custom_auth_header_width">
        <a className="d-flex justify-content-center" href="#">
          <img className="" src={logo} alt="logo" />
        </a>
        <div className="bg-white rounded-2 mt-4 py-md-3 px-md-4 p-3">
          <Row>
            <Col
              sm={6}
              className="pe-0 text-center"
              onClick={() => handleTabClick("login")}
            >
              <Nav.Link
                href="#"
                className={
                  selectedTab === "login" ? "active-tab  color_blue" : ""
                }
              >
                <h3 className="red_ff fs_24">Login</h3>
              </Nav.Link>
              {selectedTab === "login" ? (
                <div className="mt-2 custom_border border-body border-1 border"></div>
              ) : (
                <>
                  <div className="mt-2  border-body border-1 border"></div>
                </>
              )}
            </Col>
            <Col
              sm={6}
              className="ps-0 text-center"
              onClick={() => handleTabClick("register")}
            >
              <Nav.Link
                href="#"
                className={
                  selectedTab === "register" ? "active-tab color_blue" : ""
                }
              >
                <h3 className="red_ff fs_24">Register</h3>
              </Nav.Link>
              {selectedTab === "register" ? (
                <div className="mt-2 custom_border border-1 border"></div>
              ) : (
                <>
                  <div className="mt-2  border-body border-1 border"></div>
                </>
              )}
            </Col>
          </Row>
          <Tab.Content className="mt-3">
            <Tab.Pane
              eventKey="login"
              className={selectedTab === "login" ? "show active" : ""}
            >
              <Login />
            </Tab.Pane>
            <Tab.Pane
              eventKey="register"
              className={selectedTab === "register" ? "show active" : ""}
            >
              <Register />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Container>
    </div>
  );
};

export default LoginAndSignupHeader;
