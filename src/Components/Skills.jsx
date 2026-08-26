import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiTypescript,
  SiGit,
  SiCloudflare,
  SiNextdotjs,
  SiJest,
  SiFirebase,
} from "react-icons/si";

const Skills = ({ currentElement }) => {
  const arr = [
    {
      id: 1,
      name: 'html',
      icon: <SiHtml5 className="block mx-auto  text-3xl text-white icon" />,
    },
    {
      id: 2,
      name: 'css',
      icon: <SiCss3 className="block mx-auto text-3xl text-white icon" />,
    },
    {
      id: 3,
      name: 'javascript',
      icon: <SiJavascript className="block mx-auto text-3xl text-white icon" />,
    },
    {
      id: 4,
      name: 'reactjs',
      icon: <SiReact className="block mx-auto text-3xl text-white icon" />,
    },
    {
      id: 5,
      name: 'typescript',
      icon: <SiTypescript className="block mx-auto text-3xl text-white icon" />,
    },
    {
      id: 6,
      name: 'tailwind Css',
      icon: (
        <SiTailwindcss className="block mx-auto text-3xl text-white icon" />
      ),
    },

    {
      id: 7,
      name: "API's",
      icon: (
        <SiCloudflare className="block mx-auto text-3xl text-white icon " />
      ),
    },

    {
      id: 8,
      name: 'NextJs',
      icon: <SiNextdotjs className="block mx-auto text-3xl text-white icon" />,
    },
    {
      id: 9,
      name: 'Redux',
      icon: <SiRedux className="block mx-auto text-3xl text-white icon " />,
    },
    {
      id: 10,
      name: 'GIT',
      icon: <SiGit className="block mx-auto text-3xl text-white icon " />,
    },
    {
      id: 11,
      name: 'Firebase',
      icon: <SiFirebase className="block mx-auto text-3xl text-white icon" />,
    },
    {
      id: 12,
      name: 'Jest',
      icon: <SiJest className="block mx-auto text-3xl text-white icon" />,
    },
  ]
  return (
    <>
      {currentElement === 2 && (
        <section className="flex items-center justify-center text-white">
          <div className="container lg:max-w-[1100px] lg:w-[80%] mx-auto mt-24 px-4 lg:px-0 ">
            <h2 className=" text-4xl py-4 font-bold">My Skills</h2>
            <div className="grid grid-cols-2 lg:grid-cols-[repeat(4,minmax(150px,1fr))]  gap-10">
              {arr.map((item) => {
                return (
                  <article className=" rounded-md border border-zinc-400 shadow-lg hover:scale-110 transition duration-300 ease-in" key={item.id}>
                    <div className="bg-[--color-blue-300] p-4 relative h-[80px] rounded-md">
                      <div className="absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[--color-slate-900]  rounded-full w-[60px] h-[60px]">
                        <span className="mx-auto block mt-4">{item.icon}</span>
                      </div>
                    </div>
                    <h3 className="text-center py-7 capitalize text-lg">
                      {item.name}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Skills;
