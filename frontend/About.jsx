import React from "react";
import Iframe from "react-iframe";
import GoogleSvg from "./GoogleSvg";
import { NavLink } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
function About() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    behavior: "smooth";
  };
  return (
    <>
      {/* Hero Background */}
      <div className="relative isolate overflow-hidden pt-14">
            <img
              src="/AboutHero.jpg"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover filter opacity-90 brightness-[.65] "
            />

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  A Passion for Helping Others
                </h1>
                <p className="mt-6 text-xl leading-8 text-white/90">
                  With a blend of expertise, passion, and a touch of magic, I'm here to guide you on your journey to a pain-free and vibrant life.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <NavLink
                    to="/contact"
                    onClick={scrollToTop}
                    className="rounded-md  bg-gradient-to-br bg-cyan-900 from-cyan-400 to-cyan-600 hover:from-cyan-400/50 hover:to-cyan-600/50 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Book appointment
                  </NavLink>
                  
                </div>
              </div>
            </div>
          </div>

      {/* how your business helps clients */}
      <div className="relative isolate overflow-hidden bg-cyan-900/10 px-6 py-24 sm:py-32 lg:overflow-visible  mx-auto justify-center flex lg:px-0">
        <div className="absolute inset-0 -z-10 max-w-7xl   overflow-hidden"></div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-7xl">
                <p className="text-base font-semibold leading-7 text-cyan-600">
                  You're Valued
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  You Deserve the Best Care
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                  I help my clients by going through my toolbox of knowledge and
                  applying it to their specific needs. Ranging from stretching
                  and deep tissue, to sensory reflexes that help restart the
                  bodies natural healing capabilities
                </p>
              </div>
            </div>
          </div>
          <div className="flex   justify-center  p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className=" w-full max-h-[40rem] max-w-[30rem] min-w-[15rem] min-h-[15rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
              src="/DaniHeadshot.jpg"
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                  My Journey
                </h2>
                <p>
                  I have been a massage therapist since 2012. Having a passion
                  to help all my clients live their best life, has motivated me
                  to be a forever student. Once graduating massage school, all
                  my continued education revolved around pain relief and
                  restoring the body to its best healing capability. Along that
                  journey, my Mom had a bad car accident. This motivated me to
                  find a way to help her in conjunction with modern medicine. I
                  found applied kinesiology. It personally changed my life in
                  ways I never knew was possible and changed my moms life. Now I
                  am able to share all this knowledge and help other people
                  enjoy life again.
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 my-6">
                  Why Choose Me?
                </h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Pain Relief -
                      </strong>{" "}
                      I offer a thorough assessment and personalized techniques
                      to address your specific pain points. Whether it’s chronic
                      discomfort or acute pain, my methods provide immediate
                      relief and promote long-term healing. Using deep tissue
                      massage and sensory reflexes, I work to alleviate your
                      pain and enhance your quality of life.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Enhanced Athletic Performance -
                      </strong>{" "}
                      Whether you’re a professional athlete or a sports
                      enthusiast, my techniques can enhance your performance. By
                      focusing on muscle recovery, injury prevention, and
                      optimal biomechanics, I help you achieve your athletic
                      goals. Enhanced performance means training harder,
                      recovering faster, and competing at your best.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Enhanced Sleep Quality -
                      </strong>{" "}
                      Quality sleep is crucial for overall health and
                      well-being. My massage techniques reduce stress and
                      tension, improving your sleep quality. By promoting
                      relaxation and addressing discomforts that keep you awake,
                      I help you achieve deeper, more restorative sleep. Better
                      sleep increases energy, improves mood, and enhances daily
                      performance.
                    </span>
                  </li>
                </ul>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  Your Path to Healing Starts Here
                </h2>
                <p className="mt-6">
                  Choosing the right massage therapist is crucial for your
                  healing journey. I am dedicated to providing personalized,
                  compassionate care to help you achieve a pain-free, healthy
                  life. My goal is to work with you to unlock your body’s
                  natural healing powers and create a life that’s as joyful as
                  it is pain-free.
                </p>
                <p className="mt-6">
                  With years of experience and a deep commitment to your
                  well-being, I tailor each massage therapy session to your
                  unique needs, ensuring effective and lasting results. Whether
                  you're dealing with chronic pain, stress, or need to improve
                  your overall health, my customized approach can help you feel
                  your best. Let's embark on this journey together and transform
                  your health and happiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-cyan-900/10 pt-0 pb-24 sm:pb-24 text-center flex ">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <GoogleSvg />
          </div>

          <div className="relative overflow-hidden bg-gradient-to-b from-cyan-600 to-cyan-900 max-w-7xl px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <div className="absolute inset-0  " />

            <div className="relative mx-auto max-w-7xl lg:mx-0">
              <figure>
                <blockquote className="mt-6 text-lg  font-semibold text-white sm:text-xl sm:leading-8">
                  <p className="mx-5">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>

                {/* Make Components for these Svgs */}
                <div className="flex flex-row justify-between pt-6">
                  <button className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      className="w-8 h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <button className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#ffffff"
                      className="w-8 h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <figcaption className="mt-6 text-base text-white">
                  <div className="flex flex-row justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="font-semibold my-1">Client Name</div>
                  <div className="">Local Guide</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      {/* Dani stats  */}
      <div className="bg-cyan-900/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-cyan-600">
              Committed to Your Well-Being
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My expertise and goals
            </h1>

            <div className="mt-10 flex flex-col  justify-center max-w-2xl text-base leading-7 text-gray-900 lg:max-w-none lg:flex-row lg:gap-8">
              <div className="lg:w-1/2">
                <p>
                  Hello, I'm Dani Midkiff, a dedicated and passionate massage
                  therapist. My journey in massage therapy began in 2012, and
                  since then, I have been committed to helping my clients
                  achieve a pain-free and healthy life. My expertise encompasses
                  a wide range of therapeutic techniques designed to address
                  various types of pain and discomfort.
                </p>
                <p className="mt-8">
                  Please take a look at my video to learn more about my story
                  and how I can help you on your journey to healing.
                </p>
              </div>
              <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:relative lg:top-[-5rem]">
                <div className="relative aspect-w-16 aspect-h-9 w-full max-w-xl">
                  <iframe
                    className="absolute inset-0 lg:inset-5 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-teal-700">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/services.jpg"
            alt="picture of owner"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0  mix-blend-multiply"
          />
        </div>
        <div className="relative mx-auto max-w-md px-6 py-12 sm:max-w-7xl sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Discover Your Path to Wellness
            </p>
            <p className="mt-3 text-lg text-gray-00">
              Take the first step towards a pain-free and healthy life. Discover
              the wide range of services I offer, each designed to meet your
              unique needs and help you achieve optimal well-being. Whether
              you’re seeking relief from chronic pain, improved mobility, or
              overall relaxation, I’m here to support you.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <NavLink
                  to="/services"
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 bg-gradient-to-br from-gray-50 to-gray-400 px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-900/50"
                >
                  See My Services
                  <ArrowTopRightOnSquareIcon
                    className="-mr-1 ml-3 h-5 w-5 text-gray-900"
                    aria-hidden="true"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dani video/story */}
    </>
  );
}

export default About;
