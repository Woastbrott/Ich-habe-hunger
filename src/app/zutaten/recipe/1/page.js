"use client";

export default function Recipe1() {
  return (
    <main className="bg-white flex flex-col items-center justify-between min-h-screen">
      <header className="bg-black flex justify-between items-center w-full p-4 rounded-b-2xl">
        <a href="/zutaten" className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-xl">Zurück</a>
        <div className="flex-grow text-right">
        <a className="text-black bg-white p-4 font-bold rounded-xl">Ich-hab-hunger</a> 
        </div>
      </header>
      <h1 className="text-4xl text-black   bg-gray-400 rounded-2xl pr-20 pl-20  p-4 mt-5 font-bold inline-block">Aglio e Olio</h1>
      <footer className="bg-black text-center p-3 items-center w-full rounded-t-xl mt-auto">hi</footer>
    </main>
  );
}