// import { json } from "stream/consumers";

// 1. Define a type or interface for the Todo structure
export type PriorityType = "high" | "low" | "medium";


export interface TodoItem {
    id: number;
    todo: string;
    date_time?: string,
    isCompleted: boolean,
    priority: PriorityType;
}

// 2. Create the array using valid values and assign the type
const todos: TodoItem[] = [
    {
        id: 1,
        date_time: "2026-08-05T08:33:52.646Z",
        // date_time : "string",
        todo: "Complete JavaScript course",
        isCompleted: false,
        priority: "high"
    },
    {
        id: 2,
        todo: "Complete python course",
        date_time: "2026-08-05T08:33:52.646Z",
        isCompleted: false,
        priority: "low"
    },
    {
        id: 3,
        todo: "Complete typsript course",
        date_time: "2026-08-05T08:33:52.646Z",
        isCompleted: false,
        priority: "medium"
    },

];

export default todos;
