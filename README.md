# node_couchdb_CRUD
node_couchdb_CRUD
#
https://docs.couchdb.org/en/stable/install/windows.html#installation-from-binaries

#
1.2. Installation on Windows

1.2.1. Installation from binaries

This is the simplest way to go.

Get the latest Windows binaries from the CouchDB web site:https://couchdb.apache.org/

Old releases are available at archive.

Follow the installation wizard steps. Be sure to install CouchDB to a path with no spaces, such as C:\CouchDB.

Your installation is not complete. Be sure to complete the Setup steps for a single node or clustered installation.

Open up Fauxton : Couch URL:http://localhost:5984/_utils/

# to start mongodb with path
mongod --dbpath /path 

# Mongod vs mongo 
https://stackoverflow.com/questions/4883045/mongodb-difference-between-running-mongo-and-mongod-databases
Mongod:

    mongod

(Short for Mongo Daemon) is a background process used by MongoDB server to get things done. This process is responsible for managing the whole MongoDB server tasks such as accepting requests, responding to users, managing memory requirement of MongoDB server operations and other things essential for MongoDB Server to run.

TLDR; Basically it is the MongoDB server

Mongo:

    Mongo

on the other hand, is an interactive JavaScript shell interface to MongoDB, which provides a powerful interface for system administrators as well as a way for developers to test queries and operations directly with the database. mongo also provides a fully functional JavaScript environment for use with a MongoDB

TLDR; Basically I think it as mongodb client which can be used as a shell to get access to MongoDB database server run my mongod instances
