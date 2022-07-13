from flask import Flask, request, jsonify
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/envio', methods=['POST'])
def enviosoporte():
        asunto = request.json['asunto']
        nombre = request.json['name']  
        apellido = request.json['lastname']
        telefono = request.json['telephone']        
        correo2 = request.json['email']   
        motivo = request.json['motivo_e']
        destinatario=request.json['destina']
        print(destinatario)
        correo="horariosapp.11@gmail.com"
        contraseña="ru22SnZPhLPAPjB"
        mensaje = MIMEMultipart("aleternative")
        mensaje["Subject"]=asunto
        mensaje["From"]=correo2
        mensaje["To"]=destinatario
        html=f"""
        <html>
        <body>
            <br>
            Nombre: {nombre}
            <br>
            Apellido: {apellido}
            <br>
            Correo: {correo2}
            <br>
            Telefono: {telefono}
            <br>
            <br>
            {motivo}
        </body>
        </html>
        """
        parte_html=MIMEText(html,"html")
        mensaje.attach(parte_html)
        context=ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(correo,contraseña)
            server.sendmail(correo,destinatario,mensaje.as_string())
        xprint=print("OK")
        return xprint

@app.route('/enviocredenciales', methods=['POST'])
def enviocredenciales():
        asunto = request.json['asunto']
        nombre = request.json['nombre']  
        apellido = request.json['apellido']        
        destinatario=request.json['correo']
        usuario=request.json["usuario"]
        contra=request.json["contraseña"]
        correo="horariosapp.11@gmail.com"
        contraseña="ru22SnZPhLPAPjB"
        mensaje = MIMEMultipart("aleternative")
        mensaje["Subject"]=asunto
        mensaje["From"]=correo
        mensaje["To"]=destinatario
        html=f"""
        <html>
        <body>
            <br>
            Cordial saludo.
            <br>
            Empelado {nombre} {apellido} le informamos que su usuario se encuentra registrado en la aplicación para generar horarios del hospital. Para que pueda consular horario, solicitar cambio de horario o de información personal debe iniciar sesión a la aplicación con las siguientes credenciales.  
            <br>
            Usuario: {usuario}
            <br>
            Contraseña: {contra}
            <br>
            Gracias
                        <br>
                                    <br>
        </body>
        </html>
        """
        parte_html=MIMEText(html,"html")
        mensaje.attach(parte_html)
        context=ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(correo,contraseña)
            server.sendmail(correo,destinatario,mensaje.as_string())
        xprint=print("OK")
        return xprint

@app.route('/enviocambio', methods=['POST'])
def enviocambio():
        asunto = request.json['asunto']
        nombre = request.json['nombre']  
        apellido = request.json['apellido']        
        destinatario=request.json['correo']
        numero_identidad=request.json["numidenti"]
        correo="horariosapp.11@gmail.com"
        contraseña="ru22SnZPhLPAPjB"
        mensaje = MIMEMultipart("aleternative")
        mensaje["Subject"]=asunto
        mensaje["From"]=correo
        mensaje["To"]=destinatario
        html=f"""
        <html>
        <body>
            <br>
            Cordial saludo.
            <br>
            Usuario {nombre} {apellido} con numero de identidad {numero_identidad} le informamos que se realizaron los cambios solicitados dentro de la base de datos de la aplicación para generar horarios del hospital.  
            <br>
            <br>
            Gracias
                        <br>
                                    <br>
        </body>
        </html>
        """
        parte_html=MIMEText(html,"html")
        mensaje.attach(parte_html)
        context=ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(correo,contraseña)
            server.sendmail(correo,destinatario,mensaje.as_string())
        xprint=print("OK")
        return xprint

@app.route('/envio2', methods=['POST'])
def envionuevoempleado():
        asunto = request.json['asunto']
        nombreJ = request.json['nombreJ']  
        apellido = request.json['apellidoJ']
        Cedula=request.json['CedulaJ']
        telefono = request.json['cellJ']        
        correo2 = request.json['emailj']
        genero=request.json['generoJ']   
        cargos = request.json['cargoJ']
        HorasM=request.json['HmesJ']
        DiasM=request.json['DmesJ']
        departamentoC=request.json['dep']
        Turnos=request.json['TrunosJ']
        destinatario=request.json['destina']
        correo="horariosapp.11@gmail.com"
        contraseña="ru22SnZPhLPAPjB"
        mensaje = MIMEMultipart("aleternative")
        mensaje["Subject"]=asunto
        mensaje["From"]=correo2
        mensaje["To"]=destinatario
        html=f"""
        <html>
        <body>
            <br>
            Informacion de nuevo empleado:
            <br>
            <br>
            Nombre: {nombreJ}
            <br>
            Apellido: {apellido}
            <br>
            Cedula{Cedula}
            <br>
            Correo: {correo2}
            <br>
            Telefono: {telefono}
            <br>
            Genero: {genero}
            <br>
            Cargo:{cargos}
            <br>
            Departamento:{departamentoC}
            <br>
            Horas laborales al mes:{HorasM}
            <br>
            Horas laborales al dia:{DiasM}
            <br>
            Turnos laboral:{Turnos}
            <br>
            
        </body>
        </html>
        """
        parte_html=MIMEText(html,"html")
        mensaje.attach(parte_html)
        context=ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(correo,contraseña)
            server.sendmail(correo,destinatario,mensaje.as_string())

