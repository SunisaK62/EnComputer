const { Win } = require("../models");

module.exports = {
    async index(req,res){
        try{
            const wins = await Win.findAll();
            res.send(wins);
        }
        catch(err){
            res.status(500).send({
                error: 'The wins information was incorrect'
            });
        }
    },
    async show(req,res){
        try{
            const win = await Win.findByPk(req.params.winId);
            res.send(win);
        }
        catch(err){
            res.status(500).send({
                error: 'The wins information was incorrect'
            });
        }
    },
    async create(req,res){
        try{
            const win = await Win.create(req.body)
            res.send(win.toJSON())
        } catch(err){
            res.status(500).send({
                error: 'Create win incorrect'
            })
        }
    },
    async put(req,res){
        try{
            await Win.update(req.body,{
                where: {
                    id: req.params.winId
                }
            })
            res.send(req.body)
        } catch(err){
            res.status(500).send({
                error: 'Update win incorrect'
            })
        }
    },
    async remove(req,res){
        try{
            const win = await Win.findOne({
                where: {
                    id: req.params.winId
                }
            })
            if(!win){
                return res.status(403).send({
                    error: 'The win information was incorrect'
                })
            }
            await win.destroy()
            res.send(win)
        } catch(err){
            res.status(500).send({
                error: 'Remove win incorrect'
            })
        }
    }
}
