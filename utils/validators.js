import Joi from "joi";

export const validateWarehouse = (warehouse) => {
  const schema = Joi.object({
    warehouse_name: Joi.string().required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
    contact_name: Joi.string().required(),
    contact_position: Joi.string().required(),
    contact_phone: Joi.string().pattern(/^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-?\d{4}$/).required(),
    contact_email: Joi.string().email().required()
  }).strict();

  return schema.validate(warehouse, { abortEarly: false });
};

export const validateInventory = (inventory) => {
  const schema = Joi.object({
    item_name: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    status: Joi.string().required(),
    quantity: Joi.int().required()
  }).strict();

  return schema.validate(inventory, { abortEarly: false });
};