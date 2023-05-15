import React from "react";
require('../css/footer.css')

export const Footer = () => {
    const whatsappLink = "https://wa.me/+543517050225"; // Reemplaza el enlace con el enlace de WhatsApp correcto

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center footer">
                    <span className="mb-3 mb-md-0 reforma">
                        &copy; 2023 Reforma - Diseñado por{" "}
                        <span className="fade-in">
                            <a href={whatsappLink} className="david fade-in">David Arce</a>
                        </span>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
