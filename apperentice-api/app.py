#!flask/bin/python
from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

#sample of data in database
trainees = [
    {
        '_id': 1,
        'name': 'Shu Lu',
        'username': 'sh@',
        'apperentice': 'Electrician', 
        'age': 42
    },
    {
        '_id': 2,
        'name': 'Lee Python',
        'username': 'le@',
        'apperentice': 'Barber', 
        'age': 23
    },
    {	
    	'_id': 3,
    	'name': 'Jik Zu',
    	'username': 'ji@',
        'apperentice': 'Tailor', 
        'age': 42
    },
    {	
    	'_id': 4,
    	'name': 'Mik Zu',
    	'username': 'mi@',
        'apperentice': 'Tailor', 
        'age': 44
    }
]

class Trainees_List(Resource):
	# to retrieve all trainees
	def get(self):
		for trainee in trainees:
			return {'response': trainees }, 200

class Trainees_By_Apperentice(Resource):
	# to retrieve all trainees by appeerentice
	trainees_by_apperentice_list = []
	def get(self, apperentice):
		for trainee in trainees:
			if apperentice == trainee['apperentice']:
				trainees_by_apperentice_list.append[trainee]
				return {'response': trainees_by_apperentice_list}, 200
		return {'response': 'No trainee found, are you sure of what you typed?'}


class Single_Trainee(Resource):
	#to retrieve a particular trainee details by specifying the username
	def get(self, username):
		for trainee in trainees:
			if (username == trainee["username"]):
				return trainee, 200
		return {'response': ' %s not yet registered, signup' %(username)}, 400

	#to create a new user
	def post(self, username):
		parser = reqparse.RequestParser()
		parser.add_argument('_id')
		parser.add_argument('name')
		parser.add_argument('age')
		parser.add_argument('username')
		parser.add_argument('apperentice')
		args = parser.parse_args()

		for trainee in trainees:
			if ( username == trainee["username"]):
				return {'response':'Trainee with username %s already exists' %(username)}, 400

		new_trainee = {
			'_id': args['_id'],
			'name': args['name'],
			'age': args['age'],
			'username': username,
			'apperentice': args['apperentice']}
		trainees.append(new_trainee)
		return {'new_trainee': 'Welcome %s' %(username)}, 201

	#to update details of trainee
	def put(self, username):
		parser = reqparse.RequestParser()
		parser.add_argument('_id')
		parser.add_argument('name')
		parser.add_argument('username')
		parser.add_argument('age')
		parser.add_argument('apperentice')
		args = parser.parse_args()

		for trainee in trainees:
			if (username==trainee['username']):
				trainee['age'] = args['age']
				return {'response':trainee}, 200

		new_trainee = {
			'_id': args['_id'],
			'name': args['name'],
			'age': args['age'],
			'username': username,
			'apperentice': args['apperentice']
		}
		trainees.append(new_trainee)
		return {'new_trainee':new_trainee}, 201

	#to delete trainee 
	def delete(self, username):
		global trainees
		trainees = [trainees for trainee in trainees if trainee['username'] != username]
		return {'response': '%s is deleted.' %(username)}, 200		

api.add_resource(Single_Trainee, '/single_trainee/<username>', endpoint='a_trainee')
api.add_resource(Trainees_List, '/trainees_list', endpoint='all_trainees')
api.add_resource(Trainees_By_Apperentice, '/trainees_by_apperentice/<apperentice>', endpoint='trainees_by_apperentice')


if __name__ == '__main__':
    app.run(debug=True)
