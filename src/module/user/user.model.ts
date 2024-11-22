import { model, Schema } from 'mongoose'
import { IUser } from './user.interface';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    require: [true, "please enter your name"],
  },
  age: { type: Number, require: [true ,"please enter your age"]},
  email: {
    type: String,
    require: [true,"please enter your email"],
    unique:true,
    validate:{
        validator:function(value:string){
            return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        },
        message:"{VALUE} is not a valid email"
    },
    immutable:true,
  },
  photo: String,
  role: { type: String,
    enum:{values:['user','admin'] , message:'{VALUE} is not naeem'},
     require: true,
    default:'user' },
  userStatus: { type: String,enum:['active','inactive'], require: true,default:'active' },
  
})


// hook -> pre
userSchema.pre("find",function(this,next){
    this.find({userStatus:{$eq:'active'}})
    next()
})

// post hook
userSchema.post('find',function(docs,next){
  docs.forEach((doc:IUser)=>{
    doc.name=doc.name.toUpperCase()
  })
  next()
})


const User =model<IUser>("User",userSchema)
export default User;