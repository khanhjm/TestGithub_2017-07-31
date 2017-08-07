var userSchema = mongoose.Schema({
  fullName: string,
  userName: string,
  password: string,
  passwordConfirm: string,
  gender: string,
  email: string
})
exports.User = mongoose.model('User', userSchema)
// crud
module.exports = {
  // ------ add user -----
  addUser: function (req, res) {
    const fullName = req.body.fullName;
    const userName = req.body.userName;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;
    const gender = req.body.gender;
    const email = req.body.email;

    var dbUser = new User();
    dbUser.userName = userName;
    dbUser.password = password;
    dbUser.passwordConfirm = passwordConfirm;
    dbUser.gender = gender;
    dbUser.email = email;

    dbUser.save(function (err) {
      if(err){
        throw err;
      } else {
        console.log(dbUser);
      }
    })
  }
}