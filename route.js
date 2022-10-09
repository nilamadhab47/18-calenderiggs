const express = require('express');
const router = express.Router();
const eventController = require('./controllers/eventFormController')
const bannerController = require('./controllers/bannerFormController')
const bannerModel =require("./models/bannerSchema")
const eventModel =require("./models/eventSchema")

/////////CREATE//////////

router.post('/createEvent' , eventController.createEvent) 
router.post('/createBanner' , bannerController.createBanner)

////////GET//////////// 
router.get("/getBanner/:id", async (req, res) => {
	try {
		const getBanner = await bannerModel.findOne({ _id: req.params.id })
	res.send(getBanner)
	} catch {
		res.status(404)
		res.send({ error: "event doesn't exist!" })
	}
})
router.get("/getEvent/:id", async (req, res) => {
	try {
		const getEvent = await eventModel.findOne({ _id: req.params.id })
	res.send(getEvent)
	} catch {
		res.status(404)
		res.send({ error: "event doesn't exist!" })
	}
})
router.get('/getAllEvent', eventController.getAllEvents)
router.get('/getAllBanner', bannerController.getAllBanners)


////////DELETE//////////

router.delete('/deleteEvent/:id', eventController.deleteEvent)
router.delete('/deleteBanner/:id', bannerController.deleteBanner)


/////////UPDATE///////////////

router.put('/updateEvent/:id', eventController.updateEvent)
router.put('/updateBanner/:id', bannerController.updateBanner)




module.exports = router;