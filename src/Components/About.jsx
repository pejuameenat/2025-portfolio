const About = ({ currentElement, gradient, handleChangeTabs }) => {
  return (
    <>
      {currentElement === 1 && (
        <section>
          <div className="container lg:max-w-[1128px] lg:w-[80%] mx-auto py-24 min-h-screen px-4 lg:px-0 flex items-center">
            <div className="max-w-[600px] text-white">
              <h2 className="text-left font-bold text-4xl">About</h2>
              <p className="my-4 leading-7 text-sm">
                A great website isn’t just about looks, it’s about delivering a
                smooth and engaging
                <strong className="p-2 rounded-sm -skew-y-12">
                  user experience.
                </strong>
                Throughout my tech journey, I've become interested in what
                happens beyond the interface: how systems connect, how data
                flows between them and how frontend decisions influence the way
                people interact with a product.
                <br />
                That's why I focus on building intuitive and accessible
                experiences while thinking through the logic and workflows that
                make them work. I've shared some examples of how I approach
                problems, make technical decisions and collaborate with teams in
                my <em className='font-bold'>How I Think section</em> . When I’m not coding, I share
                my growth, challenges, and insights on Twitter, connecting with
                the tech community and learning along the way.
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="bg-[--color-blue-600] w-[150px] py-2 rounded-md font-bold hover:bg-[--color-blue-700] text-white   "
                  onClick={() => handleChangeTabs(4)}
                >
                  Hire Me
                </button>
                <button
                  type="button"
                  className="bg-transparent w-[150px] py-2 rounded-md border-2 border-[--color-blue-600] font-bold hover:bg-[--color-blue-700] hover:text-white transition-all duration-200 ease-in animate-bounce"
                  onClick={() => handleChangeTabs(3)}
                >
                  View Projects
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default About
