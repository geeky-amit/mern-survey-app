import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Componants/Authentication/Login";
import Signup from "./Componants/Authentication/Signup";
import Homepage from "./Componants/Home/Homepage";
import CreateSurvey from "./Componants/Survey/CreateSurvey";
import CreateQuestion from "./Componants/Question/CreateQuestion";
import Preview from "./Componants/Preview/Preview";
// import UserProvider from "./Context/UserProvider";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
  }, []);
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Homepage user={user} />} />
          <Route
            path="/home/createSurvey"
            element={<CreateSurvey user={user} />}
          />
          <Route
            path="/home/createSurvey/createQuestion"
            element={<CreateQuestion user={user} />}
          />
          <Route
            path="/home/createSurvey/createQuestion/preview"
            element={<Preview />}
          />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
