import { useEffect } from 'react';
import './App.css'
import { all_clousure_problems } from './javascript-language-problems/closure/closure';
import { init_all_etc_javascript_problems_function } from './javascript-language-problems/etc/etc';
import { init_OOP } from './javascript-language-problems/OOP';
import useCopyToClipboard from './react/hooks/useCopyToClipboard'
import useIterator from './react/hooks/useIteration';

export default function App() {

  const [isCopied, handleCopy] = useCopyToClipboard();
  const [users, user, isLoading, next, previous] = useIterator("https://randomusers.me/api/");
  useEffect(()=> {
    // init_all_etc_javascript_problems_function();
    // all_clousure_problems();
    init_OOP();

  },[])
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
      <button onClick={() => handleCopy("dd")}>click {isCopied ? "iscopied" : "not copied"}</button>
    </main>
  )
}


