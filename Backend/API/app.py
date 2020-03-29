from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import hashlib

config = {
  'user': 'root',
  'passwd': '',
  'host': 'localhost',
  'database': 'IotDB'
}

app = Flask(__name__)
CORS(app)



############################
# ADMINISTRADOR / USER     #
############################



@app.route("/login", methods=['GET'])
def Login():
	mydb = mysql.connector.connect(**config)

	mycursor = mydb.cursor()
	username = request.args.get('username')
	password = request.args.get('password')

	salt="asdfghjkl"+password
	b=bytes(salt, "utf8")
	encriptado = hashlib.md5(b).hexdigest()


	mycursor = mydb.cursor()
	username = request.args.get('username')
	password = request.args.get('password')


	val = (username,)
	mycursor.callproc('LoginAdministrador', val)
	perfil = "Admin"
	row = list(mycursor.stored_results())[0].fetchall()
	a = True
	if(len(row)==0):
		val = (username, )
		mycursor.callproc('LoginUser', val)
		perfil = "User"
		row = list(mycursor.stored_results())[0].fetchall()
		if(len(row)==0):
				a = False

	print(row)
	if a:
		print(encriptado)
		if(row[0][3] == encriptado):
			return perfil, 200
	return "", 401

@app.route("/insert", methods=['GET'])
def Insert():
	mydb = mysql.connector.connect(**config)

	mycursor = mydb.cursor()
	name = request.args.get('name')
	email = request.args.get('email')
	username = request.args.get('username')
	password = request.args.get('password')
	#date_register = request.args.get('date_register')
	admin = request.args.get('admin')


	salt="asdfghjkl"+password
	b=bytes(salt, "utf8")
	encriptado = hashlib.md5(b).hexdigest()

	try:
		args = (username, name, email, encriptado, admin)
		mycursor.callproc('insertUser', args)
	except mysql.connector.IntegrityError:
		return "409"
	
	print("entro a insert")
	mydb.commit()
	print(mycursor.rowcount,"record inserted.")
	return "200"

@app.route("/delete", methods=['GET'])
def Delete():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor()
	username = request.args.get('username')

	sql = "DELETE FROM user WHERE username = %s"
	val = (username,)
	mycursor.execute(sql, val)

	print(mycursor.rowcount,"record deleted.")
	mydb.commit()

	return "."

@app.route("/modify", methods=['GET'])
def Modify():
	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	username = request.args.get('username')
	name = request.args.get('name')
	email = request.args.get('email')
	status = request.args.get('status')

	sql = "UPDATE user SET name = %s, email = %s, status = %s WHERE username = %s"
	val = (name, email, status, username)
	mycursor.execute(sql, val)

	mydb.commit()
	return "", 200

#Dado un username
@app.route("/search", methods=['GET'])
def Search():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)
	username = request.args.get('username')

	val = (username,)
	#mycursor.callproc('buscarUser', val)
	sql = "SELECT username, name, email FROM user WHERE username = %s;"
	mycursor.execute(sql, val)
	row = mycursor.fetchone()
	username = {}
	if row is not None:
		username["name"] = row[1]
		username["email"] = row[2]

	print(mycursor.rowcount,"record founded.")
	return jsonify(username)

@app.route("/showAllUser", methods=['GET'])
def ShowAll():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	#mycursor.callproc('showUser')
	sql = "SELECT * FROM user WHERE status = true"
	mycursor.execute(sql)
	
	row = mycursor.fetchone()
	print(mycursor.rowcount,"record inserted.")
	user = {}
	while row is not None:
		username = {}
		username["name"] = row[1]
		username["email"] = row[2]
		user[row[0]] = username
		row = mycursor.fetchone()

	return jsonify(user), 200


############################
#        ESPACIOS          #       
############################

'''>>>>    STAGE  <<<<'''

@app.route("/insertStage", methods=['GET'])
def InsertStage():
	mydb = mysql.connector.connect(**config)

	mycursor = mydb.cursor()
	id_stage = request.args.get('id_stage')
	name = request.args.get('name')
	user = request.args.get('user')
	admin = request.args.get('admin')

	try:
		args = (id_stage, name, admin)
		mycursor.callproc('insertStage', args)
	except mysql.connector.IntegrityError:
		return "409"
	
	print("entro a insert")
	mydb.commit()
	print(mycursor.rowcount,"record inserted.")
	return "200"


