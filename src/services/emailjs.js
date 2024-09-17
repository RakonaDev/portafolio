import emailjs from '@emailjs/browser'

export default function email(event) {

  event.preventDefault();

  var templateParams = {
    to_name: event.target[0].value,
    from_name: event.target[1].value,
    message: event.target[2].value,
    reply_to: event.target[1].value,
  }; 



  emailjs.send('service_9egwwqd', 'template_fupn9vu', templateParams, { publicKey: 'wooy2Olw9mEt8FwbB' })
    .then(
      () => {
        alert("Email enviado con éxito 😊😊");
        event.target[1].value = "";
        event.target[2].value = "";
      },
      () => {
        alert("No se pudo enviar el email, intentelo más tarde 😭😭");
      }
    )

  console.log(templateParams)
}