import { useState, useEffect } from "react";
import "./Description.css";
import Popup from "../Popup/Popup";

const Description = ({ project }) => {
  return (
    <div>
      <div className="bodyDesc">
        <main className="mainDesc">
          <div className="cardDesc">
            <div className="cardDesc__title"></div>
            <div className="cardDesc__body">
              <div className="halfDesc">
                <div className="featured_textDesv">
                  <h1>{project.name}</h1>
                  <p className="subDesc">{project.description}</p>
                </div>
                <div className="imageDesc">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="halfDesc">
                <div className="descriptionDesc">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero voluptatem nam pariatur voluptate perferendis,
                    asperiores aspernatur! Porro similique consequatur, nobis
                    soluta minima.
                    <br />
                    <br />
                  </p>
                  <p>
                    <a href={project.html_url} className="repolinkDesc">
                      Github Repo
                    </a>
                  </p>
                </div>
                <span className="stockDesc">
                  Total Collection <br />
                  <br />
                </span>
                <div className="reviewsDesc">
                  <ul className="starsDesc">
                    <li>$0</li>
                  </ul>
                  <span>
                    <br />
                    <br />
                  </span>
                </div>
                Details <br />
                <br />
                <div className="reviewsDesc">
                  <ul className="starsDesc">
                    <li>$0</li>
                  </ul>
                  <span>
                    From total 0 contributors
                    <br />
                    <br />
                  </span>
                </div>
                <div className="reviewsDesc">
                  <ul className="starsDesc">
                    <li>$0</li>
                  </ul>
                  <span>
                    Lifetime CLR Matching
                    <br />
                    <br />
                  </span>
                </div>
              </div>
            </div>
            <div className="cardDesc__footer">
              <div className="recommendDesc">
                <p>By</p>
                <img
                  src={project.owner.avatar_url}
                  alt="owner"
                  className="ownerDesc"
                ></img>
                <a href={project.owner.html_url} target="blank">
                  <h3>{project.owner.login}</h3>
                </a>
              </div>
              <div className="actionDesc">
                <div className="tagContainDesc">
                  <div className="tagsDesc">tag 1</div>
                  <div className="tagsDesc">tag 2</div>
                </div>
                <button type="button">Contribute</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Description;