@app.route("/deleteStage", methods=['GET'])
def DeleteStage():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor()
	id_stage = request.args.get('id_stage')

	sql = "DELETE FROM stage WHERE id_stage = %s"
	val = (id_stage,)
	mycursor.execute(sql, val)

	print(mycursor.rowcount,"record deleted.")
	mydb.commit()

	return "."

#Dado un id_stage
@app.route("/searchStage", methods=['GET'])
def SearchStage():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)
	id_stage = request.args.get('id_stage')

	val = (id_stage,)
	#mycursor.callproc('buscarStage', val)

	sql = "SELECT id_stage, name FROM stage WHERE id_stage = %s;"
	mycursor.execute(sql, val)

	row = mycursor.fetchone()
	id_stage = {}
	if row is not None:
		id_stage["name"] = row[1]

	print(mycursor.rowcount,"record founded.")
	return jsonify(id_stage)


@app.route("/modifyStage", methods=['GET'])
def ModifyStage():
	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	id_stage = request.args.get('id_stage')
	name = request.args.get('name')

	sql = "UPDATE stage SET name = %s WHERE id_stage = %s"
	val = (name, id_stage)
	mycursor.execute(sql, val)

	mydb.commit()
	return "", 200

@app.route("/showAllStage", methods=['GET'])
def ShowAllStage():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	#mycursor.callproc('showUser')
	sql = "SELECT * FROM stage"
	mycursor.execute(sql)
	
	row = mycursor.fetchone()
	print(mycursor.rowcount,"record inserted.")
	stage = {}
	while row is not None:
		id_stage = {}
		id_stage["name"] = row[1]
		stage[row[0]] = id_stage
		row = mycursor.fetchone()

	return jsonify(stage), 200

'''>>>>   FLOOR   <<<<'''

@app.route("/insertFloor", methods=['GET'])
def InsertFloor():
	mydb = mysql.connector.connect(**config)

	mycursor = mydb.cursor()
	id_floor = request.args.get('id_floor')
	name = request.args.get('name')
	id_stage = request.args.get('id_stage')

	try:
		# args = (id_floor, name, id_stage)
		# mycursor.callproc('insertFloor', args)
		sql = "INSERT INTO floor (id_floor, name, stage_id_stage) VALUES (%s,%s,%s)"
		val = (id_floor, name, id_stage)
		mycursor.execute(sql, val)
	except mysql.connector.IntegrityError:
		return "409"
	
	print("entro a insert")
	mydb.commit()
	print(mycursor.rowcount,"record inserted.")
	return "200"


@app.route("/deleteFloor", methods=['GET'])
def DeleteFloor():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor()
	id_floor = request.args.get('id_floor')

	sql = "DELETE FROM floor WHERE id_floor = %s"
	val = (id_floor,)
	mycursor.execute(sql, val)

	print(mycursor.rowcount,"record deleted.")
	mydb.commit()

	return "."

#Dado un id_floor
@app.route("/searchFloor", methods=['GET'])
def SearchFloor():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)
	id_floor = request.args.get('id_floor')

	val = (id_floor,)
	#mycursor.callproc('buscarStage', val)

	sql = "SELECT id_floor, name, stage_id_stage FROM floor WHERE id_floor = %s;"
	mycursor.execute(sql, val)

	row = mycursor.fetchone()
	id_floor = {}
	if row is not None:
		id_floor["name"] = row[1]
		id_floor["stage"] = row[2]

	print(mycursor.rowcount,"record founded.")
	return jsonify(id_floor)


@app.route("/modifyFloor", methods=['GET'])
def ModifyFloor():
	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	id_floor = request.args.get('id_floor')
	name = request.args.get('name')

	sql = "UPDATE floor SET name = %s WHERE id_floor = %s"
	val = (name, id_floor)
	mycursor.execute(sql, val)

	mydb.commit()
	return "", 200

@app.route("/showAllFloor", methods=['GET'])
def ShowAllFloor():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	#mycursor.callproc('showUser')
	sql = "SELECT * FROM floor"
	mycursor.execute(sql)
	
	row = mycursor.fetchone()
	print(mycursor.rowcount,"record inserted.")
	floor = {}
	while row is not None:
		id_floor = {}
		id_floor["name"] = row[1]
		id_floor["stage"] = row[2]
		floor[row[0]] = id_floor
		row = mycursor.fetchone()

	return jsonify(floor), 200

'''>>>>   Room   <<<<'''

