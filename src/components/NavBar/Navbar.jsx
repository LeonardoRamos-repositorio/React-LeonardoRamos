import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h2>Video Juegos</h2>
      <div>
        <button>Catalogos</button>
        <button>Video Juegos</button>
        <button>Consolas & Hardware</button>
        <button>Accesorios de Juego</button>
        <button>Controles</button>
        <button>Consolas</button>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
