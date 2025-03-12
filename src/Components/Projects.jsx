import { projects } from "../../src/utils";
import { FaGithub } from "react-icons/fa6";
const Projects = ({ currentElement }) => {
  return (
    <>
      {currentElement === 3 && (
        <section className="">
          <div className="container lg:max-w-[1128px] lg:w-[80%] mx-auto py-24 px-4 lg:px-0 ">
            <h2 className="text-[#333] text-4xl font-bold">Projects</h2>
            <p className="my-4  lg:max-w-[700px]">Every Project has a story behind it, so i hope they excite you as much as they excite me! One of my favorites is the Memory Challenge Game, inspired by a game from a show that I saw.</p>
            <div className="grid lg:grid-cols-3 gap-4 mt-20 items-stretch">
              {projects.map((item, index) => {
                return (
                  <div className={` services-image relative ${index ===0? 'lg:col-span-2':''}`} key={item.id}>
                    <img
                      src={item.image}
                      alt={item.altText}
                      className="max-w-full h-full object-cover rounded-xl"
                    />
                    <div className="overlay absolute inset-0 w-full h-[0%] opacity-0 rounded-xl">
                      <div className="overlay-inner mx-auto my-[1.5rem] p-[.5rem] ">
                        <h2 className="text-xl">{item.h2}</h2>
                        <p className="text-[.85rem] py-[.5rem] " >{item.p}</p>
                        <div className="flex">
                        <a className="cursor-pointer text-black w-[120px] mt-[1.2rem] p-[.5rem] rounded-[5px] border no-underline "
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                        <a className="cursor-pointer text-black mt-[1.2rem] p-[.5rem] rounded-[5px] border no-underline"
                          href={item.gitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub/>{" "}
                        </a>

                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
