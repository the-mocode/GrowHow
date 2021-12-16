import FileSelectedHandler from './components/FileUpload';
import './App.css';
// import { Identify } from './components/PlantId';



function App() {
  
  
  return (
    <div className="App">
      <h1>GrowHow</h1>
      
      <p>GrowHow lets you upload a photo of you a plant inorder to identify and learn more about</p>
      
      <FileSelectedHandler />
    </div>
  );
}

export default App;
