import Faq from "../components/Faq";
import { NavLink } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import PainRelief from "../components/PainRelief";
import MobilityIcon from "../components/MobilityIcon";
import PostureIcon from "../components/PostureIcon";
import CalmIcon from "../components/CalmIcon";
import SensoryIcon from "../components/SensoryIcon";
import WellbeingIcon from "../components/WellbeingIcon";

const features = [
  {
    name: "Pain Relief",
    description:
      "Detailed assessment and application of appropriate techniques",
    icon: PainRelief,
  },
  {
    name: "Improved flexibility and mobility",
    description: "Assisted stretching and joint movement",
    icon: MobilityIcon,
  },
  {
    name: "Better Posture",
    description:
      "Muscle balance for both the front and back of the body, bringing the brain out of flight or fight mode",
    icon: PostureIcon,
  },
  {
    name: "Calm Mind",
    description:
      "The body and brain need to work together, releasing stuck emotions increases their communication and lets the body return to its natural pain free state",
    icon: CalmIcon,
  },
  {
    name: "Primal Survival Systems",
    description:
      "Utilizing sensory receptor based therapy to help restore nervous system function",
    icon: SensoryIcon,
  },
  {
    name: "Overall Well-Being",
    description:
      "A full body approach to find the root cause of dysfunction allows the brain to focus on healing where it is needed and not on old injuries it believes is still an issue.",
    icon: WellbeingIcon,
  },
];
const blogPosts = [
  {
    id: 1,
    title: "Blog 1",
    href: "#",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { name: "Article", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: {
      name: "Fname Lname",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "6 min",
  },
  {
    id: 2,
    title: "Blog 2",
    href: "#",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { name: "Video", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    author: {
      name: "Fname Lname",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "4 min",
  },
  {
    id: 3,
    title: "Blog 3",
    href: "#",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { name: "Case Study", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    author: {
      name: "Fname Lname",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    readingLength: "11 min",
  },
];

export default function PotentialDesign() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    behavior: "smooth";
  };
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          {/* Hero section with image */}
          <div className="relative isolate overflow-hidden pt-14">
            <img
              src="/HomeBackground.jpg"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover filter opacity-90 brightness-[.65] "
            />

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Where healing meets happiness
                </h1>
                <p className="mt-6 text-xl leading-8 text-white/90">
                  Our therapeutic massage treatments help you break free from
                  discomfort and embrace a pain-free life. Let’s team up and
                  make pain a thing of the past.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <NavLink
                    to="/contact"
                    onClick={scrollToTop}
                    className="rounded-md  bg-gradient-to-br bg-cyan-900 from-cyan-400 to-cyan-600 hover:from-cyan-400/50 hover:to-cyan-600/50 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Book appointment
                  </NavLink>
                  <NavLink
                    to="/about"
                    onClick={scrollToTop}
                    className="text-sm font-semibold leading-6 text-gray-50/90 hover:text-gray-50/50"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Feature section with screenshot */}
          <div className="relative bg-cyan-900/10 py-16 sm:pt-24 lg:py-32  flex r ">
            <div className="mx-auto max-w-md px-6 text-center  justify-center  sm:max-w-3xl lg:max-w-7xl lg:px-8 lg:flex lg:flex-row lg:gap-x-24 ">
              <div className="flex flex-col text-center justify-center">
                <h2 className="text-lg font-semibold text-cyan-600">
                  Experiencing pain?
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  We can help
                </p>
                <p className="mx-auto mt-5 pb-8 max-w-prose  text-xl text-gray-500">
                  Its time to experience relief and rediscover the joy of a
                  pain-free life. Our personalized approach targets the root
                  cause of your pain, we are here to empower you on your journey
                  to optimal health and well-being.
                </p>
              </div>
              <div className=" mx-auto ">
                <img
                  className="rounded-lg shadow-xl max-h-[1200px] w-[50rem] ring-1 ring-black ring-opacity-5 mx-auto"
                  src="/Injury.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Feature section with grid */}
          <div className="relative bg-cyan-900/10 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
              <h2 className="text-lg font-semibold text-cyan-600">Be happy</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Results matter
              </p>
              <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                Our approach is designed to help you achieve your health goals
                by providing you with the tools and support you need to feel
                your best. We are committed to helping you achieve your health
                goals and live a pain-free life.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root rounded-lg bg-cyan-900/15 px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 to-cyan-600 p-3 shadow-lg">
                              <feature.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial section */}
          <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-cyan-900/10 lg:hidden"
                />
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:h-full lg:p-0">
                  <div className="aspect-h-6 aspect-w-10 overflow-hidden rounded-xl shadow-xl sm:aspect-h-7 sm:aspect-w-16 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="/Review.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0 lg:py-20">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla vitae laoreet augue. Amet feugiat est
                        integer dolor auctor adipiscing nunc urna, sit.
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">
                        F.name L.name
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Blog section */}
          <div className="relative bg-cyan-900/10 py-16 sm:py-24 lg:py-32">
            <div className="relative">
              <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <h2 className="text-lg font-semibold text-cyan-600">Learn</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Helpful Resources
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                  Take a look at our blog posts to learn more about how
                  orthopedic massage can help you live a pain-free life. Our
                  blog posts cover a wide range of topics, from the benefits of
                  orthopedic massage to tips for managing chronic pain.
                </p>
              </div>
              <div className="mx-auto mt-12 grid max-w-md gap-8 px-6 sm:max-w-lg lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={post.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-cyan-600">
                          <a
                            href={post.category.href}
                            className="hover:underline"
                          >
                            {post.category.name}
                          </a>
                        </p>
                        <a href={post.href} className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.preview}
                          </p>
                        </a>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <a href={post.author.href}>
                            <img
                              className="h-10 w-10 rounded-full"
                              src={post.author.imageUrl}
                              alt={post.author.name}
                            />
                          </a>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <a
                              href={post.author.href}
                              className="hover:underline"
                            >
                              {post.author.name}
                            </a>
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.readingLength} read</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <NavLink
                  to="/blogs"
                  className="text-md font-semibold leading-6 text-cyan-600 hover:text-cyan-600/50"
                  onClick={scrollToTop}
                >
                  Learn more{" "}
                  <span aria-hidden="true" className="text-xl font-bold">
                    →
                  </span>
                </NavLink>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <Faq />

          {/* CTA Section */}
          <div className="relative bg-teal-700">
            <div className="relative h-56 bg-cyan-900/10 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="h-full w-full object-cover"
                src="/DaniHeadshot.jpg"
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
                Learn More About My Journey and Expertise
                </p>
                <p className="mt-3 text-lg text-gray-300">
                  Curious about who I am and how I can help you on your path to
                  a pain-free life? Visit my About page to learn more about my
                  background, my passion for healing, and the personalized care
                  I offer to each of my clients. Discover how my expertise can
                  support your journey to optimal health and well-being.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <NavLink
                      to="/about"
                      onClick={scrollToTop}
                      className="inline-flex items-center justify-center rounded-md bg-gray-900 bg-gradient-to-br from-gray-50 to-gray-400 px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-900/50"
                    >
                      learn more
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

          {/* End of CTA Section */}
        </main>
      </div>
    </div>
  );
}
