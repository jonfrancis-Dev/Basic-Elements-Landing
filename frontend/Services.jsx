import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "30 minutes",
    id: "Thirty minutes",
    href: "/contact",
    priceMonthly: "$60",
    description: "A small session to get you started.",
    features: ["feature one", "feature two", "feature three", "feature four"],
    mostPopular: false,
  },
  {
    name: "60 minutes",
    id: "Sixty minutes",
    href: "/contact",
    priceMonthly: "$120",
    description:
      "Our most popular session which gives optimal time for desired outcome.",
    features: ["feature one", "feature two", "feature three", "feature four"],
    mostPopular: true,
  },
  {
    name: "90 minutes",
    id: "Ninety minutes",
    href: "/contact",
    priceMonthly: "$150",
    description:
      "A longer session for those who need a little extra time to get things done.",
    features: ["feature one", "feature two", "feature three", "feature four"],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const services = [
  {
    id: 1,
    title: "Injury prevention",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 2,
    title: "Sleep optimization",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 3,
    title: "Headache relief",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 4,
    title: "Injuries",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 5,
    title: "Arthiritis",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 6,
    title: "Recovery",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  // More posts...
];

function Services() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    behavior: "smooth";
  };
  return (
    <>
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="/services.jpg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover brightness-[.65]"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Comprehensive Massage Therapy Services for Everyone
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Whether you're dealing with chronic pain, seeking relief from
              stress, or looking to enhance your overall well-being, we have the
              perfect massage therapy services tailored to meet your unique
              needs.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing */}

      <div className="bg-cyan-900/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-cyan-600">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Affordable and Transparent Pricing
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
            We believe in providing high-quality massage therapy services that
            are accessible to everyone. Our pricing is straightforward and
            transparent, ensuring you know exactly what to expect. Discover the
            value of personalized care tailored to your unique needs without any
            hidden costs.
          </p>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "lg:z-10 lg:rounded-b-no ring-cyan-400 ring-4 "
                    : "lg:mt-8",
                  tierIdx === 0 ? "lg:rounded-r-none" : "",
                  tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                  "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-900 xl:p-10"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.mostPopular ? "text-cyan-600" : "text-gray-900",
                        "text-lg font-semibold leading-8"
                      )}
                    >
                      {tier.name}
                    </h3>
                    {tier.mostPopular ? (
                      <p className="rounded-full bg-cyan-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-cyan-600">
                        Most popular
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.priceMonthly}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600"></span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-cyan-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <NavLink
                  to={tier.href}
                  onClick={scrollToTop}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-cyan-600 text-white shadow-sm hover:bg-cyan-600/50"
                      : "text-gray-600 ring-1 ring-inset ring-gray-900 bg-gray-50 hover:ring-gray-900/50",
                    "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  Book now
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}

      <div className="bg-cyan-900/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Services
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-900">
              Take a look at our services and see how we can help you.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-[30rem] lg:shrink-0">
                    <img
                      src={service.imageUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs"></div>
                    <div className="group relative max-w-4xl">
                      <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={service.href}>
                          <span className="absolute inset-0" />
                          {service.title}
                        </a>
                      </h3>
                      <p className="mt-5 pb-4 text-base leading-6 text-gray-900">
                        {service.description}
                      </p>
                    </div>
                    <NavLink
                      to="/contact"
                      className="rounded bg-gradient-to-br from-cyan-400 to-cyan-600 px-2 py-1 text-sm font-semibold text-gray-50 shadow-sm hover:from-cyan-400/50 hover:to-cyan-600/50"
                    >
                      See More
                    </NavLink>
                    <div className="mt-6 flex border-t border-gray-900/20 pt-6"></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA to contact page */}
      <div className="relative bg-teal-700">
        <div className="relative h-56 bg-cyan-900/10 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="/BasicElementsOutside.png"
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
              Get in Touch with Me
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Have questions or ready to book your first session? Visit my
              Contact page to reach out. I'm here to provide personalized care
              and support on your journey to a pain-free life. Whether you need
              more information or want to schedule an appointment, I'm just a
              message away.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <NavLink
                  to="/contact"
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center rounded-md  bg-gray-900 bg-gradient-to-br from-gray-50 to-gray-400 px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-900/50"
                >
                  Get in touch
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
    </>
  );
}

export default Services;
