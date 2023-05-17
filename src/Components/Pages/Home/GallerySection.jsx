import React from "react";

const GallerySection = () => {
  return (
    <div className="bg_tags py-12">
      <h2 className="primary_font text-center text-5xl">
        How toys help our childrens?
      </h2>
      <div className="flex flex-col gap-y-5 lg:flex-row items-center justify-center gap-x-14 my-12">
        <div className="-rotate-12 w-[7rem] h-[7rem] bg_secondary rounded-full flex justify-center items-center">
          <p className="text-lg font-bold text-white tracking-widest">
            Creativity
          </p>
        </div>
        <div className="rotate-12 w-[9rem]  h-[9rem] bg_secondary rounded-full flex justify-center items-center">
          <p className="text-lg  font-bold text-white tracking-widest">
            Development
          </p>
        </div>
        <div className="-rotate-6 w-[8rem] h-[8rem] bg_secondary rounded-full flex justify-center items-center">
          <p className="text-lg font-bold text-white tracking-widest">
            Encourage
          </p>
        </div>
        <div className="-rotate-3 w-[10rem] h-[10rem] bg_secondary rounded-full flex justify-center items-center">
          <p className="text-lg font-bold text-white tracking-widest">
            Imagination
          </p>
        </div>
        <div className="rotate-3 w-[7rem] h-[7rem] bg_secondary rounded-full flex justify-center items-center">
          <p className="text-lg font-bold text-white tracking-widest">
            Thinking
          </p>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
