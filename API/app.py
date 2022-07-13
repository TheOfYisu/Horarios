from asyncio.windows_events import NULL
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'proyecto'
mysql = MySQL(app)
app.secret_key = "mysecretkey"

#Consulta en la base de datos sobre los usuarios y contraseña.
@app.route('/getcredenciales', methods=['GET'])
def getcredenciales():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM credenciales')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'usuario': result[0], 'password': result[1], 'ide_personal': result[2], 'tipodeusuario': result[3]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        return jsonify({"informacion":e})

@app.route('/getidcredenciales/<id>', methods=['GET'])
def getidcredenciales(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT tipodeusuario FROM credenciales where ide_personal={id}')
        rv = cur.fetchall()
        cur.close()
        content = {}
        for result in rv:
            content = {'tipodeusuario': result[0]}
        return jsonify(content)
    except Exception as e:
        return jsonify({"informacion":e})

#Consulta de la pagina personal, se lee de diferentes tablas.
@app.route('/getpersonal/<id>',methods=['GET'])
def getpersonal(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT * FROM personal WHERE Numero_identidad = {id}')
        rv = cur.fetchall()
        cur.execute(f'SELECT nom_dpto_cargo FROM jefe WHERE ide_empleado_J= {id}')
        departjefe = cur.fetchall()
        cur.execute(f'SELECT cargo FROM empleados WHERE id_empleado_e= {id}')
        cargoemple = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        cargrobus=str(departjefe)
        cargrobus=cargrobus.replace("(","")
        cargrobus=cargrobus.replace(")","")
        cargrobus=cargrobus.replace("'","")
        cargrobus=cargrobus.replace(",","")
        departjefe=cargrobus
        cargrobus=str(cargoemple)
        cargrobus=cargrobus.replace("(","")
        cargrobus=cargrobus.replace(")","")
        cargrobus=cargrobus.replace("'","")
        cargrobus=cargrobus.replace(",","")
        cargoemple=cargrobus
        if cargoemple!="":
            cargo=cargoemple
        elif departjefe!="":
            cargo=departjefe
        else:
            cargo=""
        for result in rv:
            content = {'name': result[0], 'lastname': result[1], 'num_ident': result[2], 'telefono': result[3], 'correo': result[4], 'dirrecion': result[5],'cargo':cargo}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        return jsonify({"informacion":e})

#Consultar por id para informacion del cambio
@app.route('/getIdcambio/<id>',methods=['GET'])
def getIdcambio(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT * FROM personal WHERE Numero_identidad = {id}')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'name': result[0], 'apellido': result[1], 'ided': result[2], 'telefono': result[3], 'email': result[4],'estado':result[5]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/add_personal', methods=['POST'])
def add_personal():
    try:
        if request.method == 'POST':
            nombre = request.json['nombre']  
            apellido = request.json['apellido']        
            numero_identidad = request.json['numero_identidad']      
            telefono=request.json["telefono"]
            correo=request.json["correo"]
            estado=request.json["estado"]
            genero=request.json["genero"]
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO personal (nombre, apellido, numero_identidad, telefono, correo, estado, genero) VALUES (%s,%s,%s,%s,%s,%s,%s)", (nombre, apellido, numero_identidad, telefono, correo, estado, genero))
            cur.close()
            mysql.connection.commit()
            return jsonify({"informacion":"Registro exitoso"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/add_horario', methods=['POST'])
def add_horario():
    try:
        if request.method == 'POST':
            turno=request.json['turno']   
            horas_al_mes=request.json['horas_al_mes']   
            horas_al_dia =request.json['horas_al_dia']   
            id_empleado  = request.json['id_empleado']     
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO horario (turno, horas_al_mes, horas_al_dia, id_empleado) VALUES (%s,%s,%s,%s)", (turno, horas_al_mes, horas_al_dia, id_empleado))
            cur.close()
            mysql.connection.commit()
            return jsonify({"informacion":"Registro exitoso"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/add_credenciales', methods=['POST'])
def add_credenciales():
    try:
        if request.method == 'POST':
            usuario = request.json['usuario']  
            contraseña = request.json['contraseña']      
            ide_personal = request.json['ide_personal']        
            tipodeusuario=request.json["tipodeusuario"]
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO credenciales (usuario, contraseña, ide_personal, tipodeusuario) VALUES (%s,%s,%s,%s)", (usuario, contraseña, ide_personal, tipodeusuario))
            cur.close()
            mysql.connection.commit()
            return jsonify({"informacion":"Registro exitoso"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/add_empleados', methods=['POST'])
def add_empleados():
    try:
        if request.method == 'POST':
            id_empleado_e = request.json['id_empleado_e']  
            cargo = request.json['cargo']      
            dpto_nombre = request.json['dpto_nombre']        
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO empleados (id_empleado_e, cargo, dpto_nombre) VALUES (%s,%s,%s)", (id_empleado_e, cargo, dpto_nombre))
            cur.close()
            mysql.connection.commit()
            return jsonify({"informacion":"Registro exitoso"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/add_jefes', methods=['POST'])
def add_jefes():
    try:
        if request.method == 'POST':
            ide_empleado_J = request.json['id_empleado_e']  
            nombrede_empleado = request.json['numempelecargoj']      
            nom_dpto_cargo = request.json['dpto_nombre']        
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO jefe (ide_empleado_J, nombrede_empleado, nom_dpto_cargo) VALUES (%s,%s,%s)", (ide_empleado_J, nombrede_empleado, nom_dpto_cargo))
            cur.close()
            mysql.connection.commit()
            return jsonify({"informacion":"Registro exitoso"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})


@app.route('/getpersonal_actu/<id>',methods=['GET'])
def getpersonal_actu(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT * FROM personal WHERE Numero_identidad = {id}')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'nombre': result[0], 'apellido': result[1], 'id': result[2], 'telefono': result[3], 'correo': result[4], 'estado': result[5], 'genero': result[6]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/gethorario_actu/<id>',methods=['GET'])
def gethorario_actu(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT * FROM horario WHERE id_empleado = {id}')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'turno': result[0], 'horas_al_mes': result[1], 'horas_al_dia': result[2]}
            payload.append(content)
            content = {}
            
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/empleado_actu/<id>',methods=['GET'])
def empleado_actu(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT * FROM empleados WHERE id_empleado_e = {id}')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'id': result[0], 'cargo': result[1], 'dpto_nombre': result[2]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/jefe_actu/<id>',methods=['GET'])
def jefe_actu(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT * FROM jefe WHERE ide_empleado_J = {id}')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'ide_empleado_J': result[0], 'nombrede_empleado': result[1], 'nom_dpto_cargo': result[2]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/updatepersonal/<id>', methods=['PUT'])
def updatepersonal(id):
    try:
        nombre = request.json['nombre']  
        apellido = request.json['apellido']             
        telefono=request.json["telefono"]
        correo=request.json["correo"]
        estado=request.json["estado"]
        genero=request.json["genero"]
        cur = mysql.connection.cursor()
        cur.execute("UPDATE personal SET Nombre = %s, Apellido = %s, Telefono = %s, Correo = %s, estado = %s, Genero = %s WHERE Numero_identidad = %s", (nombre, apellido, telefono, correo, estado, genero,id))
        mysql.connection.commit()
        return jsonify({"informacion":"Registro actualizado"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/updatehorario/<id>', methods=['PUT'])
def updatehorario(id):
    try:
        turno=request.json['turno']   
        horas_al_mes=request.json['horas_al_mes']   
        horas_al_dia =request.json['horas_al_dia']   
        cur = mysql.connection.cursor()
        cur.execute("UPDATE horario SET Turno = %s, Horas_al_mes = %s, Horas_al_dia = %s WHERE id_empleado = %s", (turno, horas_al_mes, horas_al_dia, id))
        mysql.connection.commit()
        return jsonify({"informacion":"Registro actualizado"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/updateempleado/<id>', methods=['PUT'])
def updateempleado(id):
    try: 
        cargo = request.json['cargo']      
        dpto_nombre = request.json['dpto_nombre'] 
        cur = mysql.connection.cursor()
        cur.execute("UPDATE empleados SET cargo = %s, dpto_nombre = %s WHERE id_empleado_e = %s", (cargo, dpto_nombre, id))
        mysql.connection.commit()
        return jsonify({"informacion":"Registro actualizado"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/getAllpersonal', methods=['GET'])
def getAllpersonal():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT nombre,Apellido,Numero_identidad,Telefono,Correo,estado,Genero,tipodeusuario,turno,horas_al_dia,horas_al_mes FROM `personal` INNER JOIN horario on Numero_identidad=id_empleado INNER JOIN credenciales on Numero_identidad=ide_personal;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'nombre': result[0], 'apellido': result[1], 'numero_identidad': result[2], 'telefono': result[3], 'correo': result[4], 'estado': result[5], 'genero': result[6],'tipodeusuario':result[7],'turno':result[8],'horas_al_dia':result[9],'horas_al_mes':result[10]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/getALLdepartamento/<id>',methods=['GET'])
def getALLdepartamento(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT nom_dpto_cargo FROM `jefe` WHERE ide_empleado_J={id}')
        rv1 = cur.fetchall()
        variableSTR=str(rv1)
        variableSTR=variableSTR.replace("[",'')
        variableSTR=variableSTR.replace("]",'')
        variableSTR=variableSTR.replace("(",'')
        variableSTR=variableSTR.replace(")",'')
        variableSTR=variableSTR.replace("'",'')
        variableSTR=variableSTR.replace(",",'')
        rv1=variableSTR
        cur.execute(f'SELECT Nombre,Apellido,Numero_identidad,Telefono,Correo,Genero,cargo FROM personal INNER JOIN empleados on Numero_identidad=id_empleado_e INNER JOIN jefe on dpto_nombre="{rv1}" GROUP BY Numero_identidad')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'nombre': result[0], 'apellido': result[1], 'numero_identidad': result[2], 'telefono': result[3], 'correo': result[4], 'genero': result[5],'cargo':result[6]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})
@app.route('/getAllestadoDEP/<id>', methods=['GET'])
def getAllestadoDEP(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT nom_dpto_cargo FROM `jefe` WHERE ide_empleado_J={id}')
        rv2 = cur.fetchall()
        variableSTR1=str(rv2)
        variableSTR1=variableSTR1.replace("[",'')
        variableSTR1=variableSTR1.replace("]",'')
        variableSTR1=variableSTR1.replace("(",'')
        variableSTR1=variableSTR1.replace(")",'')
        variableSTR1=variableSTR1.replace("'",'')
        variableSTR1=variableSTR1.replace(",",'')
        rv2=variableSTR1
        cur.execute(f'SELECT nombre,Apellido, numero_identidad,estado FROM `personal` INNER JOIN empleados on Numero_identidad=id_empleado_e AND dpto_nombre="{rv2}" GROUP BY Numero_identidad;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'Nombre':result[0],'Apellido':result[1], 'Numero_identidad': result[2],'Estado': result[3]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})
@app.route('/getAllByIdpersonal/<id>',methods=['GET'])
def getAllByIdpersonal(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT nombre,Apellido,Numero_identidad,Telefono,Correo,estado,Genero,cargo,turno,horas_al_dia,horas_al_mes FROM `personal` INNER JOIN horario on Numero_identidad=id_empleado INNER JOIN credenciales on Numero_identidad="{id}" INNER JOIN empleados on id_empleado_e=numero_identidad GROUP BY Numero_identidad;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'nombre': result[0], 'apellido': result[1], 'numero_identidad': result[2], 'telefono': result[3], 'correo': result[4], 'estado': result[5], 'genero': result[6],'cargo':result[7],'turno':result[8],'horas_al_dia':result[9],'horas_al_mes':result[10]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/getAllestado', methods=['GET'])
def getAllestado():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT numero_identidad,estado FROM `personal`')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'numero_identidad': result[0],'estado': result[1]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/getAlljefe', methods=['GET'])
def getAlljefe():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT nombre,Apellido,Numero_identidad,Telefono,Correo,estado,Genero,nom_dpto_cargo,nombrede_empleado FROM `personal` INNER JOIN jefe on Numero_identidad=ide_empleado_j;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'nombre': result[0], 'apellido': result[1], 'numero_identidad': result[2], 'telefono': result[3], 'correo': result[4], 'estado': result[5], 'genero': result[6],'nom_dpto_cargo':result[7],'nombrede_empleadoo':result[8]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/getAllempleado', methods=['GET'])
def getAllempleado():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT nombre,Apellido,Numero_identidad,Telefono,Correo,Genero,cargo,dpto_nombre,ide_empleado_J FROM `personal` INNER JOIN empleados on Numero_identidad=id_empleado_e INNER JOIN jefe on dpto_nombre=nom_dpto_cargo;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'nombre': result[0], 'apellido': result[1], 'numero_identidad': result[2], 'telefono': result[3], 'correo': result[4], 'genero': result[5],'cargo':result[6],'dpto_nombre':result[7],'ide_empleado_J':result[8]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/getempleadoByIdjefe/<id>',methods=['GET'])
def getempleadoByIdjefe(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT nombre,Apellido,Numero_identidad,Telefono,Correo FROM personal INNER JOIN empleados on Numero_identidad=id_empleado_e INNER JOIN jefe on ide_empleado_j="{id}" AND nom_dpto_cargo=dpto_nombre;')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'nombre': result[0], 'apellido': result[1], 'numero_identidad': result[2], 'telefono': result[3], 'correo': result[4]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

# ruta para consultar todos los registros|
@app.route('/getAdmin', methods=['GET'])
def getAdmin():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT correo FROM `personal` INNER JOIN credenciales on Numero_identidad=ide_personal WHERE tipodeusuario="Admin"')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'icorreo': result[0]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

# ruta para consultar todos los registros|
@app.route('/getAll', methods=['GET'])
def getAll():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM contacts')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'id': result[0], 'fullname': result[1], 'phone': result[2], 'email': result[3]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})


  

# ruta para consultar por parametro
@app.route('/getAllById/<id>',methods=['GET'])
def getAllById(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT * FROM contacts WHERE id = %s', (id))
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'id': result[0], 'fullname': result[1], 'phone': result[2], 'email': result[3]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})
    

#### ruta para crear un registro########
@app.route('/add_contact', methods=['POST'])
def add_contact():
    try:
        if request.method == 'POST':
            fullname = request.json['fullname']  ## nombre
            phone = request.json['phone']        ## telefono
            email = request.json['email']        ## email
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO contacts (fullname, phone, email) VALUES (%s,%s,%s)", (fullname, phone, email))
            mysql.connection.commit()
            return jsonify({"informacion":"Registro exitoso"})
        
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})


######### ruta para actualizar################
@app.route('/update/<id>', methods=['PUT'])
def update_contact(id):
    try:
        fullname = request.json['fullname']
        phone = request.json['phone']
        email = request.json['email']
        cur = mysql.connection.cursor()
        cur.execute("""
        UPDATE contacts
        SET fullname = %s,
            email = %s,
            phone = %s
        WHERE id = %s
        """, (fullname, email, phone, id))
        mysql.connection.commit()
        return jsonify({"informacion":"Registro actualizado"})
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})



@app.route('/delete/<id>', methods = ['DELETE'])
def delete_contact(id):
    try:
        cur = mysql.connection.cursor()
        cur.execute('DELETE FROM contacts WHERE id = %s', (id,))
        mysql.connection.commit()
        return jsonify({"informacion":"Registro eliminado"}) 
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})


# starting the app
if __name__ == "__main__":
    app.run(port=5000, debug=True)
