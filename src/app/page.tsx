"use client";

import Card from "./__components/card";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full bg-[#070a0e] text-white">
      <div className="flex flex-col justify-center items-center w-full mb-5">
        <h1 className="mt-2 sm:text-4xl md:text-5xl lg:text-3xl">
          The Stone Orca
        </h1>
        <h3 className="mt-2 sm:text-2xl md:text-3xl lg:text-lg">
          A Hard-working Individual Who Likes To Code and Compose!
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-5">
        <div className="flex gap-x-5">
          <Card
            cardtext="I work primarily NodeJS, NextJS, and React!"
            cardtitle="What I do mostly."
          />
          <Card
            cardtext="Experience with Java and Spigot Development."
            cardtitle="Other Languages!"
          />
        </div>
        <div>
          <Card
            cardtext="Besides coding, I really like to compose!"
            cardtitle="Other hobbies."
          />
        </div>
      </div>
    </div>
  );
}
