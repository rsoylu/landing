import Image from "next/image";

function Review({
  imagesrc,
  text,
  name,
  title,
}: {
  imagesrc: string;
  text: string;
  name: string;
  title: string;
}) {
  return (
    <div className="h-[500px] w-[300px] md:w-[400px] bg-rose-200 flex flex-col rounded-xl justify-center items-center shadow-xl">
      <div className="h-[160px] w-[160px] md:h-[200px] md:w-[200px] my-10 relative">
        <Image
          src={imagesrc}
          fill={true}
          alt="Reviewer image"
          className="object-cover rounded-full"
        ></Image>
      </div>
      <div className="h-auto w-[80%] md:w-full text-center px-5 text-xl md:text-2xl font-sans text-white ">
        {"“" + text + "”"}
      </div>
      <div className="h-auto w-full text-center text-2xl font-serif text-white pt-8 font-bold">
        {name}
      </div>

      <div className="h-auto w-full text-center text-white font-sans ">
        {title}
      </div>
    </div>
  );
}
export default Review;
