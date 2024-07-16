import "./btnWhatsapp.css";

const BtnWhatsapp = () => {
  return (
    <div className="btnWhatsapp__img ">
      <a href="https://wa.me/595981482599?text=Hola!%20Me%20gustar%C3%ADa%20pedir%20una%20cotizaci%C3%B3n.">
        <img
          src="/img/btn-whatsapp.png"
          alt="botón de Whatsapp"
          className="fixed z-50 bottom-4 right-4  "
        />
      </a>
    </div>
  );
};

export default BtnWhatsapp;
