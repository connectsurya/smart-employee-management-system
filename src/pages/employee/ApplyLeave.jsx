import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, Row, Col, Container } from "react-bootstrap";
import { applyLeave } from "../../services/leaveService";

function ApplyLeave() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.startDate || !form.endDate || !form.reason) {
      alert("Please fill all fields");
      return;
    }

    if (form.endDate < form.startDate) {
      alert("End date cannot be before start date");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        userId: user.id,
        startDate: form.startDate,
        endDate: form.endDate,
        reason: form.reason,
      };
      await applyLeave(payload);
      alert("Leave Applied Successfully");

      setForm({
        startDate: "",
        endDate: "",
        reason: "",
      });

      navigate("/employee/leave-history");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid>
      <Card className="border-0 shadow-lg rounded-4">
        <Card.Body className="p-4">
          <div className="mb-4">
            <h3 className="fw-bold">Apply for Leave</h3>
            <p className="text-muted">
              Submit your leave request quickly and easily.
            </p>
          </div>

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Label className="fw-semibold">Start Date</Form.Label>
                <Form.Control
                  type="date"
                  className="py-2 rounded-3"
                  value={form.startDate}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      startDate: e.target.value,
                    })
                  }
                />
              </Col>

              <Col md={6} className="mb-3">
                <Form.Label className="fw-semibold">End Date</Form.Label>
                <Form.Control
                  type="date"
                  className="py-2 rounded-3"
                  value={form.endDate}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      endDate: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Leave Reason</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter leave reason..."
                className="rounded-3"
                value={form.reason}
                onChange={(e) =>
                  setForm({
                    ...form,
                    reason: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Button
              type="submit"
              variant="warning"
              className="px-5 py-2 fw-bold text-white rounded-3"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Leave"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ApplyLeave;
