// req and res manage

import { Request, Response } from 'express'
import User from './user.model'
import { userService } from './user.service'

const creteUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body
    
    const result =await userService.creteUser(payload)

    res.send({
      status:true,
      message: 'user create successfully',
      data: result,
    })
  } catch (err) {
    res.json({
        status:false,
        message:"something went wrong",
        err,
    })
  }
}

const getUser = async (req: Request, res: Response) => {
  try {
   
    const result =await userService.getUser()

    res.send({
      status:true,
      message: 'user get successfully',
      data: result,
    })
  } catch (err) {
    res.json({
        status:false,
        message:"something went wrong",
        err,
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const userId = req.params.userId
    const result =await userService.getSingleUser(userId)

    res.send({
      status:true,
      message: 'single user get successfully',
      data: result,
    })
  } catch (err) {
    res.json({
        status:false,
        message:"something went wrong",
        err,
    })
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId= req.params.userId
    const body=req.body
    const result =await userService.updateUser(userId,body)

    res.send({
      status:true,
      message: ' user updated successfully',
      data: result,
    })
  } catch (err) {
    res.json({
        status:false,
        message:"something went wrong",
        err,
    })
  }
}
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId =req.params.userId
    const result =await userService.deleteUser(userId)

    res.send({
      status:true,
      message: ' user deleted successfully',
      data: {},
    })
  } catch (err) {
    res.json({
        status:false,
        message:"something went wrong",
        err,
    })
  }
}

export const userController = {
  creteUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser
}
