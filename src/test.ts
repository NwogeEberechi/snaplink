// Given an array of function logs, where each log
// consists of a function name, a timestamp, and
// an event (either start or end), return the total
// execution time for each function. The timestamp is an integer
// representing milliseconds since the start of the program.

type ExecutionLog = {
    name: string;
    time: number;
    event: "start" | "end";
  };
  
  function calculateExecutionTimes(log: Array<ExecutionLog>) {
    // const startTime = log.filter(item => item.event === "start")
    // const endTime = log.filter(item => item.event === "end")
  
    // Your code goes here
    const executionTimeResults = log.reduce((acc, item) => {
      if (item.event === "start" && !acc[item.name]) {
        acc[item.name] = item.time;
      }
  
      if (item.event === "end" && acc[item.name]) {
        acc[item.name] = item.time - acc[item.name];
      }
  
      return acc;
    }, {});
  
    return executionTimeResults;
  }
  
  console.log(
    calculateExecutionTimes([
      { name: "main", time: 0, event: "start" },
      { name: "subTask1", time: 5, event: "start" },
      { name: "subTask1", time: 10, event: "end" },
      { name: "subTask2", time: 15, event: "start" },
      { name: "subTask2", time: 20, event: "end" },
      { name: "main", time: 25, event: "end" },
    ])
  );