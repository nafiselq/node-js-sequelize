const express = require('express');
const router = express.Router();
const CampaignsController = require('../controllers/campaign.controller');

router.get('/campaign', CampaignsController.getCampaigns);
router.post('/campaign', CampaignsController.addCampaigns);
router.patch('/campaign/:id', CampaignsController.updateCampaign);
router.delete('/campaign/:id', CampaignsController.deleteCampaign);

module.exports = router;