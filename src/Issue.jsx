import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaCheckSquare } from "react-icons/fa";
import { Badge, ProgressBar, Modal, Button } from "react-bootstrap";

const Issue = ({ issue, completeIssue, deleteIssue }) => {
  const [show, setShow] = useState(false);
  const handleClose = (evt) => {
    //if user click delete btn
    console.log(evt.target.dataset.action);
    if (evt.target.dataset.action === "delete") {
      deleteIssue(id);
    }
    setShow(false);
  };
  const handleShow = () => setShow(true);
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
  //modal
  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>Are you sure you want to Delete</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" data-Action="delete" onClick={handleClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );

  ////
  ///

  return (
    <>
      {modal}
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
          <FaTrashAlt className="text-danger me-3" onClick={handleShow} />
        </td>
      </tr>
    </>
  );
};
export default Issue;
//
