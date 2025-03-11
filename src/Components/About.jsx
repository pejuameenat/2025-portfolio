const About = ({ currentElement , gradient, handleChangeTabs}) => {

  return (
    <>
      {currentElement === 1 && (
        <section className={`${gradient}`}>
          <div className="container lg:max-w-[1128px] lg:w-[80%] mx-auto py-24 min-h-screen px-4 lg:px-0 flex items-center">
            <div className="max-w-[500px] text-white">
              <h2 className="text-left font-bold text-4xl">About</h2>
              <p className="my-4 leading-7">
                A great website isn’t just about looks, it’s about delivering a
                smooth and engaging  <strong className="text-emerald-300 bg-black p-2 rounded-sm -skew-y-12">user experience</strong> . Through my tech journey,
                I’ve seen how many websites struggle with usability, making it
                harder for users to navigate and engage. That’s why I focus on
                building intuitive, accessible, and visually appealing web
                experiences that keep users engaged. When I’m not coding, I
                share my growth, challenges, and insights on Twitter, connecting
                with the tech community and learning along the way.
              </p>
              <div className="flex items-center gap-4">
              <button type="button" className="bg-emerald-600 w-[150px] py-2 rounded-md font-bold hover:bg-emerald-400 text-white   " onClick={()=>handleChangeTabs(4)}>Hire Me</button>
              <button type="button" className="bg-transparent w-[150px] py-2 rounded-md border-2 border-emerald-400 font-bold hover:bg-emerald-400 hover:text-white transition-all duration-200 ease-in animate-bounce" onClick={()=>handleChangeTabs(3)}>View Projects</button>

              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
