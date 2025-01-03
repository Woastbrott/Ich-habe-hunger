"use client";

export default function Recipe1() {
  return (
    <main className="bg-white flex flex-col items-center justify-between min-h-screen">
      <header className="bg-gray-100 flex justify-between items-center w-full p-4 rounded-2xl">
        <a href="/zutaten" className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">Zurück</a>
        <div className="flex-grow text-center">
          <h1 className="text-4xl text-gray-500 bg-gray-400 rounded-2xl p-4 mt-5 font-bold inline-block">Aglio e Olio</h1>
        </div>
      </header>
      
      <footer className="mt-auto">hi</footer>
    </main>
  );
}