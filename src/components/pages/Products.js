import "../../data.js";
import { Menu } from "../Menu.js";

// import "../../App.css";
import { Review } from "../Review";

export default function Products() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
      <section className="container-1">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Menu />
      </section>
    </main>
  );
}
