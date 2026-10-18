import { NextFunction, Request, Response } from "express";

const notfound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND);
};
