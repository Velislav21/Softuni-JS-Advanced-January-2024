function crew(worker){

    let waterIntake = 0.1 * worker.weight * worker.experience
    if (worker.dizziness == true){

        worker.levelOfHydrated += waterIntake
        worker.dizziness = false
    }
    return worker
}
crew({ weight: 120,

    experience: 20,
    
    levelOfHydrated: 200,
    
    dizziness: true })