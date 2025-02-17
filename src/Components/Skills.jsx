import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiRedux,
  SiTypescript,
  SiGit,
  SiCloudflare
} from "react-icons/si";

const Skills = ({ currentElement }) => {
  const arr = [
    {
      id: 1,
      name: "html",
      icon: (
        <SiHtml5 className="block mx-auto  text-3xl text-black icon" />
      ),
    },
    {
      id: 2,
      name: "css",
      icon: <SiCss3 className="block mx-auto text-3xl text-black icon" />,
    },
    {
      id: 3,
      name: "javascript",
      icon: (
        <SiJavascript className="block mx-auto text-3xl text-black icon" />
      ),
    },
    {
      id: 4,
      name: "typescript",
      icon: (
        <SiTypescript className="block mx-auto text-3xl text-black icon" />
      ),
    },
    {
      id: 5,
      name: "reactjs",
      icon: (
        <SiReact className="block mx-auto text-3xl text-black icon" />
      ),
    },
    {
      id: 6,
      name: "tailwind Css",
      icon: (
        <SiTailwindcss className="block mx-auto text-3xl text-black icon" />
      ),
    },
    {
      id: 7,
      name: "API's",
      icon: (
        <SiCloudflare className="block mx-auto text-3xl text-black icon " />
      ),
    },
    
    {
      id: 8,
      name: "Redux",
      icon: (
        <SiRedux className="block mx-auto text-3xl text-black icon " />
      ),
    },
    {
      id: 9,
      name: "GIT",
      icon: (
        <SiGit className="block mx-auto text-3xl text-black icon " />
      ),
    },
    {
      id: 10,
      name: "Bootstrap",
      icon: (
        <SiBootstrap className="block mx-auto text-3xl text-black icon" />
      ),
    },
  ];
  return (
    <>
      {currentElement === 2 && (
        <section className="flex items-center justify-center">
          <div className="container lg:max-w-[1000px] lg:w-[70%] mx-auto mt-24 px-4 lg:px-0 ">
            <h2 className="text-[#333] text-4xl py-4 font-bold">My Skills</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {arr.map((item) => {
                return (
                  <article className=" rounded-md border border-zinc-400 shadow-lg hover:scale-110 transition duration-300 ease-in">
                    <div className="bg-emerald-300 p-4 relative h-[80px]">
                      <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  rounded-full w-[60px] h-[60px]">
                        <span className="mx-auto block mt-4">{ item.icon}</span></div>
                    </div>
                    <h3 className="text-center py-7 capitalize text-lg ">{item.name}</h3>
                  </article>
                )
                
              })}
            </div>
            {/* <article className="p-3 text-center border-2 border-blue-500 max-w-[400px] mx-auto mt-4">
             <SiRedux className="block mx-auto text-3xl text-emerald-400 iconald-400" />
            <p className="capitalize text-xl text-[#333]">Redux</p>
          </article> */}
          </div>
        </section>
      )}
    </>
  );
};

export default Skills;
