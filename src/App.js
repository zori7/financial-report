import './App.css';
import ReportTable from "./components/ReportTable";
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
        <DndProvider backend={HTML5Backend}>
            <ReportTable />
        </DndProvider>
    </div>
  );
}

export default App;