@app.route("/insertRoom", methods=['GET'])
def InsertRoom():
	mydb = mysql.connector.connect(**config)

	mycursor = mydb.cursor()
	id_room = request.args.get('id_room')
	name = request.args.get('name')
	id_floor = request.args.get('id_floor')
	id_scenario = request.args.get('id_scenario')

	try:
		# args = (id_floor, name, id_stage)
		# mycursor.callproc('insertFloor', args)
		sql = "INSERT INTO room (id_room, name, floor_id_floor, scenario_id_scenario) VALUES (%s,%s,%s,%s)"
		val = (id_room, name, id_floor, id_scenario)
		mycursor.execute(sql, val)
	except mysql.connector.IntegrityError:
		return "409"
	
	print("entro a insert")
	mydb.commit()
	print(mycursor.rowcount,"record inserted.")
	return "200"


@app.route("/deleteRoom", methods=['GET'])
def DeleteRoom():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor()
	id_room = request.args.get('id_room')

	sql = "DELETE FROM room WHERE id_room = %s"
	val = (id_room,)
	mycursor.execute(sql, val)

	print(mycursor.rowcount,"record deleted.")
	mydb.commit()

	return "."

#Dado un id_room
@app.route("/searchRoom", methods=['GET'])
def SearchRoom():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)
	id_room = request.args.get('id_room')

	val = (id_room,)
	#mycursor.callproc('buscarStage', val)

	sql = "SELECT id_room, name, floor_id_floor, scenario_id_scenario FROM room WHERE id_room = %s;"
	mycursor.execute(sql, val)

	row = mycursor.fetchone()
	id_room = {}
	if row is not None:
		id_room["name"] = row[1]
		id_room["floor"] = row[2]
		id_room["scenario"] = row[3]

	print(mycursor.rowcount,"record founded.")
	return jsonify(id_room)


@app.route("/modifyRoom", methods=['GET'])
def ModifyRoom():
	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	id_room = request.args.get('id_room')
	name = request.args.get('name')
	id_scenario = request.args.get('id_scenario')

	sql = "UPDATE room SET name = %s, scenario_id_scenario = %s WHERE id_room = %s"
	val = (name, id_scenario, id_room)
	mycursor.execute(sql, val)

	mydb.commit()
	return "", 200

@app.route("/showAllRoom", methods=['GET'])
def ShowAllRoom():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	#mycursor.callproc('showUser')
	sql = "SELECT * FROM room"
	mycursor.execute(sql)
	
	row = mycursor.fetchone()
	print(mycursor.rowcount,"record inserted.")
	room = {}
	while row is not None:
		id_room = {}
		id_room["name"] = row[1]
		id_room["floor"] = row[2]
		id_room["scenario"] = row[3]
		room[row[0]] = id_room
		row = mycursor.fetchone()

	return jsonify(room), 200


############################
#      DISPOSITIVOS        #       
############################

@app.route("/insertProduct", methods=['GET'])
def InsertProduct():
	mydb = mysql.connector.connect(**config)

	mycursor = mydb.cursor()
	id_product = request.args.get('id_product')
	name = request.args.get('name')
	description = request.args.get('description')
	os = request.args.get('os')
	id_device = request.args.get('id_device')
	status = request.args.get('status')
	brand = request.args.get('brand')
	model = request.args.get('model')
	#time_register = request.args.get('time_register')
	x = request.args.get('x')
	y = request.args.get('y')

	# args = (id_floor, name, id_stage)
	# mycursor.callproc('insertFloor', args)
	try:
		sql = "INSERT INTO device (id_device, status, brand, model, min_con, max_con, use_time, time_register, time_unsubcribe, x, y ) VALUES (%s,%s,%s,%s, NULL, NULL, NULL, NULL, NULL, %s, %s)"
		val = (id_device, status, brand, model, x, y)
		mycursor.execute(sql, val)
	except mysql.connector.IntegrityError:
		return "409"

	try:
		sql = "INSERT INTO product (id_product, name, description, os, device_id_device) VALUES (%s,%s,%s,%s,%s)"
		val = (id_product, name, description, os, id_device)
		mycursor.execute(sql, val)
	except mysql.connector.IntegrityError:
		return "409"
		
	print("entro a insert")
	mydb.commit()
	print(mycursor.rowcount,"record inserted.")
	return "200"

