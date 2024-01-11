import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo
}

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:brijeshpeshvani38@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-12 md:mt-0">
        <h4 className="mt-16 lg:mt-24 text-2xl lg:text-4xl font-semibold text-center">
          I have got just what you need. &nbsp;
          <span className="block md:inline decoration-[#F7AB0A]/50 underline">
            Lets Talk.
          </span>
        </h4>

        {/* contact details */}
        <div className="space-y-6">
          {/* info-1 - phone */}
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-4 w-4 lg:h-7 md:w-7  animate-pulse" />
            <p className="text-xl lg:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>

          {/* info-2 - email */}
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-4 w-4 lg:h-7 md:w-7 animate-pulse" />
            <p className="text-xl lg:text-2xl">{pageInfo?.email}</p>
          </div>

          {/* info-3 - address */}
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-4 w-4 lg:h-7 md:w-7 animate-pulse" />
            <p className="text-xl lg:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        {/* contact form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:space-y-2 md:mx-auto md:w-fit h-52 md:h-auto">
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input {...register('name')}
              placeholder="Name"
              className="contactInput"
              type="text"
              name="user_name"
            />
            <input {...register('email')}
              placeholder="Email"
              className="contactInput"
              type="email"
              name="user_email"
            />
          </div>

          <input {...register('subject')}
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
          />

          <textarea {...register('message')}
            placeholder="Message"
            className="contactInput"
            name="message"
          />

          <button
            type="submit"
            className="h-8 md:h-auto bg-[#F7AB0A] md:py-5 md:px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
