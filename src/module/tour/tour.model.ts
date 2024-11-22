import { model, Schema } from "mongoose"
import TTourModel, { ITour, ITourMethods } from "./tour.interface"


const tourSchema = new Schema<ITour,TTourModel,ITourMethods>({
    name:{
        type:String,
        require:true
    },
    durationHours:{
        type:String,
        require:true,
    },
    averageRating:{
        type:Number,
        default:5
    },
    price:{
        type:Number,
        require:true
    },
    coverImage:{
        type:String,
        require:true
    },
    images:[String],
    startDate:{type:Date},
    startLocation:{type:String},
    location:[String],
    slug:String,
})

tourSchema.methods.getNextNearestStartDateAndEndData=function(){
    const today=new Date()

    const futureDate =this.startDate.filter((strartD:Date)=>{
        return strartD> today
    })
   
    futureDate.sort((a:Date,b:Date)=>a.getTime()-b.getDate())
   
    const nerrestStartDate =futureDate.[0]
    const estimatedEndDate=new Date(nerrestStartDate.getTime() + this.durationHours*60*60 *1000)

    return {
        nerrestStartDate,
        estimatedEndDate
    }
}



const Tour= model<ITour,TTourModel>("Tour",tourSchema)
 
export default Tour;
