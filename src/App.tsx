import './App.css'
import useCopyToClipboard from './react/hooks/useCopyToClipboard'
import useIterator from './react/hooks/useIteration';

export default function App() {

  const [isCopied, handleCopy] = useCopyToClipboard();
  const [users, user, isLoading, next, previous] = useIterator("https://randomusers.me/api/");
  return (
    <main>
      React ⚛️ + Vite ⚡ + Replit 🌀
      <button onClick={() => handleCopy("dd")}>click {isCopied ? "iscopied" : "not copied"}</button>
    </main>
  )
}