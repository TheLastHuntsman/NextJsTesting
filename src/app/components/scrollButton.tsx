"use client";

type buttonProps = {
  elementID: string;
  text: string;
  text2?: string;
};

export default function ScrollButton({ elementID, text, text2 }: buttonProps) {
  return (
    <button
      className="p-5 border uppercase transition hover:bg-[#4B7F52]"
      onClick={() => {
        const nextSection = document.getElementById(elementID);

        nextSection?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div>{text}</div>
      <div>{text2}</div>
    </button>
  );
}
