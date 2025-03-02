import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const Contact = ({ currentElement }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const submitDetails = async (data) => {
    const SERVICE_ID = "service_es2lcac";
    const TEMPLATE_ID = "template_y84cxup";
    const PUBLIC_KEY = "vpQd-xeArS6vEHJOc";
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        data,
        PUBLIC_KEY
      );
      console.log("Email sent successfully", response.status, response.text);
      toast.success("Email sent successfully");
      reset(); //clear the  form
    } catch (error) {
      console.error("Failed to send:", error);
      toast.error("failed to submit form");
    }
  };
  return (
    <>
      {currentElement === 4 && (
        <section className="">
          <div className="container lg:max-w-[1000px] lg:w-[60%] mx-auto py-24 px-4 lg:px-0 ">
            <h2 className="text-[#333] font-bold text-4xl py-4">Contact Me</h2>
            <form onSubmit={handleSubmit(submitDetails)} className="">
              <div className="lg:flex gap-4 items-center">
                <div className="lg:w-[50%]">
                  <label htmlFor="from_name" className="block pt-2">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    {...register("from_name", { required: true })}
                    placeholder="Enter Name"
                    className="bg-emerald-50 p-3 w-full rounded-md outline-none focus:outline focus:outline-2 focus:outline-emerald-400"
                  />
                  {errors.from_name && <span className="text-red-600">First Name is required</span>}
                </div>
                <div className="lg:w-[50%]">
                  <label htmlFor="lastName" className="pt-2 block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter LastName"
                    className="bg-emerald-50  p-3 w-full rounded-md outline-none focus:outline focus:outline-2 focus:outline-emerald-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="reply_to" className="pt-2 block">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="reply_to"
                  {...register("reply_to", { required: true })}
                  placeholder="Enter Email"
                  className="bg-emerald-50  p-3 w-full rounded-md outline-none focus:outline focus:outline-2 focus:outline-emerald-400"
                />
                {errors.reply_to && <span className="text-red-500">Email is required</span>}
              </div>
              <div>
                <label htmlFor="message" className="pt-2 block">
                  Message<span className="text-red-600">*</span>
                </label>
                <textarea
                  {...register("message", { required: true })}
                  id="message"
                  placeholder="Your Message"
                  className="bg-emerald-50  p-3 w-full rounded-md outline-none focus:outline focus:outline-2 focus:outline-emerald-400 min-h-[110px]"
                />
                {errors.message && <span className="text-red-500">Message is required</span>}
              </div>
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-300 text-white block mx-auto rounded-md font-bold w-[200px] py-2 mt-4 transition duration-300 ease-in"
              >
                Submit details
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Contact;
