import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const defaultIssue = {
  title: "",
  subTitle: "",
  assingedTo: "",
  startDate: "",
  endDate: "",
  priority: "low",
  status: "new",
  completedPercentage: 90,
};

const AddIssue = ({ addIssue }) => {
  const [issue, setIssue] = useState(defaultIssue);
  const [errors, setErrors] = useState({
    title: "",
    subTitle: "",
    assingedTo: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (evt) => {
    setIssue({
      ...issue,
      [evt.target.name]: evt.target.value,
    });
    setErrors({
      ...errors,
      [evt.target.name]: "",
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { title, subTitle, assingedTo } = issue;
    //checking error before submit form
    if (title === "") {
      setErrors((prevError) => ({
        ...prevError,
        title: "Title is Required",
      }));
    }
    if (subTitle === "") {
      setErrors((prevError) => ({
        ...prevError,
        subTitle: "Subtitle is Required",
      }));
    }
    if (assingedTo === "") {
      setErrors((prevError) => ({
        ...prevError,
        assingedTo: "This field is required",
      }));
    }
    if (startDate === "") {
      setErrors((prevError) => ({
        ...prevError,
        startDate: "Start Date is required",
      }));
    }
    if (endDate === "") {
      setErrors((prevError) => ({
        ...prevError,
        endDate: "End Date is required",
      }));
    }
    //return true if every element is true otherwise return false
    const isValid = Object.values(issue).every((elm) => elm);
    if (isValid) {
      //form submitting
      addIssue({
        id: uuid(),
        ...issue,
      });
      //reset form
      setIssue(defaultIssue);
    }
  };

  const {
    title,
    subTitle,
    assingedTo,
    startDate,
    endDate,
    priority,
    status,
    completedPercentage,
  } = issue;
  const {
    title: errorTitle,
    subTitle: errorSubTitle,
    assingedTo: errorAssingedTo,
    startDate: errorStartDate,
    endDate: errorEndDate,
  } = errors;
  return (
    <div className="m-5">
      <h1 className="mb-4 mt-4">Add Issue</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="title" column>
              Title :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="Enter your task Name"
              onChange={handleChange}
              isInvalid={errorTitle}
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {errorTitle}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="subTitle" column>
              Sub Title :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              name="subTitle"
              id="subTitle"
              onChange={handleChange}
              value={subTitle}
              placeholder="Enter your Task Details"
              isInvalid={errorSubTitle}
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {errorSubTitle}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="assingedTo" column>
              Assaing To :
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="assingedTo"
              id="assingedTo"
              value={assingedTo}
              placeholder="Enter responsible person name"
              onChange={handleChange}
              isInvalid={errorAssingedTo}
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {errorAssingedTo}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="startDate" column>
              Start Date
            </Form.Label>
          </Col>
          <Col sm={3}>
            <Form.Control
              type="date"
              onChange={handleChange}
              name="startDate"
              id="startDate"
              value={startDate}
              placeholder="Enter Start Date"
              isInvalid={errorStartDate}
            />
            <Form.Control.Feedback type="invalid" className="d-block">
              {errorStartDate}
            </Form.Control.Feedback>
          </Col>

          <Col sm={6}>
            <Row>
              <Col sm={3}>
                <Form.Label htmlFor="endDate" column>
                  End Date
                </Form.Label>
              </Col>
              <Col sm={9}>
                <Form.Control
                  type="date"
                  onChange={handleChange}
                  name="endDate"
                  id="endDate"
                  value={endDate}
                  placeholder="Enter Start Date"
                  isInvalid={errorEndDate}
                />
                <Form.Control.Feedback type="invalid" className="d-block">
                  {errorEndDate}
                </Form.Control.Feedback>
              </Col>
            </Row>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col sm={3}>
              <Form.Label htmlFor="priority" column>
                priority
              </Form.Label>
            </Col>
            <Col sm="auto">
              <Form.Check
                type="radio"
                name="priority"
                label="High"
                value="high"
                onChange={handleChange}
                checked={priority === "high"}
              />{" "}
            </Col>
            <Col xs="auto">
              <Form.Check
                type="radio"
                name="priority"
                label="Medium"
                value="medium"
                onChange={handleChange}
                checked={priority === "medium"}
              />{" "}
            </Col>
            <Col xs="auto">
              <Form.Check
                type="radio"
                name="priority"
                label="Low"
                value="low"
                onChange={handleChange}
                checked={priority === "low"}
              />{" "}
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col xs={3}>
              <Form.Label htmlFor="status" column>
                Status{" "}
              </Form.Label>
            </Col>

            <Col xs="auto">
              <Form.Check
                type="radio"
                onChange={handleChange}
                name="status"
                label="New"
                value="new"
                checked={status === "new"}
              />
            </Col>
            <Col xs="auto">
              <Form.Check
                type="radio"
                onChange={handleChange}
                name="status"
                label="In Progress"
                value="inProgress"
                checked={status === "inProgress"}
              />
            </Col>
            <Col xs="auto">
              <Form.Check
                type="radio"
                onChange={handleChange}
                name="status"
                label="Completed"
                value="completed"
                checked={status === "completed"}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Row>
            <Col xs={3}>
              <Form.Label htmlFor="completedPercentage" column>
                Completed In percentage :{" "}
              </Form.Label>
            </Col>
            <Col xs={4}>
              <Form.Range
                value={completedPercentage}
                name="completedPercentage"
                onChange={handleChange}
              />
            </Col>
            <Col xs={1}>{completedPercentage}</Col>
          </Row>
        </Form.Group>
        <Button variant="primary" size="md" type="submit">
          Submit Issue
        </Button>
      </Form>
    </div>
  );
};

export default AddIssue;
