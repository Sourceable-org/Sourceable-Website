import { useState, useEffect, useRef } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { encrypt, decrypt, compare } from 'n-krypta'; //For es6
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardText,
} from "reactstrap";
import { Helmet } from "react-helmet";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "./variables/charts.js";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "../../assets/css/argon-dashboard-react.css";
import "../../assets/css/argon-dashboard-react.css.map";
import "../../assets/css/argon-dashboard-react.min.css";
import { async } from "@firebase/util";

const Header = () => {
  return <></>;
};

const Index = (props) => {
  const [countMonthYear, setCountMonthYear] = useState({});
  const [countTypePost, setcountTypePost] = useState({});
  const [totalPost, setTotalpost] = useState(0);
  const [countTypeAccount, setcountTypeAccount] = useState({});
  const [totalAccount, setTotalAccount] = useState(0);
  const [posts, setPosts] = useState([]);
  let month_data = {};
  let year_data = {};
  let month_charts = [];
  let year_charts = [];
  let userDataCount = {};
  let user_posts = [];

  let type_data = { text: 0, image: 0, video: 0, audio: 0 };
  let type_charts = [];
  let account_type_data = { mobile: 0, web: 0 };
  let account_type_charts = [];
  const date_yr = Math.abs(2021 - new Date().getFullYear()) + 1;

  var colors = {
    gray: {
      100: "#f6f9fc",
      200: "#e9ecef",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#8898aa",
      700: "#525f7f",
      800: "#32325d",
      900: "#212529",
    },
    theme: {
      default: "#172b4d",
      primary: "#5e72e4",
      secondary: "#f4f5f7",
      info: "#11cdef",
      success: "#2dce89",
      danger: "#f5365c",
      warning: "#fb6340",
    },
    black: "#12263F",
    white: "#FFFFFF",
    transparent: "transparent",
  };

  let chartExample1_options = {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: colors.black,
            zeroLineColor: colors.black,
          },
          ticks: {
            callback: function (value) {
              if (!(value % 10)) {
                return value;
              }
            },
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: function (item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";

          if (data.datasets.length > 1) {
            content += label;
          }

          content += yLabel;
          return content;
        },
      },
    },
  };

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  for (let i = 0; i < 12; i++) {
    month_data[(i + 1).toString()] = 0;
  }
  for (let i = 0; i < date_yr; i++) {
    let d = new Date().getFullYear();
    year_data[(d - i).toString()] = 0;
  }
  useEffect(()=>{
		// ReactGA.pageview("window.location.pathname + window.location.search")
		// ReactGA.send({ hitType: "pageview", page: "/explore" });
		ReactGA.event({
			category: "Sourceable | Dashboard",
			action: "Sourceable | Dashboard",
			// label: "your label", // optional
			// value: 99, // optional, must be a number
			nonInteraction: true, // optional, true/false
			// transport: "xhr", // optional, beacon/xhr/image
		  });

	},[]);

  useEffect(() => {
    const getIncidentsDataFromFireStore = async (db) => {
      // get all documents under the Explore Collection
      const querySnapshot = await getDocs(collection(db, "Explore"));

      const userData = [];

      // iterate all the documents and fetch it's data
      querySnapshot.docs.map((doc) => {
        // fetch the data of the document
        const data = doc.data();
        const date = new Date(data.properties.created);
        let month = date.getMonth();
        let year = date.getFullYear();
        type_data[data.properties.file.type] += 1;
        month_data[month] += 1;
        year_data[year] += 1;
        userDataCount[data.properties.user] = 0;

        // add the incident_id field with document id
        data.properties.incident_id = doc.id;
        userData.push(data);
      });
      for (let i = 0; i < userData.length; i++) {
        userDataCount[userData[i].properties.user] += 1;
      }

      let userAccountName = Object.keys(userDataCount);
      let userPostCount = Object.values(userDataCount);

      for (let i = 0; i < userAccountName.length; i++) {
        user_posts.push({
          account: userAccountName[i],
          count: userPostCount[i],
        });
        // setPosts(oldArray => [...oldArray, {"account":userAccountName[i],"count":userPostCount[i]}]);
      }
      console.log("TTTTTT", user_posts);

      month_charts = Object.values(month_data);
      let year_title = Object.keys(year_data);
      month_charts = Object.values(month_data);
      year_charts = Object.values(year_data);
      type_charts = Object.values(type_data);

      setCountMonthYear({
        data1: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Performance",
              data: month_charts,
            },
          ],
        },
        data2: {
          labels: year_title,
          datasets: [
            {
              label: "Performance",
              data: year_charts,
            },
          ],
        },
      });

      setcountTypePost({
        labels: ["Text", "Image", "Video", "Audio"],
        datasets: [
          {
            label: "Sales",
            data: type_charts,
            maxBarThickness: 15,
          },
        ],
      });
      setTotalpost(year_charts.reduce((a, b) => a + b, 0));

      setPosts(user_posts)
    };

    function ConvertStringToHex(str) {
      var arr = [];
      for (var i = 0; i < str.length; i++) {
        arr[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
      }
      return "\\u" + arr.join("\\u");
    }
  
    function decryptData(str) {
      const CryptoJS = require("crypto-js");
      const key = ConvertStringToHex("Sourceable");
    
      const decrypted = CryptoJS.AES.decrypt(str, key);
      console.log(decrypted);
    
      console.log(
        "-----------------------------------------------------------------------"
      );
      var output = decrypted.toString(CryptoJS.enc.Utf8);
      console.log(output);
    
      return output;
    }
  
  function encryptedData(str){
      const key = ConvertStringToHex('Sourceable');
      const CryptoJS = require('crypto-js');
      const encryptedAudio = CryptoJS.AES.encrypt(str, key);
  
      return encryptedAudio;
    }
  
    function encryptID(message){
      const key = ConvertStringToHex('Sourceable');
  
      const encryptedString = encrypt(message, key); // #Iblankartan!not!svreblankartwhfreblankartzpublankartase!gettiogblankartypvrblankartiofprmatipn,blankartcvtblankartgpoeblankarttopid.blankartI!oeedtblankartuoblankartspeodblankartspneblankarttjmfblankartlearoing!nore!osblankartundesstaoeing!mpre.blankartTiankt!for!eycelleotblankartiogoblankartI!wbsblankartlooling!gorblankartuhjsblankartinfpblankartfos!myblankartnitsion.#
  
      return encryptedString;
   
    };
  
    function decryptID(message){
      const key = ConvertStringToHex('Sourceable');
    
      const encryptedString = decrypt(message, key); // #Iblankartan!not!svreblankartwhfreblankartzpublankartase!gettiogblankartypvrblankartiofprmatipn,blankartcvtblankartgpoeblankarttopid.blankartI!oeedtblankartuoblankartspeodblankartspneblankarttjmfblankartlearoing!nore!osblankartundesstaoeing!mpre.blankartTiankt!for!eycelleotblankartiogoblankartI!wbsblankartlooling!gorblankartuhjsblankartinfpblankartfos!myblankartnitsion.#
    
      return encryptedString;
     
    };

    const getAccountType = async (db) => {
      const querySnapshot = await getDocs(collection(db, "Accounts"));
      querySnapshot.docs.map((doc) => {
        const data = doc.data();
        account_type_data[decryptID(data.account_type)] += 1;
      });

      account_type_charts = Object.values(account_type_data);
      console.log(account_type_charts);

      setcountTypeAccount({
        labels: ["Mobile", "Web"],
        datasets: [
          {
            label: "Sales",
            data: account_type_charts,
            maxBarThickness: 15,
          },
        ],
      });

      setTotalAccount(account_type_charts.reduce((a, b) => a + b, 0));
    };

    // call the function to fetch incidents data
    getIncidentsDataFromFireStore(db);
    getAccountType(db);
  }, []);

  const auth = getAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // when the auth status is changed
  //   onAuthStateChanged(auth, (user) => {
  //     // if user object exists means loggedIn
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       const uid = user.uid;
  //     }
  //     // user is not logged in
  //     else {
  //       // redirect to login page
  //       navigate("/join");
  //     }
  //   });
  // }, [auth, navigate]);

  const Frame = ({account,count}) => {
    console.log(account + " " + count );
    return (
      <tr>
      <th scope="row">{account}</th>
      <td>{count}</td>
    </tr>
    );
  };

  return (
    <>
    <Helmet>
        <title>Sourceable | Dashboard</title>
      </Helmet>
      <div className="header  pb-5 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body"></div>
        </Container>
      </div>
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          {/* <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Month</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={countMonthYear["data1"]}
                    options={chartExample1_options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col> */}

          

          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">Types of Posts</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar data={countTypePost} options={chartExample2.options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="mb-0">Year</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={countMonthYear["data2"]}
                    options={chartExample1_options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="mb-0">Types of Accounts</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Bar
                    data={countTypeAccount}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* <Col xl="5">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Other Analysis</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Records</th>
                  </tr>
                </thead>
                <tbody>

                  {posts.map((data) => (
                    <Frame
                    account={data.account}
                           count={data.count}
                    //        age={data.Age}
                    />
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col> */}

          

          {/* <Col xl="8">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Country Based analysis
                    </h6>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div>
                  <div
                    ref={mapContainer}
                    style={{ height: "400px" }}
                    className="map-container"
                  >
                  
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col> */}
        </Row>

        {/* <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Page visits</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">/argon/</th>
                    <td>4,569</td>
                    <td>340</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/index.html</th>
                    <td>3,985</td>
                    <td>319</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/charts.html</th>
                    <td>3,513</td>
                    <td>294</td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                      36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/tables.html</th>
                    <td>2,050</td>
                    <td>147</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">/argon/profile.html</th>
                    <td>1,795</td>
                    <td>190</td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Social traffic</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Referral</th>
                    <th scope="col">Visitors</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>1,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-gradient-danger"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Facebook</th>
                    <td>5,480</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">70%</span>
                        <div>
                          <Progress
                            max="100"
                            value="70"
                            barClassName="bg-gradient-success"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Google</th>
                    <td>4,807</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">80%</span>
                        <div>
                          <Progress max="100" value="80" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>3,678</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">75%</span>
                        <div>
                          <Progress
                            max="100"
                            value="75"
                            barClassName="bg-gradient-info"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">twitter</th>
                    <td>2,645</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">30%</span>
                        <div>
                          <Progress
                            max="100"
                            value="30"
                            barClassName="bg-gradient-warning"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
};

export default Index;
