import smtplib, ssl
from email import encoders
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

correo="horariosapp.11@gmail.com"
contraseña="ru22SnZPhLPAPjB"

destinatario="jesudgm.11@gmail.com"
asunto="Soporte y ayuda"

mensaje = MIMEMultipart("aleternative")
mensaje["Subject"]=asunto
mensaje["From"]=correo
mensaje["To"]=destinatario

html=f"""
<html>
<body>
    Hola <br>
    esta es una prueba, Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsum? Officia iste necessitatibus, ab expedita laborum repellat, sunt distinctio architecto atque reiciendis a totam enim dignissimos temporibus blanditiis unde quas.
</body>
</html>
"""

parte_html=MIMEText(html,"html")

mensaje.attach(parte_html)

archivo="prueba.jpg"

context=ssl.create_default_context()

with open(archivo,"rb")as adjunto:
    contenido_adjunto=MIMEBase("application","octet-stream")
    contenido_adjunto.set_payload(adjunto.read())

encoders.encode_base64(contenido_adjunto)

contenido_adjunto.add_header(
    "Content-Disposition",
    f"attachment; filename={archivo}",
)
mensaje.attach(contenido_adjunto)
text=mensaje.as_string()

with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
    server.login(correo,contraseña)
    server.sendmail(correo,destinatario,text)