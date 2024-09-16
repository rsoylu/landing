"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <div className="bg-white h-auto w-full py-28">
      <div className="text-4xl md:text-5xl wide:text-6xl font-playfair text-center text-rose-800 pb-16">
        Contact Us
      </div>
      <div className="w-[80%] md:w-[40%] m-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="font-playfair md:text-lg wide:text-xl"
        >
          <div className="mb-5 ">
            <label
              htmlFor="name"
              className="mb-3 block font-medium text-black "
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 font-medium  text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block font-medium text-black"
            >
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-gray-300 bg-white   py-3 px-6  font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="font-sans hover:bg-rose-700 rounded-md bg-rose-600 py-3 px-8 md:py-4 md:px-16 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
