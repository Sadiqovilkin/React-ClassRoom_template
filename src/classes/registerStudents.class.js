class RegisterStudents {
    constructor(fullname,username,email,password,profileImg){
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profileImg = profileImg;
        this.grades = []
        this.isAdmin = false
        this.isLogged = false
    }
}
export default RegisterStudents