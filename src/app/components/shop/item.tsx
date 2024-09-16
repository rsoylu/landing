import Image from "next/image";

function Item({
  imagesrc,
  name,
  description,
}: {
  imagesrc: string;
  name: string;
  description: string;
}) {
  return (
    <div className="relative h-[550px] w-[300px] md:h-[700px] md:w-[400px]">
      <div className="absolute -left-10 -bottom-8 h-[550px] w-[300px] md:h-[700px] md:w-[400px] rounded-xl bg-neutral-200 z-0 hidden md:block"></div>
      <div className="relative z-10 h-full w-full bg-rose-200 flex flex-col rounded-xl justify-center items-center shadow-xl">
        <div className="h-[60%] w-[80%] mt-10 relative">
          <Image
            src={imagesrc}
            fill={true}
            alt="Flower image"
            className="object-cover"
          />
        </div>
        <div className="h-[10%] w-full text-center text-2xl md:text-3xl font-serif text-white pt-4 md:pt-8">
          {name}
        </div>
        <div className="h-auto w-full text-center px-5 text-md md:text-xl font-sans text-white pb-3">
          {description}
        </div>
        <div className="h-[5%] w-full text-center text-white font-sans mb-2 md:mb-0">
          <p>Buy</p>
        </div>
      </div>
    </div>
  );
}
export default Item;
