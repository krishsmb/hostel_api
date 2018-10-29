var config = {};

//Set port number
config.port = 3000;

config.response = {
    status: '',
    function: '',
    message: '',
    data: {}
};

config.database = {
    host: '10.10.10.254',
    user: 'root',
    password: '',
    database: 'hostel_test',
    connectionLimit: 100,
    timezone: 'utc',
    supportBigNumbers: true,
    bigNumberStrings: true
};

config.message = {
    success: "Success",
    userCreate: "User created successfully.",
    userUpdate: "User details updated successfully.",
    userCreateErr: "An error occure, please try again later.",
    usernameExist : "Username is already exist.",
    emailExist : "Email ID is already exist."
};

module.exports = config;