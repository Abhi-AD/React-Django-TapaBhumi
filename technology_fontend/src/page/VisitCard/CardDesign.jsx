import React, { useRef } from 'react';
import './CardDesign.css';
import { FaDownload } from "react-icons/fa";
import QR from '../../assests/img/QR.png';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import QRCode from 'qrcode.react';

const CardDesign = (props) => {
  const { name,post, email, phone, website, address_line_1, address_line_2, qrData } = props?.formData
  const cardRef = useRef(null);
  const defaultAddress = '1/2 Street, City, State, Country';
  const handleDownload = () => {
    html2canvas(cardRef.current).then(canvas => {
      canvas.toBlob(blob => {
        saveAs(blob, 'card_design.png');
      });
    });
  };



  return (
    <div>
      <div className="card" ref={cardRef}>
        <div className="front-side">
          <div className="info-grid">
            <div className="name">
              <h2>{name || 'Abhishek Dangi'}</h2>
              <h5>{post || 'Full Stack Developer'}</h5>
            </div>
            <div className="addr">
              <p>
                {address_line_2 ? (
                  address_line_2
                ) : (
                  address_line_1 || defaultAddress
                )}
              </p>


            </div>
            <div className="phoneNo">
              <p>+977 {phone || '98 2294156'}</p>
            </div>
            <div className="emailId">
              <p className="web">{website || 'www.yourwebsite.com'}</p>
              <p className="email">{email || 'dangiabhi332@gmail.com'}</p>
            </div>
          </div>
        </div>
        <div className="back-side">
          <div className="name-tag">
            {qrData ? (
              <div className="qr-code">
                <QRCode value={qrData} />
              </div>
            ) : (
              <img src={QR} alt="QR Code" className="qrcode" />
            )}
          </div>
        </div>
      </div>
      <button className="download" onClick={handleDownload}>
        <FaDownload />
        Download
      </button>
    </div>
  );
};

export default CardDesign;
