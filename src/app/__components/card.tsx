"use client";

export default function Card(props: { cardtext: string; cardtitle: string }) {
  return (
    <div className="flex flex-col text-center h-48 w-72 rounded-md bg-[#0e2e75] hover:transition-all hover:w-96 hover:h-64 transition-all">
      <h1 className="mt-2 sm:text-4xl md:text-5xl lg:text-3xl mb-1">
        {props.cardtitle}
      </h1>
      <hr />
      <h4 className="mt-2">{props.cardtext}</h4>
    </div>
  );
}
