import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <>
      <div className="relative w-full h-[70vh]">
        <div className="-z-10">
          <Image
            priority={true}
            src="/media/heroimg.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero image example"
            className="brightness-75"
          />
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="relative flex flex-col text-center w-[70%] ">
            <h1 className="text-5xl md:text-8xl wide:text-9xl font-serif">
              Why wait for nature?
            </h1>
            <p className="md:text-xl  wide:text-3xl font-playfair">
              Seasonal flowers delivered right to your doorstep.
            </p>
            <button className="relative top-8 font-playfair">
              <Link href="#shopflowers">Shop→</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
