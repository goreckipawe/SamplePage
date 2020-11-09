export interface Agenda {
    paths: Path[];
    breaks: Break[];
}

export interface Path {
    path: string;
    topics: string[];
    startTimes: string[];
    endTimes: string[];
    durations: number[];
}

export interface PathUser {
    path: string;
    topic: string;
    startTime: string;
    endTime: string;
    duration: number;
}

export interface Break {
    title: string;
    startTime: string;
    duration: number;
}

export interface Lecture {
    path_id: number;
    topic_id: number;
}