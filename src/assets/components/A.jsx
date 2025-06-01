   <div className="w-full h-screen custom-gradiant-bg text-white">
          <div className="container mx-auto">
            <Nav />
            <img
              src="/public/images/leap.png"
              className="w-[30rem] h-auto absolute z-20 right-0"
              alt="Product"
            />
          </div>

          <div className="container mx-auto">
            <div className="dew flex items-center justify-center w-full h-screen relative">
              <div className="product-image">
                <h1 className="text-white bg-gradient-to-b text-[20vw] fontSug font-extrabold uppercase leading-none relative select-none flex items-center justify-center">
                  <span className="text-letter-left">MTN</span>
                  <span className="relative inline-block ml-2 mr-2">
                    <span className="z-10 relative">D</span>
                    <span className="absolute inset-0 z-30 text-stroke pointer-events-none">
                      D
                    </span>
                  </span>
                  <span className="">EW</span>
                </h1>

                <div
                  className="transition-all duration-500 ease-in-out w-[20.7rem] h-[40rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mainDew "
                  alt="Product"
                ></div>

                <img
                  src="/public/images/Water-PNG.png"
                  className="w-[40rem] h-auto absolute water-image bottom-20 right-126 z-5 opacity-70 water-image transition-all duration-500 ease-in-out"
                  alt="Product"
                />
                <img
                  src="/public/images/lemonslic.png"
                  className="w-[17rem] h-auto lemonslic absolute top-2 right-126 z-10 transition-all duration-500 ease-in-out"
                  alt="Product"
                />
                <img
                  src="/public/images/leapcut.png"
                  className="w-[17rem] h-auto leapcut absolute z-10 top-60 -left-40 transition-all duration-500 ease-in-out"
                  alt="Product"
                />
                <img
                  src="/public/images/leaf2.png"
                  className="w-[10rem] h-auto absolute z-10 bottom-60 -right-25 leaf2 -rotate-80 transition-all duration-500 ease-in-out"
                  alt="Product"
                />
                <img
                  src="/public/images/lemon.webp"
                  className="w-[22rem] h-auto lemon absolute z-21 bottom-10 left-100 transition-all duration-500 ease-in-out"
                  alt="Product"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="tow custom2-gradiant-bg w-full h-screen">
          <div className="container grid grid-cols-2 gap-2 mx-auto px-6">
            <div className="lft-two">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="green"
                  d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="rght-two flex items-center">
              <div className="text-white">
                <h1 className="text-5xl fontSug mb-4">Flavour Updated</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam, excepturi sed, itaque placeat id natus soluta veniam
                  obcaecati qui a laborum laboriosam dolorem illum labore sit,
                  voluptates commodi neque dolores tempore temporibus deleniti?
                  Nobis, ratione hic error quis cum neque nulla laudantium nostrum
                  sit nihil dolorum quisquam enim quaerat, eaque ex sequi, harum
                  totam quia non! Labore, neque! Amet voluptatem illo similique
                  recusandae! Ex quaerat quibusdam asperiores, ducimus tempore
                  magni labore. Tenetur voluptas, quos ex repellendus provident
                  mollitia laboriosam adipisci alias a impedit, cum accusamus
                  rerum delectus eaque facilis veniam quia laborum incidunt ea
                  assumenda! Eos magni aspernatur quod distinctio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="three flex gap-12 justify-center items-center w-full min-h-screen custom-gradiant-bg py-12">
          {/* Left Card */}
          <div className="card bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center relative w-[26rem] min-h-[480px]">
            <img
              className="lemon lemon1 w-24 absolute -top-12 left-8"
              src="Assets/lemon.webp"
              alt=""
            />
            <img
              id="cocacola"
              className="w-56 mb-6 mt-16"
              src="/public/images/dew.png"
              alt=""
            />
            <h1 className="text-4xl font-bold mb-6">mojo</h1>
            <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition">
              Buy Now
            </button>
          </div>
          {/* Middle Card (Fanta) */}
          <div className="card bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center justify-end w-[26rem] min-h-[480px]">
            <div className="flex flex-col items-center w-full mt-auto">
              <h1 className="text-4xl font-bold mb-6">Fanta</h1>
              <button className="bg-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition">
                Buy Now
              </button>
            </div>
          </div>
          {/* Right Card */}
          <div className="card bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center relative w-[26rem] min-h-[480px]">
            <img
              className="lemon lemon2 w-24 absolute -top-12 right-8"
              src="Assets/lemon.webp"
              alt=""
            />
            <img
              id="pepsi"
              className="w-56 mb-6 mt-16"
              src="/public/images/dew.png"
              alt=""
            />
            <h1 className="text-4xl font-bold mb-6">mojo</h1>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Buy Now
            </button>
          </div>
        </div>