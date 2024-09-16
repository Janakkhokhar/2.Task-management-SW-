const User = require("../model/userpanel");



module.exports.adduser = async (req, res) => {
    // console.log(req.body);
    try {
        if (req.body) {
            const data = await User.create(req.body);
            if (data) {
                return res.status(200).json({ mes: "data insert succesfully", data: data, status: 1 });
            }
            else {
                return res.status(200).json({ mes: "data null", status: 0 });

            }

        }
        else {
            return res.status(200).json({ mes: "data not found", status: 0 });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ mes: "something worng", status: 0 });
    }
}



module.exports.deleteuser = async (req, res) => {
    try {
        let deletedata = await User.findByIdAndDelete(req.params.id, req.body)
        if (deletedata) {
            return res.status(200).json({ mes: "Delete record sucessfully", deletedata: deletedata, status: 1 });
        }
        else {
            return res.status(200).json({ mes: "invliad Data", status: 0 });

        }
    } catch (error) {
        console.log(error);
        return req.status(400).json({ mes: "something worng", status: 0 })
    }
}

