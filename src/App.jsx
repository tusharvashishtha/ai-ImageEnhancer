import { useState } from "react";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <div className="text-center mb-4">
        <h1 className="text-5xl font-bold text-gray-500 mb-2">AI photo enhancer</h1>
        <p className="text-lg text-gray-400">
        Upload your images and let EnhanceIt do the magic!
        </p>
      </div>

      <Home />

      <div className="text-sm text-gray-500 mt-6">
      Powered by @EnhanceIt
      </div>
    </div>
  );
}

export default App;
