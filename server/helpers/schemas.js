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
    price: Joi.number().required(),
    photoUrl:Joi.string().required(),
    description: Joi.string(),
    status: Joi.string(),
    });

export const Order = Joi.object({
    item: Joi.number().required(),
    itemCount:Joi.number().required(),
    owner: Joi.string().required(),
    processor: Joi.string().required(),
    prep_Status: Joi.string(),
    status: Joi.string(),
    });

export const product = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    type: Joi.string().required(),
    avatar: Joi.string(),
    status: Joi.string(),
    });

export const transaction = Joi.object({
    type: Joi.string().required(),
    product: Joi.number().required(),
    quantity: Joi.number().required(),
    avatar: Joi.string(),
    transaction_type: Joi.string().required(),
    status: Joi.string(),
    });

export const comment = Joi.object({
    content: Joi.string(),
    rate: Joi.number(),
    });