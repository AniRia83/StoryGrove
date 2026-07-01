import { useEffect } from "react";
import { supabase } from "./services/supabase";

function App() {
  useEffect(() => {
    console.log("Supabase Connected!");

    console.log(supabase);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <h1 className="text-5xl font-bold text-pink-600">
        StoryGrove 🌸
      </h1>
    </div>
  );
}

export default App;