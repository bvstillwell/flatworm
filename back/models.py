from app import DB


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
