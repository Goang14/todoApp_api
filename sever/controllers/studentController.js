const SinhVien = require('../models/index')

class studentController {
    news = async(req, res) => {
        const data =  await SinhVien.find()
            if(data){
                res.json(data)
            }
    }

    createPost = async(req, res) => {
        const student =  new SinhVien(req.body);
        const result = await student.save()
            res.json(result)
    }

    editPost = (req, res) =>{
        SinhVien.findById(req.params.id, (err, post) => {
            if(err) {return res.json({err})}
            post.name = req.body.name
            post.age = req.body.age
            post.address = req.body.address
            post.save().then(result => {
                res.json({result})
            })
        })
    }

    deletePost = (req, res) => {
        SinhVien.remove({_id: req.params.id}, (err) => {
            if(err) {return res.json({err})}
            res.json()
        })
    }

}

module.exports = new studentController;