import React from "react";
import Thanks from "../../Assets/thanks.gif";

function ModalSuccess() {
  return (
    <div className="cont-modal">
      <h1>
        Terima kasih sudah memesan barang kami barang anda akan segera kami
        kirim
      </h1>
      <img
        style={{ maxWidth: "100%", height: "800px", width: "800px" }}
        src={Thanks}
        alt="thanks"
      />
    </div>
  );
}

export default ModalSuccess;
