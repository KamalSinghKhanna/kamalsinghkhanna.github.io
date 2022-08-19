import reactImg from "../assets/img/react.png";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have skills in frontend related technologies, I have basic
                understanding of web and internet.
                <br></br>I am learning full stack web.
              </p>
              <div className="skill-slider">
                <div className="items">
                  <div className="item">
                    <img src={reactImg} alt="Images" />
                    <h5>React</h5>
                  </div>
                  <div className="item">
                    <img
                      src="https://www.graalvm.org/resources/img/javascript/javascript_logo.svg"
                      alt="Images"
                    />
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img
                      src="https://w7.pngwing.com/pngs/230/514/png-transparent-front-end-web-development-html-css-design-and-build-web-sites-cascading-style-sheets-stage-web-design-text-logo.png"
                      alt="Images"
                    />
                    <h5>Html & CSS</h5>
                  </div>
                  <div className="item">
                    <img
                      src="https://www.androidauthority.com/wp-content/uploads/2019/06/android-git-github-everything-you-need-to-know.png"
                      alt="Images"
                    />
                    <h5>Git & Github</h5>
                  </div>
                </div>
                <div className="items">
                  <div className="item">
                    <img
                      src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                      alt="Images"
                    />
                    <h5>node js</h5>
                  </div>
                  <div className="item">
                    <img
                      src="https://dev.java/assets/images/java-logo-vert-blk.png"
                      alt="Images"
                    />
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <img
                      src="https://cdn.mos.cms.futurecdn.net/i5TSKD2VVirrGsyqqwK4cG.jpg"
                      alt="Images"
                    />
                    <h5>Linux</h5>
                  </div>
                  <div className="item">
                    <img
                      src="https://www.gstatic.com/devrel-devsite/prod/v03524b055229ae2d7e36c2f7867401f3447503fd5c5c18fd5cdefd483b35c9b4/firebase/images/touchicon-180.png"
                      alt="Images"
                    />
                    <h5>Firebase</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Images" />
    </section>
  );
};
