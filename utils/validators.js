export const validateWarehouse = (warehouse) => {
  const errors = [];
  const value = { ...warehouse };

  // Required fields check
  const requiredFields = [
    'warehouse_name',
    'address',
    'city',
    'country',
    'contact_name',
    'contact_position',
    'contact_phone',
    'contact_email'
  ];

  requiredFields.forEach(field => {
    if (!warehouse[field]) {
      errors.push(`${field.replace('_', ' ')} is required`);
    }
  });

  // Phone number format validation
  const phoneRegex = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-?\d{4}$/;
  if (warehouse.contact_phone && !phoneRegex.test(warehouse.contact_phone)) {
    errors.push('contact phone must be in format: +1 (123) 456-7890');
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (warehouse.contact_email && !emailRegex.test(warehouse.contact_email)) {
    errors.push('contact email must be a valid email address');
  }

  return {
    error: errors.length > 0 ? { details: errors.map(e => ({ message: e })) } : null,
    value
  };
};

export const validateInventory = (inventory) => {
  const errors = [];
  const value = { ...inventory };

  // Required fields check
  const requiredFields = [
    'warehouse_id',
    'item_name',
    'description',
    'category',
    'status',
    'quantity'
  ];

  requiredFields.forEach(field => {
    if (!inventory[field] && inventory[field] !== 0) {
      errors.push(`${field.replace('_', ' ')} is required`);
    }
  });

  // warehouse_id must be a number
  if (inventory.warehouse_id && !Number.isInteger(Number(inventory.warehouse_id))) {
    errors.push('warehouse id must be a number');
  }

  // quantity must be a non-negative number
  if (inventory.quantity !== undefined) {
    const quantity = Number(inventory.quantity);
    if (!Number.isInteger(quantity) || quantity < 0) {
      errors.push('quantity must be a non-negative number');
    }
    value.quantity = quantity;
  }

  // status must be either 'In Stock' or 'Out of Stock'
  if (inventory.status && !['In Stock', 'Out of Stock'].includes(inventory.status)) {
    errors.push('status must be either "In Stock" or "Out of Stock"');
  }

  return {
    error: errors.length > 0 ? { details: errors.map(e => ({ message: e })) } : null,
    value
  };
};