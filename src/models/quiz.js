// Dependencies
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Our schema definition
const quizSchema = new Schema(
    {
        response1: {
            type: Number,
            required: [true, 'La réponse 1 est obligatoire']
        },
        response2: {
            type: Number,
            required: [true, 'La réponse 2 est obligatoire']
        },
        response3: {
            type: Number,
            required: [true, 'La réponse 3 est obligatoire']
        }
    }
);

// We export the schema to use it anywhere else
export default mongoose.model('Quiz', quizSchema);