@app.route("/insertSensor", methods=['GET'])
def InsertSensor():
	mydb = mysql.connector.connect(**config)

	mycursor = mydb.cursor()
	id_sensor = request.args.get('id_sensor')
	type_sensor = request.args.get('type')
	firmware = request.args.get('firmware')
	clasification = request.args.get('clasification')
	id_device = request.args.get('id_device')
	status = request.args.get('status')
	brand = request.args.get('brand')
	model = request.args.get('model')
	#time_register = request.args.get('time_register')
	x = request.args.get('x')
	y = request.args.get('y')

	# args = (id_floor, name, id_stage)
	# mycursor.callproc('insertFloor', args)
	try:
		sql = "INSERT INTO device (id_device, status, brand, model, min_con, max_con, use_time, time_register, time_unsubcribe, x, y ) VALUES (%s,%s,%s,%s, NULL, NULL, NULL, NULL, NULL, %s, %s)"
		val = (id_device, status, brand, model, x, y)
		mycursor.execute(sql, val)
	except mysql.connector.IntegrityError:
		return "409"

	try:
		sql = "INSERT INTO sensor (id_sensor, type, firmware, clasification, device_id_device) VALUES (%s,%s,%s,%s,%s)"
		val = (id_sensor, type_sensor, firmware, clasification, id_device)
		mycursor.execute(sql, val)
	except mysql.connector.IntegrityError:
		return "409"
		
	print("entro a insert")
	mydb.commit()
	print(mycursor.rowcount,"record inserted.")
	return "200"

@app.route("/deleteDevice", methods=['GET'])
def DeleteDevice():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor()
	id_device = request.args.get('id_device')

	sql = "UPDATE device SET status = %s WHERE id_device = %s"
	val = (0, id_device)
	mycursor.execute(sql, val)

	print(mycursor.rowcount,"record deleted.")
	mydb.commit()

	return "."

#Dado un id_device
@app.route("/searchDevice", methods=['GET'])
def SearchDevice():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)
	id_device = request.args.get('id_device')

	val = (id_device,)
	#mycursor.callproc('buscarStage', val)

	sql = "SELECT id_device, brand, model FROM device WHERE id_device = %s;"
	mycursor.execute(sql, val)

	row = mycursor.fetchone()
	id_device = {}
	if row is not None:
		id_device["brand"] = row[1]
		id_device["model"] = row[2]

	print(mycursor.rowcount,"record founded.")
	return jsonify(id_device)

@app.route("/type", methods=['GET'])
def Type():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)
	type_device = request.args.get('type_device')

	if(type_device == "product"):
		#mycursor.callproc('showUser')
		sql = "SELECT * FROM product"
		mycursor.execute(sql)
	elif(type_device == "sensor"):
		sql = "SELECT * FROM sensor"
		mycursor.execute(sql)

	row = mycursor.fetchone()
	print(mycursor.rowcount,"record inserted.")
	device = {}
	while row is not None:
		device_id_device = {}
		device_id_device["id"] = row[0]
		device_id_device["name/type"] = row[1]
		device_id_device["descrip/firm"] = row[2]
		device_id_device["os/clas"] = row[3]
		device[row[4]] = device_id_device
		row = mycursor.fetchone()

	return jsonify(device), 200


@app.route("/modifyDevice", methods=['GET'])
def ModifyDevice():
	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	id_device = request.args.get('id_device')
	brand = request.args.get('brand')
	model = request.args.get('model')
	#time_register = request.args.get('time_register')
	x = request.args.get('x')
	y = request.args.get('y')

	sql = "UPDATE device SET brand = %s, model = %s, x = %s, y = %s WHERE id_device = %s"
	val = (brand, model, x, y, id_device)
	mycursor.execute(sql, val)

	mydb.commit()
	return "", 200

@app.route("/showAllDevice", methods=['GET'])
def ShowAllDevice():

	mydb = mysql.connector.connect(**config)
	mycursor = mydb.cursor(buffered=True)

	#mycursor.callproc('showUser')
	sql = "SELECT * FROM device WHERE status = 1"
	mycursor.execute(sql)
	
	row = mycursor.fetchone()
	print(mycursor.rowcount,"record inserted.")
	device = {}
	while row is not None:
		id_device = {}
		id_device["brand"] = row[2]
		id_device["model"] = row[3]
		id_device["x"] = row[9]
		id_device["y"] = row[10]
		device[row[0]] = id_device
		row = mycursor.fetchone()

	return jsonify(device), 200
