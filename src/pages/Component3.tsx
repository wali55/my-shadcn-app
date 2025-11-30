import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const Component3 = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
          <p className="text-muted-foreground mt-2">This is where your page content will go.</p>
        </main>
      </div>
    </div>
  );
};

export default Component3;
