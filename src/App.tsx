import logo from "./logo.svg";
import "./App.css";
import { LoadingOverlay } from "./Overlay";
import { ErrorBoundary } from "./ErrorBoundary";
import { AsyncComponent } from "./AsyncComponent";
import { SuspenseOverlay } from "./SuspenseOverlay";

function App() {
  return (
    <ErrorBoundary>
      <SuspenseOverlay fallback={<LoadingOverlay />}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </header>
          <AsyncComponent />
        </div>
      </SuspenseOverlay>
    </ErrorBoundary>
  );
}

export default App;
