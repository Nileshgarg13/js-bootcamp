class Person{
    constructor(firstname,lastname,age,likes=[])
    {
            this.firstname=firstname
            this.lastname=lastname
            this.age=age
            this.likes=likes
    }
    getbio()
    {
        let bio=`${this.firstname} is ${this.age}`  

    this.likes.forEach((like)=>
    {bio+=`likes ${like}`})

    return bio

    }
    setName(fullname)
    {
        this.firstname=fullname.split(' ')[0]
        this.lastname=fullname.split(' ')[1]
    }
}
class Student extends Person{
    constructor(firstname,lastname,age,likes,grades)
    {
        super(firstname,lastname,age,likes)
        this.grades=grades
    }
    getbio()
    {
        if(this.grades>=70)
        {
            return `${this.firstname} has passed`
        }
        else{return `${this.firstname} has failed`}
    }
    updategrade(marks)
    {
        this.grades+=marks
        console.log(this.getbio())
    }
}
const me=new Student('nilesh' ,'garg',21,[],82)
me.setName('NILESH GARG')
console.log(me.getbio())
me.updategrade(-52)