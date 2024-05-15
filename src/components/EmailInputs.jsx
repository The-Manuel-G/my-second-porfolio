import React, { useState, useEffect } from 'react';
import { onCopyToClipboard, onSendEmail } from "../data/utils.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/components/emailInput.css";
import {} from 'react-icons/bi';
import { Toaster } from 'sonner';

const EmailInput = ({ email }) => {
  const [inputEmail, setInputEmail] = useState(email);
  const [showAlert, setShowAlert] = useState(false);
  const [progress, setProgress] = useState(0);

  const showToast = () => {
    toast.success('¡Texto copiado al portapapeles!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
    });
    setShowAlert(false); // Restablecer showAlert a false después de mostrar el toast
  };

  const handleCopyToClipboard = () => {
    onCopyToClipboard(inputEmail);
    showToast();
  };

  const handleSendEmail = () => {
    onSendEmail(inputEmail);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    let interval;
    if (showAlert) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress >= 100 ? 0 : prevProgress + 10 );
      }, 500);
    }
    return () => clearInterval(interval);
  }, [showAlert]);

  useEffect(() => {
    if (progress >= 100) {
      setShowAlert(false);
    }
  }, [progress]);

  return (
    <div className="flex items-center">
      <div className="input-group mb-3">
        <div className="col-sm-8">
          <input
            type="email"
            name="email"
            id="email"
            className="input email_contact elemento-zoom-sacudida"
            placeholder="Email"
            title="Invalid email"
            required
            data-type="email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            readOnly={false}
          />
          <span className="contact-form-span none" data-span="error">
            This field is mandatory
          </span>
        </div>
        <div className="col-sm-4 inlineblock space-x-2">
          <button
            onClick={handleSendEmail}
            type="button"
            className="button titulo__dark elemento-zoom-sacudida"
          >
            <img className="icon_copy" src="./img/send-2.svg" alt="send" />
          </button>
          <button
            onClick={handleCopyToClipboard}
            className="button titulo__dark elemento-zoom-sacudida"
          >
            <img className="icon_copy" src="./img/copy.svg" alt="send" />
          </button>
        </div>
      </div>
      <Toaster/>
      <ToastContainer />
    </div>
  );
};

export default EmailInput;