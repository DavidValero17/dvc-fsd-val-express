const {model, Schema} = require('mongoose');

const roleSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Role = model('Role', roleSchema);

module.exports = Role;