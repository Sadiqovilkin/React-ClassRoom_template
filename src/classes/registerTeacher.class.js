class RegisterTeacher {
    constructor(fullname,username,email,password,profileImg){
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profileImg = profileImg;
        this.major = []
        this.isAdmin = true
        this.isLogged = false
    }
}
export default RegisterTeacher