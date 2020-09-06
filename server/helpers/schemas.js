import Joi from '@hapi/joi';

export const Auth = Joi.object({
    username: Joi.string().pattern(/^[a-zA-Z0-9 *]{3,25}$/).required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9 *]{3,25}$/).required(),
    origin_type: Joi.string(),
    origin_id: Joi.number().min(0),
    });

export const Item = Joi.object({
    name: Joi.string().pattern(/^[a-zA-Z0-9 *]{3,25}$/).required(),
    food_type: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string(),
    });

export const Order = Joi.object({
    items: Joi.array().required(),
    status: Joi.string(),
    });

export const comment = Joi.object({
    content: Joi.string(),
    rate: Joi.number(),
    });