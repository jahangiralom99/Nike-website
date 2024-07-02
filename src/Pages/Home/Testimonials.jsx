import { useEffect } from "react";
import image from "../../assets/pngwing.com (2).png";
import Glide from "@glidejs/glide";

const Testimonials = () => {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <div>
      {/* <section className="relative isolate overflow-hidden border-b bg-black border-t px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#111827] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-20 grayscale"
            src={image}
            alt="Zilla Digital Logo"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <p>
                “I’m so impressed by how comfortable these sandals are. They are
                easy to put on with the Velcro strap and mold to my feet
                perfectly. The sizing is spot on with what I normally wear.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-16 w-16 rounded-full object-cover"
                src="https://i.ibb.co/930QCsj/Sierra.png"
                alt="blogger_image"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">Ashley Marie</div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx="1" cy="1" r="1"></circle>
                </svg>
                <div className="text-white">Blogger</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section> */}

      {/*<!-- Component: Slider with controls outside --> */}
      <div className="relative w-full glide-04">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <section
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="false"
                className="relative isolate overflow-hidden border-b bg-black border-t px-6 py-24 sm:py-32 lg:px-8"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#111827] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <img
                    className="mx-auto h-20 grayscale"
                    src={image}
                    alt="Zilla Digital Logo"
                  />
                  <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        “I’m so impressed by how comfortable these sandals are.
                        They are easy to put on with the Velcro strap and mold
                        to my feet perfectly. The sizing is spot on with what I
                        normally wear.”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <img
                        className="mx-auto border-2 border-[#15d798] h-16 w-16 rounded-full object-cover"
                        src="https://i.ibb.co/930QCsj/Sierra.png"
                        alt="blogger_image"
                      />
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="font-semibold text-white">
                          Ashley Marie
                        </div>
                        <svg
                          viewBox="0 0 2 2"
                          width="3"
                          height="3"
                          aria-hidden="true"
                          className="fill-gray-900"
                        >
                          <circle cx="1" cy="1" r="1"></circle>
                        </svg>
                        <div className="text-white">Blogger</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </li>
            <li>
              <section
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-once="false"
                className="relative isolate overflow-hidden border-b bg-black border-t px-6 py-24 sm:py-32 lg:px-8"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-[#111827] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <img
                    className="mx-auto h-20 grayscale"
                    src={image}
                    alt="Zilla Digital Logo"
                  />
                  <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                      <p>
                        “I love these shoes. SO manney of my friends had them
                        and I bought them because they swore by them. SO comfy.
                        The first time that I wore them was in downtown
                        Nashville and I did not get any blisters.I am going to
                        buy another pair soon!”
                      </p>
                    </blockquote>
                    <figcaption className="mt-10">
                      <img
                        className="mx-auto border-2 border-[#15d798] h-16 w-16 rounded-full object-cover"
                        src="https://i.ibb.co/930QCsj/Sierra.png"
                        alt="blogger_image"
                      />
                      <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                        <div className="text-[#15d798] font-bold">Ayana</div>
                        <svg
                          viewBox="0 0 2 2"
                          width="3"
                          height="3"
                          aria-hidden="true"
                          className="fill-gray-900"
                        >
                          <circle cx="1" cy="1" r="1"></circle>
                        </svg>
                        <div className="text-[#15d798] font-bold">
                          Lifestyle Influencer
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex items-center justify-center w-full gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-[#15d798] text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-[#15d798] text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
