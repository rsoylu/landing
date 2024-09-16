import Item from "./item";

function Plans() {
  return (
    <div id="plans">
      <div className="w-full h-auto  bg-rose-200 flex flex-col z-10 bg-planbg bg-cover">
        <div className="w-full h-auto my-14 md:my-20 text-center text-rose-800 font-serif z-30">
          <h1 className="text-3xl md:text-5xl wide:text-6xl font-playfair">
            Pick a plan that suits your needs!
          </h1>
        </div>
        <div className="flex flex-wrap w-full h-[60%] justify-center gap-12 md:gap-20 z-30 pb-[100px]">
          <Item
            type="Basic"
            typedescription="Simple yet elegant floral arrangements for everyday charm."
            price="$29.99"
            description={[
              "Monthly delivery",
              "Classic seasonal flowers",
              "Small arrangement size",
            ]}
          />
          <Item
            type="Premium"
            typedescription="Luxurious floral designs for those who appreciate variety and flair."
            price="$74.99"
            description={[
              "Weekly delivery",
              "Exotic and rare blooms",
              "Medium arrangement size",
            ]}
          />
          <Item
            type="Deluxe "
            typedescription="A lavish floral experience with exclusive, handpicked flowers and artistic designs."
            price="$119.99"
            description={[
              "Bi-weekly delivery",
              "Premium flower selection (orchids, roses, etc.)",
              "Large arrangement size",
              "Customizable arrangements",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default Plans;
