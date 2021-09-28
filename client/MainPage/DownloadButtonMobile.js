import React from "react";
import { Modal } from "react-bootstrap";
import QR from "../Resources/clearmind-qr.png";
import { Button } from "ui-neumorphism";


const DownloadButtonDown = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <div
        onClick={() => setModalShow(true)}
      >Download Cycle</div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
        style={{

          zIndex: "9999999999999999999"
        }}
      >
        <Modal.Body>
          <div className="container">
            <button
              onClick={() => setModalShow(false)}
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                left: "300px",
                marginTop: "-20px",
                fontSize: "30px",
                color: "black",
                zIndex: "99999999999999999999999999999"
              }}
            >
              x
            </button>
            {" "}
            <div className="row">
              <div className="col-sm-6">
                <h4 className="qr-heading">
                  Find out if you’ve made it. scan this QR code.
                </h4>
                <ul className="qr-ui">
                  <li className="qr-li">
                    open your phone camera and point it at the QR code.
                  </li>
                  <li className="qr-li">
                    alternatively, download any QR code scanner to scan.
                  </li>
                  <li className="qr-li">
                    click on the link generated to download CYCLE.
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <img src={QR} alt="Qr" width="100%" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default DownloadButtonDown;
