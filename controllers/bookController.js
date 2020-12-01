const db = require('../models/Book');

// Export Controller Methods
module.exports = {
    create: function(req, res) {

        db.create(req.body)
        .then((data)=>{
            res.json({resp:data})
        })
    },
    load: function(req, res){        
        db.find(
            {}, (err, data)=>{
                if(err) res.json({err})
                else res.json({data})
            }
        )
    },
    remove:function(req,res){
        db.remove({"_id":req.params.id},(err, data)=>{            
            if(err) res.json({err})
            else res.json({data})
        })
    }
};


