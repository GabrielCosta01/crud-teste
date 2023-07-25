interface Task {
    name: String,
    description: String,
    isDone: Boolean,
    createdAt: Date
}

interface TaskRequest {
    name: String,
    description: String,
    isDone: Boolean,
}