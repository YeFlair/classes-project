class School { 
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents
    }
    get name() {
        return this._name
    }
    get level(){
        return this._level
    }
    get numberOfStudents(){
        return this.numberOfStudents
    }
    set NumberOfStudents(value){
        if(value.isNaN()){
            console.log('Invalid Input: numberOfStudents must be set to a number')
        } else{
            return this._numberOfStudents = value
        }
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
        let number = Math.floor(Math.random() * substituteTeachers.length) 
        return substituteTeachers[number]
    }

}

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickUpPolicy){
        super(name,'primary',numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy (){ 
        return this._pickUpPolicy
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'high', numberOfStudents)
        this._sportsTeams = sportsTeams
    }
    get sportsTeams() {
        return this._sportsTeams
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by parent, gardian, or a family member over the age of 13')

lorraineHansbury.quickFacts()
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

const alSmith = new HighSchool('Al E. Smith', 415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.sportsTeams