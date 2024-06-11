import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <div className="container py-8">
          app content
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
