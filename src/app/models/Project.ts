import { Task } from "./Task";

export type priority = 'low' | 'medium' | 'high';  // type custom

export interface Project {
    id: number;
    code: string;
    name: string;
    description?: string;
    start: Date;
    end?: Date;
    done: boolean;
    priority: priority;
    tasks: Task[];
}