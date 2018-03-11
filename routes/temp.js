email='a@a.com';
choice ='yes' || 'no';
// mongoose find function
Survey.findOne({
  id: surveyId,
    recipients:{
      $elemMatch:{email: email, responded: false}
    }
})

// mongoose find function


Survey.updateOne({
  id: surveyId,
    recipients:{
      $elemMatch:{email: email, responded: false}
    }
},{
  $inc:{[choice]:1},
  $set: {'recipients.$.responded': true}
 })
