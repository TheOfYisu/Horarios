from asyncio.windows_events import NULL
from flask import Flask, request, jsonify
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from flask_cors import CORS, cross_origin
import math
import random
import datetime
from datetime import date
from datetime import datetime

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost' 
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'proyecto'
mysql = MySQL(app)
app.secret_key = "mysecretkey"

@app.route('/creacion/<id>',methods=['POST'])
def creacion(id):
    now = datetime.now()
    xcarago = request.json['cargo_e']
    xmessele = request.json['mesexsele']
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
    cur.execute(f'SELECT numero_identidad,estado,Horas_al_mes,Horas_al_dia,Turno,cargo,dpto_nombre FROM `personal` JOIN horario ON Numero_identidad=id_empleado JOIN empleados on Numero_identidad=id_empleado_e AND dpto_nombre="{rv1}" GROUP BY Numero_identidad')
    rv = cur.fetchall()
    cur.close()
    payload = []
    content = {}
    for result in rv:
        cantidias=((int(result[2]))/(int(result[3])))
        cantidias=math.floor(cantidias)
        diassemas=cantidias/4
        diassemas=math.floor(diassemas)
        content = {'numero_identidad': result[0], 'estado':result[1], 'Horas_al_mes': result[2], 'Horas_al_dia': result[3], 'Turno': result[4], 'cargo': result[5], 'dpto_nombre': result[6],"candias":cantidias,"diassemana":diassemas,"crus":0,"cont_dias":0}
        payload.append(content)
        content = {}
    meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    mes={"Enero":31,"Febrero":28,"Marzo":31,"Abril":30,"Mayo":31,"Junio":30,"Julio":31,"Agosto":31,"Septiembre":30,"Octubre":31,"Noviembre":31,"Diciembre":31}
    horariodia={"Enero":[],"Febrero":[],"Marzo":[],"Abril":[],"Mayo":[],"Junio":[],"Julio":[],"Agosto":[],"Septiembre":[],"Octubre":[],"Noviembre":[],"Diciembre":[]}
    horarionoche={"Enero":[],"Febrero":[],"Marzo":[],"Abril":[],"Mayo":[],"Junio":[],"Julio":[],"Agosto":[],"Septiembre":[],"Octubre":[],"Noviembre":[],"Diciembre":[]}
    cont=0
    yearactual = format(now.year)
    verifi=0
    for conteo in range(0,mes[xmessele]):
        cont=cont+1
        for i in range(0,len(payload)):
            if payload[i]["estado"]=="Activo":
                if payload[i]["crus"]!=2:
                    if payload[i]["cont_dias"]!=payload[i]["diassemana"]:
                        if payload[i]["Turno"]=="Diurno":
                            if payload[i]["cargo"]==xcarago:
                                if verifi==3:
                                    verifi=0
                                else:
                                    Id_empleados_H=payload[i]["numero_identidad"]
                                    Dia=conteo+1
                                    Mes=xmessele
                                    Año=int(yearactual)
                                    cur = mysql.connection.cursor()
                                    cur.execute("INSERT INTO creacion (Id_empleaos_H, Dia, Mes, Año) VALUES (%s,%s,%s,%s)", (Id_empleados_H, Dia, Mes, Año))
                                    mysql.connection.commit()
                                    payload[i]["crus"]=payload[i]["crus"]+1
                                    payload[i]["cont_dias"]=payload[i]["cont_dias"]+1
                                    verifi=verifi+1
                    elif payload[i]["cont_dias"]==payload[i]["diassemana"] or cont==7:
                        cont=0
                        payload[i]["cont_dias"]=0
                elif payload[i]["crus"]==2:
                    payload[i]["crus"]=0
    cur.close()
    return jsonify(horariodia)

@app.route('/mostrar/<id>',methods=['POST'])
def mostrar(id):
    mes={"Enero":31,"Febrero":28,"Marzo":31,"Abril":30,"Mayo":31,"Junio":30,"Julio":31,"Agosto":31,"Septiembre":30,"Octubre":31,"Noviembre":31,"Diciembre":31}
    xcarago = request.json['cargo_ec']
    xmessele = request.json['mesexsele']
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
    cur.execute(f'SELECT id_empleado_e,dia,mes,año,nombre,apellido FROM `empleados` JOIN personal on id_empleado_e=numero_identidad JOIN jefe on nom_dpto_cargo="{rv1}" JOIN creacion on id_empleado_e=Id_empleaos_H WHERE cargo="{xcarago}" ORDER BY `dia` ASC')
    rv = cur.fetchall()
    cur.close()
    payload = []
    lista=[]
    for i in range(0,mes[xmessele]):
        for result in rv:
            if result[2]==xmessele:
                if (result[1]-1)==i:
                    lista.append(f"{result[4]} {result[5]}")
        payload.append(lista)
        lista=[]
    return jsonify(payload)

@app.route('/mostraremple/<id>',methods=['GET'])
def mostraremple(id):
    try:
        today = date.today()
        mesexacto=format(today.month)
        meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        mes={"Enero":31,"Febrero":28,"Marzo":31,"Abril":30,"Mayo":31,"Junio":30,"Julio":31,"Agosto":31,"Septiembre":30,"Octubre":31,"Noviembre":31,"Diciembre":31}
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT * FROM `creacion` WHERE Id_empleaos_H={id};')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = []
        for result in rv:
            if result[2]==meses[int(mesexacto)-1]:
                content = {'id': result[0], 'dia': result[1],'mes': result[2],'amo': result[3],"dias":mes[result[2]]}
                payload.append(content)
                content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})


@app.route('/camioe/<id>',methods=['POST'])
def camioe(id):
    try:
        dia = request.json['diacambio']
        mes = request.json['mescambio']
        cur = mysql.connection.cursor()
        cur.execute(f'SELECT nombre,apellido,Id_empleaos_H,Dia,Mes FROM `creacion` JOIN personal on numero_identidad=Id_empleaos_H WHERE Dia="{dia}" AND Mes="{mes}" AND Id_empleaos_H="{id}";')
        rv = cur.fetchall()
        cur.close()
        payload = []
        content = {}
        for result in rv:
            content = {'nombre':result[0],'apellido':result[1],'id': result[2], 'dia': result[3],'mes': result[4]}
            payload.append(content)
            content = {}
        return jsonify(payload)
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

@app.route('/delete/<id>', methods = ['POST'])
def delete_contact(id):
    try:
        dia = request.json['diacambio']
        mes = request.json['mescambio']
        cur = mysql.connection.cursor()
        cur.execute(f'DELETE FROM `creacion` WHERE Dia="{dia}" AND Mes="{mes}" AND Id_empleaos_H="{id}";')
        mysql.connection.commit()
        return jsonify({"informacion":"Registro eliminado"}) 
    except Exception as e:
        print(e)
        return jsonify({"informacion":e})

if __name__ == "__main__":
    app.run(port=2000, debug=True)