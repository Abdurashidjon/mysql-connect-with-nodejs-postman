module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
  
    // yangi baza yaratadi
    app.post("/customers", customers.create);
  
    // bazadagi barcha malumotni qaytarib beradi
    app.get("/customers", customers.findAll);
  
    // bazadagi id boyicha malumotni qaytaradi
    app.get("/customers/:customerId", customers.findOne);
  
    // berilgan id boyicha malumotni yangilaydi
    app.put("/customers/:customerId", customers.update);
  
    // berilgan id boyicha bazadan malumot ochiradi
    app.delete("/customers/:customerId", customers.delete);
  
    // bazaning hamma malumotini ochiradi
    app.delete("/customers", customers.deleteAll);
  };