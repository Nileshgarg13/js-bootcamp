const Person=function(firstname,lastname,age,likes=[])
{
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    this.likes=likes
}
Person.prototype.getbio=function()
{
    let bio=`${this.firstname} is ${this.age}`  

    this.likes.forEach((like)=>
    {bio+=`likes ${like}`})

    return bio
}
Person.prototype.setName=function(fullname)
{
    this.firstname=fullname.split(' ')[0]
    this.lastname=fullname.split(' ')[1]
}
const me=new Person('nilesh' ,'garg',21,[])
me.setName('NILESH GARG')
console.log(me.getbio())