import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/app/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        priority
        size="100vw"
        className="-z-10 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Connect with the Cosmic Architect
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Embark on a voyage through the digital cosmos and send your signals
            across the interstellar expanse. Whether you seek to forge
            partnerships in AI and web development, explore the mysteries of
            data-driven universes, or share stories of innovation, your messages
            are valued beacons in this vast frontier. Use the form below to
            transmit your thoughts through the celestial network, and await a
            response carried on waves of stardust.
          </p>
        </div>
        <Form></Form>
      </article>
    </>
  );
}
