// Dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Our schema definition
const signUpSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Le nom est obligatoire']
        },
        email:  {
            type: String,
            required: [true, 'L\'adresse email est obligatoire'],
            validate: {
              validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
              },
              message: '{VALUE} n\'est pas un email valide'
            }
        }
    }
);

// We export the schema to use it anywhere else
export default mongoose.model('User', signUpSchema);
