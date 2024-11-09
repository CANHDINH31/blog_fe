import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import routes from "./router/router";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        {routes.map((route, index) =>
          route.children ? (
            <Route key={index} path={route.path} element={route.element}>
              {route.children.map((child, idx) => (
                <Route
                  key={idx}
                  path={child.path}
                  element={child.element}
                  index={child.index}
                />
              ))}
            </Route>
          ) : (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              index={route.index}
            />
          )
        )}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
