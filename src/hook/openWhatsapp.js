const openWhatsapp = (name, phone, message) => {
    const newMessage = `היי, מדבר ${name} אני פונה בנוגע ל${message}`;
    var URIMessage = encodeURI(newMessage);
    var whatsappLink = `https://wa.me/${phone}?text=${URIMessage}`;
    return whatsappLink;
    }
export default openWhatsapp;