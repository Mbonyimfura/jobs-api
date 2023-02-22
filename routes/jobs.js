const router=require('express').Router()

const { getAllJobs,getJob,createJob,updateJob,deleteJob }=require('../controllers/jobs')

router.route('/').post(createJob)
router.route('/getAll').get(getAllJobs)
router.route('/get/:id').get(getJob)
router.route('/update/:id').patch(updateJob)
router.route('/delete/:id').delete(deleteJob)

module.exports=router