const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    username:{type:String},
    password:{
        type:String,
        select:false, //密码是否显示
        set(val){
            return require('bcrypt').hashSync(val,10)
            //$2b$10$Bu7QZJOaraJz9LSPRtLsfOPv4XuN1sm5w4Z0AIJAeiKPN66gm3ZL2
            //$2b$10$TNnYSuTpLunP68321MhxiOt4QHHHzha8hw/k6qAO3/aH2Tg2XhAi6
        }
    }
})

module.exports=mongoose.model('AdminUser',schema)