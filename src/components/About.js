import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Tim from "../img/Tim.jpg";
import Zach from "../img/Zach.jpeg";

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <main>
        <div className="main" id="about">
          <section className="abt" id="abt-church">
            <h3>Christ Fellowship</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore accusantium et debitis hic veniam officia fugit ipsa
              eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
              facilis dolorum quas sed libero numquam tempore quibusdam error
              sit? Incidunt dicta laudantium aspernatur quos!
            </p>
          </section>
          <section className="abt" id="abt-mission">
            <h3>Mission & Values</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore accusantium et debitis hic veniam officia fugit ipsa
              eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
              facilis dolorum quas sed libero numquam tempore quibusdam error
              sit? Incidunt dicta laudantium aspernatur quos!
            </p>
          </section>
          <section className="abt" id="abt-statement">
            <h3>Statement of Faith</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore accusantium et debitis hic veniam officia fugit ipsa
              eius quos, ab voluptate voluptatibus sunt aliquid necessitatibus
              facilis dolorum quas sed libero numquam tempore quibusdam error
              sit? Incidunt dicta laudantium aspernatur quos!
            </p>
          </section>
          <section className="abt" id="abt-expect">
            <h3>What to Expect</h3>
            <p>
              Our meeting time consists of hearing from God and responding to
              him. We do this by...
            </p>
            <ul>
              <li>
                <span className="strong">PUBLIC READING OF SCRIPTURE</span>:
                God’s Word is central to what we do. The Bible is not only the
                foundation for what we do, but the very content of our time
                together. In gathering with us, expect to read the Bible, pray
                in response to what we hear from the Bible, sing songs that are
                biblically grounded, hear the Bible preached, and respond to
                what we hear from the Bible with faithful obedience.
              </li>
              <li>
                <span className="strong">PUBLIC COMMUNITY PRAYER</span>: We take
                time each week to devote ourselves to prayer (Acts 1:14). We
                focus in as a community on one issue, person, etc. to make the
                focus of our prayer as a community.
              </li>
              <li>
                <span className="strong">SINGING</span>: We sing old songs and
                new songs, hymns and choruses. We sing songs that fit into each
                of these categories. Our aim is to ensure that they are
                theologically true to Scripture, raise our affections to God,
                and help our minds meditate on truth.
              </li>
              <li>
                <span className="strong">PREACHING</span>: Taking time each week
                to focus in on a particular passage of Scripture is central to
                all we do. Our preaching is driven by the following convictions:
                <span className="italics">
                  1) We believe the Bible is the holy, inspired, and inerrant
                  Word of God.
                </span>
                Therefore, we seek in our preaching simply to proclaim God’s
                Word after Him. Due to this, we preach expositionally, seeking
                to make the points, claims, or main statements of the sermon
                align themselves with those points, claims, and statements which
                the text itself communicates.
                <span className="italics">
                  2) We believe the whole counsel of God should be preached.
                </span>{" "}
                We preach through books of the Bible so that all of the Bible
                can be examined, not skipping portions that seem difficult.{" "}
                <span className="italics">
                  3) We strive to proclaim the gospel in all that we do.
                </span>
                Jesus says that all of Scripture points to Him (John 5:39). In
                Jesus we find eternal life, not simply in knowing our Bibles.
                Therefore, in all we do we connect how the Bible points us to
                Jesus and the life we have through Him and His gospel.
              </li>
              <li>
                <span className="strong">LORD’S SUPPER</span>: Each week we take
                time to respond to what we have heard from God by taking
                communion together. By taking the bread and the cup together, we
                proclaim that our faith and hope is set alone on Jesus, the
                second person of the Trinity, for our salvation and security
                with God.
              </li>
            </ul>
            <p>
              After our time of worship together, we have an open ended time of
              fellowship. We spend time talking, praying, eating, and enjoying
              each others company.
            </p>
          </section>
          <section className="abt" id="abt-elders">
            <h3>The Leaders</h3>
            <div className="elder">
              <h4>Timothy O'Day</h4>
              <div className="img-container">
                <img src={Tim} alt="A portrait of Timothy O'Day" />
              </div>
              <p>
                Timothy is husband to Haley, father to Julia and Elias, and
                serves as a pastor of Christ Fellowship Church. He received a BA
                in Biblical Studies and Biblical Languages from Union University
                in 2010, an M.Div from The Southern Baptist Theological Seminary
                in 2016, and served as a pastoral apprentice at Cornerstone
                Community Church in Jackson, TN. He enjoys spending time with
                his family, running, biking, reading, and connecting truth to
                everyday life. You can follow him on twitter @Timothy_ODay and
                his blog SendtheOdays.com.
              </p>
            </div>
            <div className="elder">
              <h4>Zach Thompson</h4>
              <div className="img-container">
                <img src={Zach} alt="A portrait of Zach Thompson" />
              </div>
              <p>
                Zach is married to Courtney and has two daughters, Lana and
                Hope. After graduating from Union University with a Bachelor of
                Arts in History and Biblical Languages, he participated in a
                pastoral training and education program in West Tennessee. He
                now owns and operates a remodeling company based in American
                Fork, Utah.
              </p>
            </div>
          </section>
          <section className="abt" id="abt-location">
            <h3>Lehi, UT</h3>
            <p>
              Lehi is in great need of gospel proclamation and gospel presence,
              which is why our vision is to start a gospel movement in northern
              Utah County, not just a single local church. Our desire is to
              start this movement by spreading the gospel broadly and
              consistently, to see a church come into existence through
              evangelism, and to raise up leaders to the end that more churches
              come into existence. With only 1 evangelical church for every
              20,300 people in the metro, this area is not simply in need of one
              new church community but many, which will only come with deep
              gospel saturation.
            </p>
          </section>
        </div>
        <div className="sidebar">
          <Sidebar
            links={[
              { text: "Christ Fellowship", href: "#abt-church" },
              { text: "Leadership", href: "#abt-elders" },
              { text: "Lehi, UT", href: "#abt-location" },
              { text: "Mission", href: "#abt-mission" },
              { text: "Beliefs", href: "#abt-statement" },
              { text: "Service", href: "#abt-expect" }
            ]}
          />
        </div>
      </main>
    );
  }
}
