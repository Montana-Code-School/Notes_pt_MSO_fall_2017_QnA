# MongoDB

MongoDB is a document oriented database program. It allows us to store information
and recall it, and it is particularly well suited to how we will be working with
NodeJS.

MongoDB holds our *databases*. Each *database* in Mongo is filled with *collections*,
and those *collections* are filled with *documents*.

It is important to remember that we are storing objects in Mongo. The format that
MongoDB follows is very similar to what you might see in a JSON document, and for the
most part, that is how you will be interacting with them.

Some of the strengths of MongoDB include it's document model, the fact it is
easily used in a JavaScript environment, and that it can allow for highly
distributed databases, existing in many places at once.

## Installation

We will be using homebrew to install mongodb.

First, update brew:

`brew update`

And then, install MongoDB:

`brew install mongodb`

Once we have that installed, we will need to fix the permissions on the db folder.
This command will set our user as the owner of the /data/db folder.

`sudo chown -R $USER /data/db`

Now, we can start the mongo daemon (runs in the background):

`mongod`

And open up the mongo cli in another tab:

`mongo`

## Using Mongo from the Terminal

Soon we will be using Mongo within Node, but for now, we need to understand
what MongoDB really is.

List all available databases:

`show dbs`

Create a new database:

`use <dbname>`

Check which db is selected:

`db`

Show all collections in the db

`show collections`

Create a new *collection*:

`db.createCollection('name')`

Add a new *document*:

`db.<name of collection>.insertOne({object})`

View the *documents* in the *collection*:

`db.<name of collection>.find()`
