import { RouterProvider, match, useRouter } from "./router";
import Home from "./pages/Home";
import About from "./pages/About";
import { ProductDetail, Products } from "./pages/Products";
import Services from "./pages/Services";
import Installation from "./pages/Installation";
import { Article, Insights } from "./pages/Insights";
import { Contact, FAQ } from "./pages/Contact";

function Routes() {
  const { path } = useRouter();
  const m = match(path);

  switch (m.page) {
    case "about":
      return <About />;
    case "products":
      return <Products />;
    case "product":
      return <ProductDetail slug={m.slug || ""} />;
    case "services":
      return <Services />;
    case "installation":
      return <Installation />;
    case "insights":
      return <Insights />;
    case "article":
      return <Article slug={m.slug || ""} />;
    case "contact":
      return <Contact />;
    case "faq":
      return <FAQ />;
    default:
      return <Home />;
  }
}

export default function App() {
  return (
    <RouterProvider>
      <Routes />
    </RouterProvider>
  );
}
