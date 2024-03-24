

// Object Getter/Setter Exaple

/* const task = {
    title: 'Task1',
    dueTo: new Date('2024/01/01'),

    get isOverdue(){
        return this.dueTo < new Date()
    },

    set isOverdue(isTaskOverdue){
        // If task is overdued input new date
        if(isTaskOverdue){
            this.dueTo = new Date('2026/01/01')
        }
    }
}

console.log(task.isOverdue);

task.isOverdue = true
console.log(task); */



// Class Getter/Setter Example
class Task{
    constructor(title, dueDate){
        this.title = title;
        this.dueDate = dueDate;
    }

    get isOverdue(){
        return this.dueDate < new Date();
    }

    set dueDate(date){

        if(date < new Date()) {
            return 
        }
        this._dueDate = date
    }

}   

const newTask = new Task('Task2', new Date('2025/01/01'));
console.log(newTask);


