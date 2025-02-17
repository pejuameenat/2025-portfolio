import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const Home = ({ currentElement, gradient }) => {
  return (
    <>
      {currentElement === 0 && (
        <section className={`transition-all duration-300 ease-in ${gradient}`}>
          <div className="container lg:max-w-[1128px] lg:w-[80%] mx-auto min-h-screen px-4 lg:px-0 flex items-center">
            <div className="lg:max-w-[500px]">
              <h1 className="text-4xl text-white my-2">
                Hi, I'm Sulaimon Aminat
              </h1>
              <span className="text-2xl text-white ">Frontend Developer</span>
              <p className="text-white my-5  leading-7">
                {" "}
                I’m a passionate Front-End Web Developer who brings ideas to
                life with clean, efficient code. Well-versed with HTML, CSS,
                JavaScript, Tailwind CSS, Bootstrap, and React, I create
                responsive, high-performance web solutions that are not just
                visually appealing but also deliver seamless user experiences.
              </p>
               <div className="social-links grid grid-cols-2 lg:grid-cols-3 lg:max-w-[400px] mb-4 gap-3">
                <button className="bg-white shadow-md rounded-md p-2 flex items-center gap-4 hover:scale-110 transition duration-300 ease-in">
                  <FaGithub className="text-emerald-400 w-10" />
                  <div className="flex items-center gap-1 ">
                    <a
                      href="https://github.com/pejuameenat"
                      aria-label="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <FiExternalLink className="w-3" />
                  </div>
                </button>
                <button className="bg-white shadow-md rounded-md p-2 flex items-center gap-4 hover:scale-110 transition duration-300 ease-in">
                  <FaLinkedin className="text-emerald-400 w-10" />
                  <div className="flex items-center gap-1">
                    <a
                      aria-label="linkedin-ink"
                      href="https://www.linkedin.com/in/aminat-sulaimon/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <FiExternalLink className="w-3" />
                  </div>
                </button>

                <button className="bg-white shadow-md rounded-md p-2 flex  items-center gap-4 hover:scale-110 transition duration-300 ease-in">
                  <FaTwitter className="text-emerald-400" />
                  <div className="flex items-center gap-1">
                    <a
                      aria-label="twitter-link"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    <FiExternalLink className="w-3" />
                  </div>
                </button>
              </div> 
              {/* {['View My Work', 'My Projects'].map((item) => {
                          return <button type="button" className="bg-gradient-to-tr from-purple-500 via-white to-white py-3 px-2 mr-4 rounded-md">{ item}</button>
                      })} */}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
