const express = require("express")
const router = express.Router() // need to import for router
const Route_location = require("../Models/route_location") // is the schema location


router.post('/createnew', async (req, res) => {
    try {
        const { name_body, rollno_body } = req.body
        const data = new Route_location({
            name: name_body, rollno: rollno_body
        })
        console.log(data)
        const savedData = await data.save()
        res.json(savedData)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

})


// This code is for adding a new element with format given in models folder: route_location

// POST request: localhost5000/api/route_location/createnew
// and body data: {
//     "name_body": "abc",
//     "rollno_body": "123"
// }


router.get('/fetchdata', async (req, res) => {
    try {
        const data = await Route_location.find()
        res.json(data)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }

})

//fetch data, fetches all the data present in database, in the array format 
// GET request: localhost:5000/api/route_location/fetchdata





router.put("/updatedata/:id",
    async (req, res) => {
        const { name_body, rollno_body } = req.body
        try {
            //create a new note object
            const newData = {}
            if (name_body) { newData.name = name_body }
            if (rollno_body) { newData.rollno = rollno_body }


            //find the note to be updated and update it
            let data = await Route_location.findById(req.params.id)
            if (!data) { return res.status(404).send("Not found") }

            data = await Route_location.findByIdAndUpdate(req.params.id, { $set: newData }, { new: true })
            res.json({ data })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal server error")
        }

    }
)

// this is the put request to change the data having 648bc9a0d3672b20c9e08428 as ID :  localhost:5000/api/route_location/updatedata/648bc9a0d3672b20c9e08428
// the body data is: {
    // "name_body": "abc",
    // "rollno_body": "456"
//   }



router.delete("/deletenote/:id", async (req, res) => {
    try {

        let data = await Route_location.findById(req.params.id)
        if (!data) { return res.status(404).send("Not found") }

        //allow deletion only if user owns this note

        data = await Route_location.findByIdAndDelete(req.params.id)
        res.json(
            {
                "success": "Note has been deleted",
                data: data
            }
        )
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }



})

//will delete the data with delete request 648bc9a0d3672b20c9e08428 as ID : localhost:5000/api/route_location/deletenote/648bc9a0d3672b20c9e08428




module.exports = router //export function, necessary