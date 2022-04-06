const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes") 

// Connect to MongoDB database
mongoose.connect("mongodb+srv://pazzo:test123@cluster0.4qk2g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
        app.use(express.json()) 
        app.use("/api", routes) 

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})