@app.route('/envio3', methods=['POST'])
def SolicitudCI():
        asunto = request.json['asunto']
        nombre = "request.json['name']  "
        apellido = request.json['apellidoSO']
        telefono = request.json['telefonoSO']        
        correo2 = request.json['correoSO']
        solicitudes = request.json['solicitudesSO']
        destinatario=request.json['destina']
        correo="horariosapp.11@gmail.com"
        contraseña="ru22SnZPhLPAPjB"
        mensaje = MIMEMultipart("aleternative")
        mensaje["Subject"]=asunto
        mensaje["From"]=correo2
        mensaje["To"]=destinatario
        html=f"""
        <html>
        <body>
            <br>
            Cambio de informacion pesonal
            <br>
            Nombre: {nombre}
            <br>
            Apellido: {apellido}
            <br>
            Correo: {correo2}
            <br>
            Telefono: {telefono}
            <br>
            <br>
            {solicitudes}
            
        </body>
        </html>
        """
        parte_html=MIMEText(html,"html")
        mensaje.attach(parte_html)
        context=ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(correo,contraseña)
            server.sendmail(correo,destinatario,mensaje.as_string())
@app.route('/envio4', methods=['POST'])
def SolicitudCE():
        asunto = request.json['asunto']
        nombre = request.json['nombreSOE']
        apellido = request.json['apellidoSOE']
        telefono = request.json['telefonoSOE']        
        correo2 = request.json['correoSOE']
        nombreF = request.json['nombreSF']
        apellidoF = request.json['apellidoSF']
        telefonoF = request.json['telefonoSF']        
        correo2F = request.json['correoSF']
        estado=request.json['estadoSOE']
        solicitudes = request.json['solicitudesSOE']
        destinatario=request.json['destina']
        correo="horariosapp.11@gmail.com"
        contraseña="ru22SnZPhLPAPjB"
        mensaje = MIMEMultipart("aleternative")
        mensaje["Subject"]=asunto
        mensaje["From"]=correo2
        mensaje["To"]=destinatario
        html=f"""
        <html>
        <body>
            <br>
            Cambio de informacion de estado de empleado.
            <br>
            <br>
            Informacion del Jefe.
            <br>
            Nombre: {nombreF}
            <br>
            Apellido: {apellidoF}
            <br>
            Correo: {correo2F}
            <br>
            Telefono: {telefonoF}
            <br>
            <br>
            Informacion del Empleado.
            Nombre: {nombre}
            <br>
            Apellido: {apellido}
            <br>
            Correo: {correo2}
            <br>
            Telefono: {telefono}
            <br>
            Estado del empleado:{estado}
            <br>
            <br>
            {solicitudes}
            
        </body>
        </html>
        """
        parte_html=MIMEText(html,"html")
        mensaje.attach(parte_html)
        context=ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(correo,contraseña)
            server.sendmail(correo,destinatario,mensaje.as_string())
@app.route('/envio5', methods=['POST'])
def envio5():
        asunto = request.json['asunto']
        nombre = request.json['nombreEF']
        apellido = request.json['apellidoEF']
        telefono = request.json['telefonoEF']        
        correo2 = request.json['correoEF']
        cedula=request.json['CedulaEF']
        solicitudes = request.json['solicitudesEF']
        destinatario=request.json['destina']
        correo="horariosapp.11@gmail.com"
        contraseña="ru22SnZPhLPAPjB"
        mensaje = MIMEMultipart("aleternative")
        mensaje["Subject"]=asunto
        mensaje["From"]=correo2
        mensaje["To"]=destinatario
        html=f"""
        <html>
        <body>
            <br>
            Cambio de informacion pesonal del empleado {nombre}
            <br>
            Nombre: {nombre}
            <br>
            Apellido: {apellido}
            <br>
            Correo: {correo2}
            <br>
            Telefono: {telefono}
            <br>
            Cedula:{cedula}
            <br>
            <br>
            {solicitudes}
            
        </body>
        </html>
        """
        parte_html=MIMEText(html,"html")
        mensaje.attach(parte_html)
        context=ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(correo,contraseña)
            server.sendmail(correo,destinatario,mensaje.as_string())

if __name__ == "__main__":
    app.run(port=1000, debug=True)

