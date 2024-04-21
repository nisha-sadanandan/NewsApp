import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://nishaasnaveen:4Jtu4ob5kwUCt5XM@cluster0.xw6vahd.mongodb.net/?retryWrites=true&w=majority/FSDCrashCourse');
}

main().then(console.log("connected to DB")).catch(err =>console.log(err))

const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
})

const User = mongoose.model('user',userSchema,"user")
export default User
