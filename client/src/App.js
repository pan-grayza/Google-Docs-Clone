import TextEditor from './TextEditor'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'

function App() {
    return <TextEditor />
}

export default App
