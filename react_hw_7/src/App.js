
import LanguageProvider  from "./context/LanguageContext";
import Form from "./component/Form";
import './styles/App.css';



function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Form />
      </div>
    </LanguageProvider>
      );
}

export default App;
