import Link from "next/link";

function Item({
  type,
  typedescription,
  price,
  description,
}: {
  type: any;
  typedescription: any;
  price: any;
  description: any;
}) {
  const desclist = description.map((each: any) => <li>{each}</li>); //yes i know i need to assign a key to each thing but i cant be bothered
  return (
    <div className="h-auto w-[300px] md:w-[400px] bg-white  rounded-xl  shadow-xl ">
      <div className="h-full w-[80%] flex flex-col pl-10 gap-4">
        <div className="h-[10%] text-3xl font-serif text-rose-600 pt-4 md:pt-8 mt-2 md:mt-0">
          {type}
        </div>
        <div className="text-neutral-400">{typedescription}</div>
        <div className="flex flex-row items-end">
          <div className="text-red-500 text-5xl md:text-6xl font-bold">
            {price}
          </div>
          <div className="text-rose-400">
            <p>/month</p>
          </div>
        </div>
        <div className="text-xl text-white">
          <Link href="/buy">
            <button className="bg-rose-300 hover:bg-rose-400 px-12 md:px-24 py-4 rounded-xl">
              Select plan
            </button>
          </Link>
        </div>
        <hr className="border-rose-600 m-2"></hr>
        <div className="text-neutral-400 mb-4">
          <ul className=" flex flex-col gap-2 md:gap-4 list-disc pl-5">
            {desclist}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Item;
