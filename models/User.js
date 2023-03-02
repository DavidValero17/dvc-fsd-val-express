const {model, Schema} = require('mongoose');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
    
    
        email: {
            type: String,
            unique: true,
            required: true
        },
    
    
        password: {
            type: String,
            required: true
        },
    
    
        isactive: {
            type: Boolean,
            default: true
        },
        
},
{
    timestamps: true
}
    // {
    //     role_id: {
    //         type: ObjectId,
    //         required: true
    //     }
    // }
)

const User = model('User', userSchema);

module.exports = User;