const { Program } = require('../models')
module.exports = {
    // get all Program
    async index(req, res) {
        try {
            const programs = await Program.findAll()
            res.send(programs)
        } catch (err) {
            res.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
    // create Program
    async create(req, res) {
        try {
            const program = await Program.create(req.body)
            res.send(program.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create program incorrect'
            })
        }
    },
    // edit Program, suspend, active
    async put(req, res) {
        try {
            await Program.update(req.body, {
                where: {
                    id: req.params.programId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update program incorrect'
            })
        }
    },
    // delete Program
    async remove(req, res) {
        try {
            const program = await Program.findOne({
                where: {
                    id: req.params.programId
                }
            })
            if (!program) {
                return res.status(403).send({
                    error: 'The information was incorrect'
                })
            }
            await program.destroy()
            res.send(program)
        } catch (err) {
            res.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
    // get Program by id
    async show(req, res) {
        try {
            const program = await Program.findByPk(req.params.programId)
            res.send(program)
        } catch (err) {
            newFunction()({
                error: 'The information was incorrect'
            })
        }

        function newFunction() {
            return req.status(500).send
        }
    },
}