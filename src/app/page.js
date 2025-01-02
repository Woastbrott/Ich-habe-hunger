import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <a
          href="/zutaten"
          className="text-center rounded-2xl bg-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-5 text-gray-700 p-4 hover:bg-gray-300 hover:text-gray-500"
        >
          Ich habe hunger!
        </a>
      </div>
    </main>
  );
}