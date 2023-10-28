export interface Ticket {

    id: number;
    title: string;
    description: string;
    creationDate: Date;
    priority: string;
    status: string;
    userId: number;
    comments?: Comment[];
    // historyLog?: HistoryLog[];

}