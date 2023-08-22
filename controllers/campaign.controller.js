const { Campaign } = require('../models');

const CampaignsController = {

    async getCampaigns(req, res) {
        try {
            const campaigns = await Campaign.findAll();

            res.json({
                status: 200,
                message: 'Successfully get data ToolStock',
                data: campaigns,
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    async addCampaigns(req, res) {
        try {
            const { title, desc, image, price_collect, target_price_collect, institution_name, verified } = req.body;
            const campaign = await Campaign.create({ title, desc, image, price_collect, target_price_collect, institution_name, verified });
            res.status(201).json({ status: 201, message: "Successfully Create Campaign", data: campaign });
        } catch (error) {
            console.log("error create campaign", error);
            res.status(500).json({ message: 'Server error' });
        }
    },

    async updateCampaign(req, res) {
        try {
            const { title, desc, image, price_collect, target_price_collect, institution_name, verified } = req.body;
            const { id } = req.params;

            const getCampaignsByPk = await Campaign.findByPk(id);

            if (!getCampaignsByPk) return res.status(404).json({ status: 404, message: "Campaign not Found!" });
            getCampaignsByPk.update({ title, desc, image, price_collect, target_price_collect, institution_name, verified });
            res.status(201).json({ status: 201, message: "Successfully Update Campaign", data: getCampaignsByPk });
        } catch (error) {
            console.log("error update Campaign", error);
            res.status(500).json({ message: 'Server Error' });
        }
    },


    async deleteCampaign(req, res) {
        try {

            const { id } = req.params;
            const deleteCampaign = await Campaign.destroy({ where: { id } });
            res.status(201).json({ status: 201, message: "Successfully delete Campaign" });
        } catch (error) {
            console.log("error update Campaign", error);
            res.status(500).json({ message: 'Server Error' });
        }
    }

}


module.exports = CampaignsController;