import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import AddIssue from "./AddIssue";
import IssueBar from "./IssueBar";
import Issues from "./Issues";

import Navigation from "./Navigation";
import { useState } from "react";

function App() {
  //
  const [issues, setIssues] = useState([
    {
      id: "57b09d62-488b-4d19-b19c-1cb949ce1c12",
      title: "sample title",
      subTitle: "details of task",
      assingedTo: "kamal",
      startDate: "",
      endDate: "2022-03-16",
      priority: "low",
      status: "new",
      completedPercentage: 0,
    },
  ]);
  const [totalCount, setTotalCount] = useState(0);
  const [newCount, setNewCount] = useState(0);
  const [progressCount, setProgressCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  //
  const addIssue = (issue) => {
    setIssues([...issues, issue]);
    setTotalCount((prevCount) => prevCount + 1);
    if (issue.status === "new") {
      setNewCount((prevCount) => prevCount + 1);
    }
    if (issue.status === "inProgress") {
      setProgressCount((prevCount) => prevCount + 1);
    }
    if (issue.status === "completed") {
      setCompletedCount((prevCount) => prevCount + 1);
    }
  };

  //********for clicking 'complete icon'********
  const completeIssue = (id) => {
    //find issue based on  ID and modify that
    const issuesAfterComplete = issues.map((issue) => {
      if (issue.id === id) {
        return {
          ...issue,
          status: "completed",
          completedPercentage: 100,
        };
      }
    });
    setIssues(issuesAfterComplete);
    console.log(id);
  };
  return (
    <div className="m-3">
      <Navigation />
      <AddIssue addIssue={addIssue} />

      <Issues
        issues={issues}
        totalCount={totalCount}
        newCount={newCount}
        progressCount={progressCount}
        completedCount={completedCount}
        completeIssue={completeIssue}
      />
    </div>
  );
}

export default App;
