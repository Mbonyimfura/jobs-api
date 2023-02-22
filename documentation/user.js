
const register = {
tags:['User'],
description:"Create a User",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    name:{
                        type:"string",
                        description:"user name",
                        example:"shooter"
                    },
                    email:{
                        type:"string",
                        description:"user email",
                        example:"shooter@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:"user password",
                        example:"secrete"
                    },
                   
                }
            }
        }
    }
},
responses:{
    200:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}

const login = {
tags:['User'],
description:"Login",
requestBody:{
    content:{
        "application/json":{
            schema:{
                type:"object",
                properties:{
                    email:{
                        type:"string",
                        description:" user name",
                        example:"shooter@gmail.com"
                    },
                    password:{
                        type:"string",
                        description:" user password",
                        example:"123456"
                    },
                }
            }
        }
    }
},
responses:{
    200:{
        description:"OK",
        content:{
            "application/json":{
                type:"object",
                example:{
                    status:"success",
                    data:[]
                }
            }
        }
    }
}
}


exports.userRouteDocs = {
"/api/v1/auth/register":{
    post:register,
},
"/api/v1/auth/login":{
    post:login,
},
 
};