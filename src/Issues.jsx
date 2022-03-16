import React from "react";
import { Table } from "react-bootstrap";

import Issue from "./Issue";
import IssueBar from "./IssueBar";
const Issues = ({
  issues,
  totalCount,
  newCount,
  progressCount,
  completedCount,
  completeIssue,
}) => {
  return (
    <>
      <p>all issues</p>
      <IssueBar
        totalCount={totalCount}
        newCount={newCount}
        progressCount={progressCount}
        completedCount={completedCount}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Title</th>
            <th className="text-center">Priority</th>
            <th className="text-center">Status</th>
            <th className="text-center">Assigned To</th>
            <th className="text-center">Due Date</th>
            <th className="text-center">Completed </th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <Issue key={issue.id} issue={issue} completeIssue={completeIssue} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
//38 minutes
export default Issues;
