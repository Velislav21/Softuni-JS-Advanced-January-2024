class JobOffers {

    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {

        const result = [];
        candidates.forEach(candidate => {
            let [name, education, yearsExperience] = candidate.split('-');

            let person = this.jobCandidates.find(person => person.name == name);

            if (!person) {
                this.jobCandidates.push({
                    name,
                    education,
                    yearsExperience
                })
                result.push(`${name}`);
            }
            if (person) {
                if (person.yearsExperience < yearsExperience) {
                    person.yearsExperience = yearsExperience;
                }
            }
        })
        return `You successfully added candidates: ${result.join(', ')}.`;
    }
    jobOffer(chosenPerson) {
        let hiredPerson = '';

        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        let person = this.jobCandidates.find(a => a.name == name);
        if (person) {

            if (person.yearsExperience < minimalExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            }
            else {
                person.yearsExperience = 'hired';
                hiredPerson = person.name;
            }
        } else {
            throw new Error(`${name} is not in the candidates list!"`)
        }


        return `Welcome aboard, our newest employee is ${name}.`;
    }
    salaryBonus(name) {

        let person = this.jobCandidates.find(personName => personName.name == name)

        if (!person) {
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (person.education == 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        }
        if (person.education == 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
    }
    candidatesDatabase(){
        if(this.jobCandidates.length == 0){
            throw new Error('Candidate Database is empty!');
        }
        let result = [];

        result.push('Candidates list:');

        this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name)).map(e => result.push(`${e.name}-${e.yearsExperience}`));
        return result.join("\n");
    }
}
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());