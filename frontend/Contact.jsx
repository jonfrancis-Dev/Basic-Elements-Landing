import React from "react";
import Iframe from "react-iframe";

function Contact() {
  return (
    <>
      {/* <!-- Contact Information --> */}
      <div className="relative isolate bg-cyan-900/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Get in touch
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                I’m here to help you on your journey to a pain-free and healthy
                life. Whether you have questions about my services, need to
                schedule an appointment, or want to learn more about how I can
                assist you, please feel free to reach out. Your well-being is my
                top priority, and I look forward to connecting with you.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <svg
                      id="fi_3059446"
                      height="30"
                      viewBox="0 0 32 32"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 3"
                    >
                      <path d="m30.035 22.6c-.082-.065-6.035-4.356-7.669-4.048-.78.138-1.226.67-2.121 1.735-.144.172-.49.584-.759.877a12.517 12.517 0 0 1 -1.651-.672 13.7 13.7 0 0 1 -6.321-6.321 12.458 12.458 0 0 1 -.672-1.651c.294-.27.706-.616.882-.764 1.06-.89 1.593-1.336 1.731-2.118.283-1.62-4.005-7.614-4.05-7.668a2.289 2.289 0 0 0 -1.705-.97c-1.738 0-6.7 6.437-6.7 7.521 0 .063.091 6.467 7.988 14.5 8.025 7.888 14.428 7.979 14.491 7.979 1.085 0 7.521-4.962 7.521-6.7a2.283 2.283 0 0 0 -.965-1.7z"></path>
                    </svg>
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900 hover:underline"
                      href="tel:(304) 610-1947"
                    >
                      (304) 610-1947
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <svg
                      id="fi_2099199"
                      enable-background="new 0 0 512 512"
                      height="30"
                      viewBox="0 0 512 512"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981l-209.803-139.873c-1.164-.776-2.298-1.585-3.409-2.417v229.197c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133v-229.198c-1.113.834-2.249 1.645-3.416 2.422z"></path>
                      <path d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942l209.803-139.874c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117h-417.766c-25.98.001-47.117 21.137-47.117 47.142 0 15.085 7.496 29.085 20.05 37.45z"></path>
                    </svg>
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900 hover:underline"
                      href="mailto:basicelements15@gmail.com"
                    >
                      basicelements15@gmail.com
                    </a>
                  </dd>
                </div>

                <div className="flex gap-x-4 ">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <svg
                      height="40pt"
                      viewBox="0 1 511.99995 511"
                      width="22pt"
                      xmlns="http://www.w3.org/2000/svg"
                      id="fi_1865083"
                    >
                      <path d="m128.378906 272.066406h-22.960937c-6.023438 0-11.460938 3.585938-13.84375 9.109375l-63.5625 148.003907 150.953125-77.097657c-18.070313-25.003906-35.949219-52.582031-50.585938-80.015625zm0 0"></path>
                      <path d="m420.421875 281.175781c-2.378906-5.523437-7.820313-9.109375-13.839844-9.109375h-22.960937c-27.640625 51.796875-67.910156 105.324219-93.527344 134.773438-18.015625 20.664062-50.195312 20.640625-68.183594 0-1.839844-2.113282-11.445312-13.234375-24.675781-30.335938l-27.214844 13.90625 102.945313 102.746094 195.0625-101.125zm0 0"></path>
                      <path d="m9.441406 472.433594-8.210937 19.121094c-4.25 9.894531 3.03125 20.945312 13.839843 20.945312h221.050782c1.382812-1.027344 1.398437-.964844 8.820312-4.8125l-103.097656-102.882812zm0 0"></path>
                      <path d="m510.769531 491.554688-30.84375-71.820313-178.9375 92.765625h195.941407c10.785156 0 18.097656-11.03125 13.839843-20.945312zm0 0"></path>
                      <path d="m271.058594 135.824219c0-8.289063-6.757813-15.027344-15.058594-15.027344-8.304688 0-15.058594 6.738281-15.058594 15.027344 0 8.285156 6.753906 15.027343 15.058594 15.027343 8.300781 0 15.058594-6.742187 15.058594-15.027343zm0 0"></path>
                      <path d="m267.363281 386.117188c5.070313-5.820313 124.160157-143.578126 124.160157-238.273438 0-195.265625-271.046876-197.648438-271.046876 0 0 94.695312 119.089844 232.453125 124.160157 238.273438 6.003906 6.886718 16.734375 6.878906 22.726562 0zm-56.539062-250.292969c0-24.859375 20.265625-45.082031 45.175781-45.082031 24.90625 0 45.171875 20.222656 45.171875 45.082031 0 24.855469-20.265625 45.078125-45.171875 45.078125-24.910156 0-45.175781-20.222656-45.175781-45.078125zm0 0"></path>
                    </svg>
                  </dt>
                  <a
                    href="https://www.google.com/maps/place/Basic+Elements+Therapeutic+Massage/@38.3666208,-81.6954737,15z/data=!4m14!1m7!3m6!1s0x8848cd5720627c8b:0x3bf3855edbc2b4fb!2sBasic+Elements+Therapeutic+Massage!8m2!3d38.3666208!4d-81.6954737!16s%2Fg%2F11clsdnkmw!3m5!1s0x8848cd5720627c8b:0x3bf3855edbc2b4fb!8m2!3d38.3666208!4d-81.6954737!16s%2Fg%2F11clsdnkmw?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-gray-900"
                  >
                    <dd>
                      415 D St Suite 3,
                      <br />
                      South Charleston, WV 25303
                    </dd>
                  </a>
                </div>
              </dl>

              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.073366073073!2d-81.6976626846785!3d38.36662077964869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8848cd5720627c8b%3A0x3bf3855edbc2b4fb!2sBasic%20Elements%20Therapeutic%20Massage!5e0!3m2!1sen!2sus!4v1633663660006!5m2!1sen!2sus"
                width="100%"
                height="400"
                id="myId"
                className=" mt-10 border-2 border-black"
                display="initial"
                position="relative"
                allowFullScreen
              />
            </div>
          </div>

          {/* <!-- Contact form --> */}
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 sticky flex "
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-black/80 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-black/80 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-black/80 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-black/80 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-2 ring-inset ring-black/80 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md  bg-gradient-to-br from-cyan-400 to-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-600/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
