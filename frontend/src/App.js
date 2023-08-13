import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Componants/Authentication/Login";
import Signup from "./Componants/Authentication/Signup";
import Homepage from "./Componants/Home/Homepage";
import CreateSurvey from "./Componants/Survey/CreateSurvey";
import CreateQuestion from "./Componants/Question/CreateQuestion";
import Preview from "./Componants/Preview/Preview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/home/createSurvey" element={<CreateSurvey />} />
        <Route
          path="/home/createSurvey/createQuestion"
          element={<CreateQuestion />}
        />
        <Route
          path="/home/createSurvey/createQuestion/preview"
          element={<Preview />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
