import Component1 from "./pages/Component1";
import Component2 from "./pages/Component2";
import Component3 from "./pages/Component3";
import Component4 from "./pages/Component4";
import { Toaster } from "./components/ui/sonner";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <Layout>
        <h1>hello</h1>
      </Layout>
      <Toaster />
    </div>
  );
}

export default App;
