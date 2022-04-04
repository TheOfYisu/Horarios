from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/soporte')
def soporte():
    return render_template("soporte.html")

@app.route('/soporte/envio')
def soporte_envio():
    import smtplib, ssl
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

    context=ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(correo,contraseña)
        server.sendmail(correo,destinatario,mensaje.as_string())
    
    return render_template("soporte.html")

if __name__=="__main__":
    app.run()