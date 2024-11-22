import { Request, Response } from "express"
import { tourService } from "./tour.service"

const creteTour = async (req: Request, res: Response) => {
    try {
      const payload = req.body
      const result =await tourService.creteTour(payload)
  
      res.send({
        status:true,
        message: 'tour create successfully',
        data: result,
      })
    } catch (err) {
      res.send({
          status:false,
          message:"something went wrong",
          err,
      })
    }
  }
const getTour = async (req: Request, res: Response) => {
    try {
      const result =await tourService.getTour()
  
      res.send({
        status:true,
        message: 'tour get successfully',
        data: result,
      })
    } catch (err) {
      res.send({
          status:false,
          message:"something went wrong",
          err,
      })
    }
  }
const getSingleTour = async (req: Request, res: Response) => {
    try {
        const id= req.params.id
      const result =await tourService.getSingleTour(id)
  
      res.send({
        status:true,
        message: 'tour get single successfully',
        data: result,
      })
    } catch (err) {
      res.send({
          status:false,
          message:"something went wrong",
          err,
      })
    }
  }
const updateTour = async (req: Request, res: Response) => {
    try {
        const id= req.params.id
        const body =req.body
      const result =await tourService.updateTour(id,body)
  
      res.send({
        status:true,
        message: 'tour updated successfully',
        data: result,
      })
    } catch (err) {
      res.send({
          status:false,
          message:"something went wrong",
          err,
      })
    }
  }
const deleteTour = async (req: Request, res: Response) => {
    try {
        const id= req.params.id

      const result =await tourService.deleteTour(id)
  
      res.send({
        status:true,
        message: 'tour deleted successfully',
        data: result,
      })
    } catch (err) {
      res.send({
          status:false,
          message:"something went wrong",
          err,
      })
    }
  }
const getNextSchedule = async (req: Request, res: Response) => {
    try {
        const id= req.params.id

      const result =await tourService.getNextSchedule(id)
  
      res.send({
        status:true,
        message: 'tour deleted successfully',
        data: result,
      })
    } catch (err) {
      res.send({
          status:false,
          message:"something went wrong",
          err,
      })
    }
  }

  
export const tourController = {
    creteTour,
    getTour,
    getSingleTour,
    updateTour,
    deleteTour,
    getNextSchedule
  }