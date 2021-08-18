const Customer = require("../models/customer.model.js");

// Yaratish va saqlab qolish
exports.create = (req, res) => {

};

// Hamma malumotni olish bazadan
exports.findAll = (req, res) => {
};

// Bazadan id boyicha malumot topish
exports.findOne = (req, res) => {

};

// Berilgan id boyicha ma'lumotni yangilash
exports.update = (req, res) => {

};

// Berilgan id boyicha o'chirish ma'lumotni
exports.delete = (req, res) => {

};

// Hamma ma'lumotni o'chirish
exports.deleteAll = (req, res) => {

};

exports.create = (req, res) => {
    // Request qiymati
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Yangi cutomer yaratish
    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    // Customerni ba'zaga saqlash
    Customer.create(customer, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Xatolik yuz berdi."
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Customer.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Qidirishda xatolik."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Berilgan id dagi mijoz topilmadi ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Xatolik " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

exports.update = (req, res) => {
    // So'rovni tasdiqlash
    if (!req.body) {
        res.status(400).send({
            message: "Tarkib bo'sh bo'lishi mumkin emas!"
        });
    }

    Customer.updateById(
        req.params.customerId,
        new Customer(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Berilgan idga mos elemetn yo'q ${req.params.customerId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Yangilashda xato ro\'y berdi" + req.params.customerId
                    });
                }
            } else res.send(data);
        }
    );
};

exports.delete = (req, res) => {
    Customer.remove(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Berilgan id ga mos malumot topilmadi: ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Berilgan id li malumotni ochirish bomadi " + req.params.customerId
                });
            }
        } else res.send({ message: `O'chirish muvaffaqiyatli!` });
    });
};

exports.deleteAll = (req, res) => {
    Customer.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Xatolik yuz berdi."
            });
        else res.send({ message: `Hamma ma'lumot muvaffaqiyatli o'chirildi!` });
    });
};