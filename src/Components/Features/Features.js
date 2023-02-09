import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { size } from "underscore";
import Sup0 from "../../images/sup_1.png";
/*import Sup3 from '../../images/sup_3.png';*/
import Sup4 from "../../images/sup_2.png";
import Sup2 from "../../images/sup_4.png";
import "./Feature.css";

const Features = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="containerFeature">
      <div className="above">
        <div>
          <div className="extra">
            <div className="extra_1">
              <h1>Our Pilot Project</h1>
              <p>
                Hello from team Sourceable, a startup empowering citizen
                journalists to tell their stories to the world from places of
                conflict and crisis.
                <br />
                <br />
                The 7.8 magnitude Kahramanmaras earthquakes last Monday, have
                devastated the most vital members of our Sourceable team: our
                citizen journalists on the ground in Syria and Turkey. One of
                our journalists in northern Syria, Ahmed, (name changed for his
                protection), lost several members of his family and his home.
                Despite the risks to his personal safety and the extremely cold
                temperatures, he continues to document the events so the world
                can see the tragedies as they unfold.
                <br></br>
                Another of our citizen journalists, Ahmed, is a Syrian refugee
                living in Gaziantep, Turkey. He also lost his home on Monday,
                and is now displaced with his wife and four young children.
                Ahmed is documenting the aftermath of the earthquakes live,
                which you can view his journey here: sourceable.info/explore
                <br />
                Sourceable is grounded on the ideals and bravery of our citizen
                journalists, and we especially seek to support them in this
                time.
              </p>
              <div style={{ paddingLeft: "60px" }}>
                <b
                  style={{
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  All donations collected from this fundraiser will go directly
                  to our citizen journalists, enabling them to access vital aid
                  and support them in rebuilding their lives. We are currently
                  supporting the livelihoods of 10 citizen journalists in Syria
                  and Turkey. All of them have been severely impacted by this
                  crisis.
                </b>
              </div>
              <p>
                On February 6, 2023, powerful earthquakes struck the region
                encompassing southeast Turkey and northwest Syria. With the
                death toll already over 3,500, it is expected to rise, with
                aftershocks, harsh winter weather, and loss of vital public
                infrastructure hampering rescue efforts.
                <br />
                In Syria, already devastated by over a decade of civil war, the
                earthquake has greatly impacted the communities of 4.1 million
                people, many of them displaced by the conflict and living in
                camps, that already depend on vital cross-border humanitarian
                aid. According to the UN, such aid and international support
                efforts in northwest Syria are already deeply underfunded and
                struggling to cope. The earthquake represents the latest event
                to affect the Syrian communities displaced by civil war and
                affected by cholera and severe winter conditions.
              </p>
            </div>

            <div className="extra_2">
              <a href="https://gofund.me/462fbdac">
                <button
                  style={{
                    height: "80px",
					width:"200px",
					borderRadius:"25px",
					backgroundColor:"#D8CE58",
					fontWeight:"bolder",
					borderWidth:0,
					
					
                  }}
                >
					<h2><b style={{fontFamily:"bold"}}>
                  Support US
				  </b></h2>
                </button>
              </a>
            </div>
            <div className="extra_2">
              <h1>Our Partners and Supporters</h1>
              <div>
                <img src={Sup2} alt="Sup2 not loaded" />
                <img src={Sup4} alt="Sup4 not loaded" />
                <img src={Sup0} alt="Sup1 not loaded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
