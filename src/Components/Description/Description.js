import "./Description.css";
import Popup from 'reactjs-popup';
import Verify from '../Verify/Verify';
import $ from 'jquery';
import axios from 'axios';
import React, { useState }  from 'react';

const Description = ({ project }) => {
 
  const [blurb, setBlurb] = useState("");
  const [avatar, setAvatar] = useState("");


 const click = () => {
  $('.mainDesc').css("filter","blur(3px)");
 }

 const getInfo = async () => {
  if(project.title !== "")
   { const users = await axios({
      url: `https://api.github.com/repos/${project.githubLink}/${project.title}`,
      method: 'get',
    });
    setBlurb(users.data.description);
    setAvatar(users.data.owner.avatar_url)
  }
   };


   React.useEffect(() => {
     getInfo();
   },[])

  return (
    <div>
      <div className="bodyDesc">
        <main className="mainDesc">
          <div className="cardDesc">
            <div className="cardDesc__title"></div>
            <div className="cardDesc__body">
              <div className="halfDesc">
                <div className="featured_textDesv">
                  <h1>{project.title}</h1>
                  <p className="subDesc">{project.pitch}</p>
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
                   {blurb}
                    <br />
                    <br />
                  </p>
                  <p>
                    <a href={`https://github.com/${project.githubLink}/${project.title}`} className="repolinkDesc" target="_blank" rel="noopener noreferrer">
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
                  src={avatar !== "" ? avatar : null}
                  alt="owner"
                  className="ownerDesc"
                ></img>
                <a href={(project.githubLink != "") ? `https://github.com/${project.githubLink}/` : ""} target="_blank" rel="noreferrer">
                  <h3>{project.githubLink}</h3>
                </a>
              </div>
              <div className="actionDesc">
                <div className="tagContainDesc">
                  <div className="tagsDesc">{project.category}</div>
                </div>
                <Popup trigger={<button>Contribute </button>} onOpen = {click} closeOnEscape = {false} closeOnDocumentClick= {false} modal id="pop">
                <Verify />
                </Popup>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Description;
