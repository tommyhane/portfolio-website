"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading(
      "Beaming your signal through the celestial network, stand by..."
    );
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // you can not send more then 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success(
            "Your signal has reached my orbit, expect a response across the void soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error(
            "Transmission disrupted by a cosmic storm, please retry later!",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Tommy Hane",
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "This starfield must be charted to proceed",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent ">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "This starfield must be charted to proceed",
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent ">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          placeholder="Message"
          {...register("message", {
            required: "This starfield must be charted to proceed",
            maxLength: {
              value: 500,
              message:
                "Signal must not exceed 500 units of celestial bandwidth",
            },
            minLength: {
              value: 50,
              message: "Signal must carry at least 50 units of cosmic data",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent ">
            {errors.message.message}
          </span>
        )}
        <motion.input
          variants={item}
          value="Transmit Signal"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </motion.form>
    </>
  );
}
