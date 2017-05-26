from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import flask.ext.restless
from flask_cors import CORS, cross_origin


APP = Flask(__name__)
CORS(APP)
APP.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///data/database.db"
APP.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

DB = SQLAlchemy(APP)



class Org(DB.Model):
    id = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    name = DB.Column(DB.String(128))
    address = DB.Column(DB.String(4096))

    def __repr__(self):
        return self.name


class Account(DB.Model):
    id = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    org_id = DB.Column(DB.Integer, DB.ForeignKey("org.id"), nullable=False)
    name = DB.Column(DB.String(128))
    code = DB.Column(DB.String(128))

    def __repr__(self):
        return "%s - %s" % (self.code, self.name)

MANAGER = flask.ext.restless.APIManager(APP, flask_sqlalchemy_db=DB)

MANAGER.create_api(Org, methods=['GET', 'POST', 'DELETE'])
MANAGER.create_api(Account, methods=['GET'])

APP.run()

# http://127.0.0.1:5000/api/org?q={"filters":[{"name":"name","op":"==","val":"Brad"}]}