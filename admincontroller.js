const Admin = require("../model/userpanel");
const User = require("../model/userpanel");




module.exports.Add_admin = async (req, res) => {
    try {
        if (req.body) {

            const checkData = await Admin.findOne({ task: req.body.task });
            if (checkData) {
                return res.status(200).json({ mes: "Admin Data insert already", status: 1 })
            }
            else {


                const newpost = await Admin.create(req.body);
                if (newpost) {
                    return res.status(200).json({ mes: "Admin Data successfully insert", newpost: newpost, status: 1 })
                }
                else {
                    return res.status(200).json({ mes: "Admin not found", status: 0 })
                }

            }
        }
        else {
            return res.status(200).json({ mes: "invliad Data", status: 0 })
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ mes: "something worng", status: 0 })
    }
}

module.exports.editadmin = async (req, res) => {
    try {
        let editdata = await Admin.findByIdAndUpdate(req.params.id, req.body)
        if (editdata) {
            return res.status(200).json({ mes: "Edit record sucessfully", editdata: editdata, status: 1 });
        }
        else {
            return res.status(200).json({ mes: "invliad Data", status: 0 });

        }
    } catch (error) {
        console.log(error);
        return req.status(400).json({ mes: "something worng", status: 0 })
    }
}

module.exports.deleteadmin = async (req, res) => {
    try {
        let deletedata = await Admin.findByIdAndDelete(req.params.id, req.body)
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


module.exports.viewAlluser = async (req, res) => {
    try {
        const viewData = await User.find();
        if (viewData != "") {
            return res.status(200).json({
                msg: "Here is all Admin data", viewData: viewData, status: 1
            });
        } else {
            return res.status(200).json({ msg: "No Admin found", status: 0 });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ mes: "something worng", status: 0 })
    }
}

