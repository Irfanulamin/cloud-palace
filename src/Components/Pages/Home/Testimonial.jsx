import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import testmonial1 from "../../../assets/images/testimonial-1.jpg";
import testmonial2 from "../../../assets/images/testimonial-2.jpg";
import testmonial3 from "../../../assets/images/testimonial-3.jpg";

const Testimonial = () => {
  return (
    <div className="bg_secondary p-12 py-24">
      <h1 className="text-center text-black bg-white mb-12 primary_font text-5xl">
        Testimonial
      </h1>
      <div className="bg-white p-12 rounded">
        <div className="flex flex-col gap-10">
          <div className="flex  flex-col md:flex-row lg:flex-row items-center justify-center gap-12">
            <div>
              <img
                src={testmonial1}
                className="h-48 w-48 md:h-72 md:w-72 lg:h-72 lg:w-72 object-cover shadow"
              />
            </div>
            <div className="bg_secondary p-3 rounded shadow-lg">
              <Rating style={{ maxWidth: 240 }} value={4.5} readOnly />
              <h3 className="primary_font text-2xl font-bold my-3">
                Sarah Sebastian
              </h3>
              <p className="text-sm font-medium md:text-xl md:font-bold lg:text-xl lg:font-bold">
                I am amazed by the quality and attention to detail of the
                stuffed toys I purchased from this website. <br /> They are
                incredibly soft and well-made. My kids absolutely adore them!
              </p>
            </div>
          </div>
          <div className="flex  flex-col-reverse md:flex-row lg:flex-row items-center justify-center gap-12">
            <div className="bg_secondary p-3 rounded shadow-lg">
              <Rating style={{ maxWidth: 240 }} value={4} readOnly />
              <h3 className="primary_font text-2xl font-bold my-3">
                John kennedey
              </h3>
              <p className="text-sm font-medium md:text-xl md:font-bold lg:text-xl lg:font-bold">
                I have been searching for the perfect stuffed toy for my niece,
                and I finally found it on this website. <br /> The toy arrived
                promptly, and the quality is outstanding. My niece couldn\'t be
                happier. Thank you!
              </p>
            </div>
            <div>
              <img
                src={testmonial2}
                className="h-48 w-48 md:h-72 md:w-72 lg:h-72 lg:w-72 object-cover shadow"
              />
            </div>
          </div>
          <div className="flex  flex-col md:flex-row lg:flex-row items-center justify-center gap-12">
            <div>
              <img
                src={testmonial3}
                className="h-48 w-48 md:h-72 md:w-72 lg:h-72 lg:w-72 object-cover shadow"
              />
            </div>
            <div className="bg_secondary p-3 rounded shadow-lg">
              <Rating style={{ maxWidth: 240 }} value={5} readOnly />
              <h3 className="primary_font text-2xl font-bold my-3">
                Micheal Philips
              </h3>
              <p className="text-sm font-medium md:text-xl md:font-bold lg:text-xl lg:font-bold">
                The stuffed toys I received exceeded my expectations. They are
                not only cute but also very durable. <br /> I appreciate the
                wide variety of options available on the website. Highly
                recommended!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
