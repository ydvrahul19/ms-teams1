import './App.css';
import Calls from './components/calls/index.js';
import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

function App() {
  return <Calls />
}

export default App;