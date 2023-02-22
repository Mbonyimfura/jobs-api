    
const getAllJobs = {
    tags:['Job'],
    description:"List all Job",
    security: [
        {
            token: [],
        },
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const getJob = {
    tags:['Job'],
    description:"Get Job by id",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the Job",
            type:"string",
            example:"63caaf3527b29e1d399896da"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const createJob = {
    tags:['Job'],
    description:"Create a Job",
    security: [
        {
          token: [],
        },
    ],
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        company:{
                            type:"string",
                        },
                        position:{
                            type:"string",
                        },
                       status:{
                            type:"string",
                
                        }
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

const deleteJob = {
    tags:['Job'],
    description:"Delete the Job by id",
    security: [
        {
          token: [],
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the Job",
            type:"string"
        }
    ],

    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}

const updateJob = {
    tags:['Job'],
    description:"Update a Job",
    security: [
        {
            token: []
        },
    ],
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of the Job",
            type:"string"
        }
    ],
    requestBody:{
        content:{
            "multipart/form-data":{
                schema:{
                    type:"object",
                    properties:{
                       company:{
                            type:"string",
                        },
                        position:{
                            type:"string",
                        },
                      status:{
                            type:"string",
                           
                        }
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

exports.JobRouteDocs = {
    "/api/v1/jobs":{
        post:createJob
    },
    "/api/v1/jobs/getAll":{
        get:getAllJobs
    },
    "/api/v1/jobs/get/{id}":{
        get:getJob
    },
    "/api/v1/jobs/delete/{id}":{
        delete:deleteJob
    },
    "/api/v1/jobs/update/{id}":{
        patch:updateJob
    },
    
    
}