import joi from "joi";

export const quizValidation = async (req, res, next) => {
  const userSchema = joi
    .object({
      title: joi.string().required().messages({
        "any.required": "quiz name is  required",
      }),
      description: joi.string().required().messages({
        "any.required": "quiz instructions and description required",
      }),
    })
    .options({ allowUnknown: true });
  const value = await userSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};

export const questionValidation = async (req, res, next) => {
    const userSchema = joi
      .object({
        question: joi.string().required().messages({
          "any.required": "question is  required",
        }),
        answer: joi.string().required().messages({
          "any.required": "answer is required",
        }),
        quiz_id: joi.number().required().messages({
            "any.required": "quiz is required",
          }),
          options: joi.required().messages({
            "any.required": "options is required",
          }),
      })
      .options({ allowUnknown: true });
    const value = await userSchema.validate(req.body);
    if (value.error) {
      res.status(400).json({
        message: value.error.details[0].message.replace(/["'`]+/g, ""),
      });
    } else {
      next();
    }
  };
