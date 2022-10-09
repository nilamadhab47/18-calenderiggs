const express = require('express');
const router = express.Router();
const eventController = require('./controllers/eventFormController')
const bannerController = require('./controllers/bannerFormController')
const bannerModel =require("./models/bannerSchema")
const eventModel =require("./models/eventSchema")

/////////CREATE//////////

router.post('/api/createEvent' , eventController.createEvent) 
router.post('/api/createBanner' , bannerController.createBanner)

////////GET//////////// 
router.get("/api/getBanner/:id", async (req, res) => {
	try {
		const getBanner = await bannerModel.findOne({ _id: req.params.id })
	res.send(getBanner)
	} catch {
		res.status(404)
		res.send({ error: "event doesn't exist!" })
	}
})
router.get("/api/getEvent/:id", async (req, res) => {
	try {
		const getEvent = await eventModel.findOne({ _id: req.params.id })
	res.send(getEvent)
	} catch {
		res.status(404)
		res.send({ error: "event doesn't exist!" })
	}
})
router.get('/api/getAllEvent', eventController.getAllEvents)
router.get('/api/getAllBanner', bannerController.getAllBanners)


////////DELETE//////////

router.delete('/api/deleteEvent/:id', eventController.deleteEvent)
router.delete('/api/deleteBanner/:id', bannerController.deleteBanner)


/////////UPDATE///////////////

router.put('/api/updateEvent/:id', eventController.updateEvent)
router.put('/api/updateBanner/:id', bannerController.updateBanner)




module.exports = router;