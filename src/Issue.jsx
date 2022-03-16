import React from "react";
import { FaEdit, FaTrashAlt, FaCheckSquare } from "react-icons/fa";
import { Badge, ProgressBar } from "react-bootstrap";

const Issue = ({ issue, completeIssue }) => {
  const {
    id,
    title,
    assingedTo,
    endDate,
    priority,
    status,
    completedPercentage,
  } = issue;
  const lowClass = priority === "low" ? "primary" : "";
  const highClass = priority === "high" ? "danger" : "";
  const mediumClass = priority === "medium" ? "info" : "";

  const lowPercentaceClass = completedPercentage < 30 ? "danger" : "";
  const mediumPercentaceClass =
    completedPercentage > 40 && completedPercentage < 70 ? "info" : "";
  const highPercentaceClass = completedPercentage > 70 ? "primary" : "";
  const completedStatus =
    status === "completed" ? (
      <span
        style={{ textDecoration: "line-through", textDecorationColor: "red" }}
      >
        completed
      </span>
    ) : (
      status
    );

  return (
    <tr key={id}>
      <td className="text-center">{id}</td>
      <td className="text-center">{title}</td>
      <td className="text-center">
        <Badge bg={`${lowClass}${highClass}${mediumClass}`} pill>
          {" "}
          {priority}
        </Badge>
      </td>
      <td className="text-center">{completedStatus}</td>
      <td className="text-center">{assingedTo}</td>
      <td className="text-center">{endDate}</td>

      <td className="text-center">
        <ProgressBar
          variant={`${lowPercentaceClass}${highPercentaceClass}${mediumPercentaceClass}`}
          label={completedPercentage}
          now={completedPercentage}
          striped
          animated
        />{" "}
      </td>
      <td className="text-center">
        <FaEdit className="text-info me-3" />
        <FaCheckSquare
          className="text-success me-3"
          onClick={() => completeIssue(id)}
        />
        <FaTrashAlt className="text-danger me-3" />
      </td>
    </tr>
  );
};
export default Issue;
//31.minutes
