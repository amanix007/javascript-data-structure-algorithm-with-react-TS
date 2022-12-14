import { useEffect } from 'react';
import './App.css'
import Big_O_Notation from './Big_O_Notation/Big_O_Notation';
import DSA_Execution from './data-structures';
import { DesignPatterns } from './design-patterns/DesignPatterns';
import { all_clousure_problems } from './javascript-language-problems/closure/closure';
import { init_all_etc_javascript_problems_function } from './javascript-language-problems/etc/etc';
import { init_OOP } from './javascript-language-problems/OOP';
import useCopyToClipboard from './react/hooks/useCopyToClipboard'
import useIterator from './react/hooks/useIteration';
import UseRef from './react/hooks/useRef';

export default function App() {

  const [isCopied, handleCopy] = useCopyToClipboard();
  const [users, user, isLoading, next, previous] = useIterator("https://randomusers.me/api/");
  useEffect(() => {
    // init_all_etc_javascript_problems_function();
    // all_clousure_problems();
    // init_OOP();
    // DesignPatterns();
    // Big_O_Notation();
    // DSA_Execution();

  }, [])
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
      <button onClick={() => handleCopy("dd")}>click {isCopied ? "iscopied" : "not copied"}</button>
      <UseRef />
    </main>
  )
}


