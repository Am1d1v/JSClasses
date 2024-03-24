


const task = {
    title: 'Task1',
    dueTo: new Date('2025/01/01'),

    get isOverdue(){
        return this.dueTo < new Date()
    }
}

console.log(task.isOverdue);