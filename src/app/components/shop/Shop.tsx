import Item from "./Item";
import Link from "next/link";

function Shop() {
  return (
    <div
      id="shopflowers"
      className="w-full h-auto bg-white flex flex-col items-center gap-6"
    >
      <div className="w-[80%] h-[300px] text-center text-neutral-400 pt-[90px] font-serif">
        <h1 className="text-2xl md:text-5xl wide:text-6xl font-playfair">
          「 Celebrate life’s moments with a touch of color 」
        </h1>
        <h1 className="md:text-xl wide:text-2xl py-6 font-playfair">
          Take a look at our selection of flower arrangements ready to be
          delivered to your event or home.
        </h1>
      </div>
      <div className="flex flex-wrap w-full h-[60%] justify-center gap-16 md:gap-32">
        <Item
          imagesrc="/media/flower-item-1.jpg"
          name="Moonlit Elegance"
          description="White orchids and blue hydrangeas paired with silvery foliage create an ethereal, moonlit-inspired arrangement."
        />
        <Item
          imagesrc="/media/flower-item-2.jpg"
          name="Sunset Symphony"
          description="Bold orange dahlias, red roses, and yellow sunflowers bring the warmth and energy of a sunset to life."
        />
        <Item
          imagesrc="/media/flower-item-3.jpg"
          name="Whispering Meadows"
          description="A serene mix of lavender roses, pink peonies, and white lilies, accented with eucalyptus and baby's breath for a soft, calming touch."
        />
      </div>
      <div className="w-full h-[70px] text-rose-300 font-sans  text-md md:text-2xl py-[40px] mb-8 text-center">
        <Link href="">
          <h1>SEE MORE→</h1>
        </Link>
      </div>
    </div>
  );
}
export default Shop;
