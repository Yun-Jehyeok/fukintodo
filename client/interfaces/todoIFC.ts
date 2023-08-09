export interface todoIFC {
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  content: string;
  userId: string;
}

export interface csTodoIFC {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  content: string;
}

export interface todosIFC {
  date: string;
  data: csTodoIFC[];
}
