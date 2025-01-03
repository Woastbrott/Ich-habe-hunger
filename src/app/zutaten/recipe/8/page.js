"use client";

export default function Recipe1() {
  return (
    <main className="bg-white flex flex-col items-center justify-between">
      <header className="bg-black flex justify-between items-center w-full p-4 rounded-b-2xl">
        <a href="/zutaten" className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 hover:scale-105 rounded-xl">Zurück</a>
        <div className="flex-grow text-right">
          <a className="text-black bg-white p-4 font-bold rounded-xl">Ich-hab-hunger</a> 
        </div>
      </header>
      <h1 className="text-4xl text-black bg-gradient-to-r from-gray-200 to-gray-600 rounded-2xl pr-20 pl-20 p-4 mt-5 font-bold inline-block">Maisbomben</h1>
      
      
      <div className="flex flex-col items-center h-screen w-screen text-black ml-8 mt-8">
        <p className="text-xl mb-4">Hier ist das Rezept:</p>
        <button
          onClick={() => window.location.href = "https://www.tiktok.com/@su_ice_/video/7302064180595838241"} 
          className="bg-black text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Rezept ansehen
        </button>
      </div>

      <footer className="bg-black text-center p-3 items-center w-full rounded-t-xl mt-auto">hi</footer>
    </main>
  );
}
