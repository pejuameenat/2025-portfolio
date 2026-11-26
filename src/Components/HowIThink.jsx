const HowIThink = ({ currentElement, handleChangeTabs }) => {
  const setContactTab = () => {
    handleChangeTabs(5)
  }
  return (
    <>
      {currentElement === 4 && (
        <section>
          <div className="py-24">
            <h1 className="text-white text-center font-bold text-2xl">
              Beyond the Interface
            </h1>
            <em className="text-white text-center font-bold block pb-5">
              How I approach problems, make technical decisions and bring
              product requirements to life.
            </em>
            <div className="max-w-[800px] bg-[#f2f2f2] shadow-xl rounded-xl p-4 mx-auto flex flex-col overflow-y-hidden h-full max-h-screen">
              <div className="overflow-y-auto flex-1 max-h-full">
                  <article>
                    <h2 className="font-bold">
                      Feature 01 - KYC Verification Workflow
                    </h2>
                    <h3 className="font-bold py-2">The Problem</h3>
                    <p className="pb-4">
                      Users needed to submit their personal information and
                      identification documents for verification. Uploaded images
                      had to retain their original aspect ratios to avoid
                      distortion that could affect administrative review.
                      <br />
                      <br /> Users also needed visibility into their
                      verification status and guidance on what to do when
                      changes or additional information were required.
                    </p>
                    <h2 className="font-bold">My approach</h2>
                    <p className="py-4">
                      Working from the product requirements, I mapped out how
                      the submission and review process should work for both
                      users and administrators, then translated that into the
                      interface and its different states. <br />
                      <br />I implemented the document submission flow, ensuring
                      uploaded images retained their proportions, and connected
                      verification statuses to the appropriate user-facing
                      states. This allowed users to track their progress and
                      take the necessary action when information needed to be
                      updated.
                      <br />
                      <br /> On the administrative side, I implemented the
                      review experience, allowing administrators to inspect
                      submitted information and open original documents in a
                      separate browser tab.
                    </p>
                    <h2 className="font-bold">The Result</h2>
                    <p>
                      A connected verification workflow that supported document
                      submission, administrative review and status updates,
                      giving both users and administrators the information and
                      actions they needed at each stage
                    </p>
                  </article>
                  <article>
                    <h2 className="font-bold pt-8 pb-2">
                      Feature 02 - Administrative Dashboard
                    </h2>
                    <h3 className="font-bold py-2">The Problem</h3>
                    <p>
                      Administrators needed an overview of the platform, with
                      relevant metrics and insights readily available so they
                      could understand activity and identify unusual patterns
                      without having to navigate through multiple sections.{' '}
                      <br />
                      <br />
                      The challenge was to deliver this efficiently while
                      maintaining consistency with the existing technology stack
                      and ensuring the information displayed accurately
                      reflected the backend data.
                    </p>
                    <h3 className="font-bold py-2">My Approach</h3>
                    <p>
                      I reviewed the available API documentation to understand
                      the data exposed by the backend and determine which
                      metrics would be meaningful to administrators. I then
                      mapped the available data to appropriate dashboard
                      components, including summary cards and charts.
                      <br />
                      <br /> I made technical decisions around the
                      implementation, balancing development time,
                      maintainability and compatibility with the existing stack.
                      I evaluated an existing dashboard solution that aligned
                      with our technologies rather than building every interface
                      element from scratch.
                      <br />
                      <br /> I also considered how administrators would interact
                      with less frequently visited sections. Instead of
                      requiring them to open these sections just to check for
                      pending items, I implemented count indicators that
                      highlighted when something needed their attention. This
                      helped administrators identify what required review and
                      prioritise their next actions.
                      <br />
                      <br /> During API integration, I examined the responses
                      against the expected data presentation and communicated
                      unusual or unexpected behaviour to the backend team for
                      clarification.
                    </p>
                    <h3 className="font-bold py-2">The Result</h3>
                    <p>
                      An administrative dashboard that brought key platform
                      metrics into one view while making pending reviews easier
                      to identify. This gave administrators a quicker overview
                      of platform activity and helped them direct their
                      attention to areas requiring action.
                    </p>
                  </article>
              </div>
              <div className="mt-3  text-[12px] flex justify-end">
                <div className="w-fit p-2 rounded-2xl text-[--color-blue-600] bg-[--color-blue-300]">
                  <p>Want to know more?</p>
                  <button type="button" onClick={setContactTab}>
                    Contact me →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
export default HowIThink
