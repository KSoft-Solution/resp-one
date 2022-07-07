const expressAsyncHandler = require("express-async-handler");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

exports.getAllUser = expressAsyncHandler(async (req, res, next) => {
  const users = [
    {
      name: "ashok",
      job: "software",
    },
  ];
  return res.status(StatusCodes.OK).json({
    status: ReasonPhrases.OK,
    success: true,
    message: "success",
    data: users,
  });
});
