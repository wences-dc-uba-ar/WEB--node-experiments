# https://strongloop.com/strongblog/node-js-php-get-started/

npm install -g strongloop

slc loopback
	> 2.x (stable)
	> api-server

	Next steps:
	  Change directory to your app
	    $ cd locatewalmart
	  Create a model in your app
	    $ slc loopback:model
	  Compose your API, run, deploy, profile, and monitor it with Arc
	    $ slc arc
	  Run the app
	    $ node .

# add a datasource
slc loopback:datasource mymongo
	? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database): 
	? host: localhost
	? port: 
	? user: qubit
	? password: *****
	? database: locatewallmart

# https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

npm install

mongoimport --jsonArray -d locatewallmart -c store --type json --file walmart.json -h localhost --port 27017 

slc loopback:model
