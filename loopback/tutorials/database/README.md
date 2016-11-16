https://github.com/strongloop/loopback-example-database/tree/mysql#tutorial---mysql

slc loopback loopback-example-database
cd loopback-example-database
slc loopback:datasource accountDS
# -> mySQL
slc loopback:model Account

mkdir bin
cd bin

# automigrate
wget https://raw.githubusercontent.com/strongloop/loopback-example-database/mysql/bin/automigrate.js

# discover
wget https://raw.githubusercontent.com/strongloop/loopback-example-database/mysql/bin/discover-schema.js

# discover and build
wget https://raw.githubusercontent.com/strongloop/loopback-example-database/mysql/bin/discover-and-build-models.js
