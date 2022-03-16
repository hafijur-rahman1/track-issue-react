import React from "react";
import { Row, Col } from "react-bootstrap";

//   totalCount={totalCount}
// newCount={newCount}
// progressCount={progressCount}
// completedCount={completedCount}
const IssueBar = ({ totalCount, newCount, progressCount, completedCount }) => {
  return (
    <div div className="ms-5 mb-2">
      <Row>
        <Col>
          <span className="text-primary">Total:</span>
          {totalCount}
        </Col>
        <Col>
          <span className="text-info">New:</span>
          {newCount}
        </Col>
        <Col>
          <span className="text-success">In-Progress:</span>
          {progressCount}
        </Col>
        <Col>
          <span className="text-danger">Completed:</span>
          {completedCount}
        </Col>
      </Row>
    </div>
  );
};

export default IssueBar;
