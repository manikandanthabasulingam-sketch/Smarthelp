import { useState } from "react";

const INITIAL_TICKETS = [
  {
    id: "ticket-1048",
    customerName: "Maya Thompson",
    issue: "Locked out after changing the phone number on her account.",
    priority: "High",
    status: "Open",
  },
  {
    id: "ticket-1047",
    customerName: "Daniel Kim",
    issue: "Invoice 10482 appears to include a duplicate charge.",
    priority: "Medium",
    status: "Open",
  },
  {
    id: "ticket-1046",
    customerName: "Aisha Robinson",
    issue: "The return label is missing from order 87319.",
    priority: "Low",
    status: "Open",
  },
  {
    id: "ticket-1045",
    customerName: "Luis Moreno",
    issue: "Update the billing address before the next renewal.",
    priority: "Low",
    status: "Resolved",
  },
];

const PRIORITIES = ["Low", "Medium", "High"];

function Icon({ name, size = 20 }) {
  const paths = {
    brand: (
      <>
        <path d="M4.5 7.5h15v9h-15z" />
        <path d="m5 8 7 5 7-5" />
        <path d="M8 18.5h8" />
      </>
    ),
    tickets: (
      <>
        <path d="M5 4.5h14v15H5z" />
        <path d="M8 8.5h8M8 12h8M8 15.5h5" />
      </>
    ),
    open: (
      <>
        <path d="M12 3.5v9" />
        <path d="m8.5 9 3.5 3.5L15.5 9" />
        <path d="M5 14.5v4h14v-4" />
      </>
    ),
    resolved: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 12.5 4.2 4.2L19 7" />,
    chevron: <path d="m9 18 6-6-6-6" />,
  };

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

function MetricCard({ label, value, detail, icon, tone }) {
  return (
    <article className={`metric-card metric-${tone}`}>
      <div className="metric-copy">
        <p className="metric-label">{label}</p>
        <p className="metric-value">{value}</p>
        <p className="metric-detail">{detail}</p>
      </div>
      <span className="metric-icon">
        <Icon name={icon} size={21} />
      </span>
    </article>
  );
}

function TicketRow({ ticket, onResolve }) {
  const initials = ticket.customerName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <li className={`ticket-row priority-${ticket.priority.toLowerCase()}`}>
      <div className="customer-avatar" aria-hidden="true">
        {initials}
      </div>
      <div className="ticket-copy">
        <p className="customer-name">{ticket.customerName}</p>
        <p className="ticket-issue">{ticket.issue}</p>
      </div>
      <span className={`priority-badge priority-badge-${ticket.priority.toLowerCase()}`}>
        <span className="badge-dot" />
        {ticket.priority}
      </span>
      <span className={`status-badge status-${ticket.status.toLowerCase()}`}>
        {ticket.status}
      </span>
      <button
        aria-label={
          ticket.status === "Resolved"
            ? `Ticket for ${ticket.customerName} is resolved`
            : `Resolve ticket for ${ticket.customerName}`
        }
        className={`resolve-button${ticket.status === "Resolved" ? " is-resolved" : ""}`}
        type="button"
        disabled={ticket.status === "Resolved"}
        onClick={() => onResolve(ticket.id)}
      >
        {ticket.status === "Resolved" ? (
          <>
            <Icon name="check" size={15} />
            Resolved
          </>
        ) : (
          "Resolve"
        )}
      </button>
    </li>
  );
}

export default function App() {
  const [tickets, setTickets] = useState(INITIAL_TICKETS);
  const [customerName, setCustomerName] = useState("");
  const [issue, setIssue] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const openCount = tickets.filter((ticket) => ticket.status === "Open").length;
  const resolvedCount = tickets.length - openCount;

  function handleCreateTicket(event) {
    event.preventDefault();

    const trimmedName = customerName.trim();
    const trimmedIssue = issue.trim();

    if (!trimmedName || !trimmedIssue) {
      setFeedback({
        type: "error",
        message: "Add a customer name and issue description to create a ticket.",
      });
      return;
    }

    const newTicket = {
      id: crypto.randomUUID(),
      customerName: trimmedName,
      issue: trimmedIssue,
      priority,
      status: "Open",
    };

    setTickets((currentTickets) => [newTicket, ...currentTickets]);
    setCustomerName("");
    setIssue("");
    setPriority("Medium");
    setFeedback({
      type: "success",
      message: `Ticket created for ${trimmedName}.`,
    });
  }

  function handleResolveTicket(ticketId) {
    setTickets((currentTickets) =>
      currentTickets.map((ticket) =>
        ticket.id === ticketId && ticket.status === "Open"
          ? { ...ticket, status: "Resolved" }
          : ticket,
      ),
    );
    setFeedback({ type: "success", message: "Ticket marked as resolved." });
  }

  function clearFeedback() {
    if (feedback.message) {
      setFeedback({ type: "", message: "" });
    }
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#overview" aria-label="QuickDesk home">
            <span className="brand-mark">
              <Icon name="brand" size={23} />
            </span>
            <span>QuickDesk</span>
          </a>
          <div className="workspace-label">
            <span className="workspace-dot" />
            Shared support desk
          </div>
        </div>
      </header>

      <main id="overview" className="page-content">
        <section className="page-heading" aria-labelledby="page-title">
          <div>
            <p className="eyebrow">TEAM WORKSPACE</p>
            <h1 id="page-title">Support overview</h1>
            <p className="page-subtitle">
              Keep customer requests moving, together.
            </p>
          </div>
          <a className="heading-link" href="#ticket-list">
            View queue
            <Icon name="chevron" size={16} />
          </a>
        </section>

        <section className="metrics-grid" aria-label="Ticket summary">
          <MetricCard
            label="Total tickets"
            value={tickets.length}
            detail="Across your shared queue"
            icon="tickets"
            tone="blue"
          />
          <MetricCard
            label="Open tickets"
            value={openCount}
            detail="Awaiting a resolution"
            icon="open"
            tone="amber"
          />
          <MetricCard
            label="Resolved tickets"
            value={resolvedCount}
            detail="Successfully closed"
            icon="resolved"
            tone="green"
          />
        </section>

        <div className="work-area">
          <section className="panel create-panel" aria-labelledby="create-heading">
            <div className="panel-heading">
              <span className="panel-icon panel-icon-blue">
                <Icon name="plus" size={19} />
              </span>
              <div>
                <h2 id="create-heading">Create a ticket</h2>
                <p>Capture a new customer request.</p>
              </div>
            </div>

            <form className="ticket-form" onSubmit={handleCreateTicket}>
              <div className="field-group">
                <label htmlFor="customer-name">Customer name</label>
                <input
                  autoComplete="name"
                  id="customer-name"
                  name="customerName"
                  onChange={(event) => {
                    setCustomerName(event.target.value);
                    clearFeedback();
                  }}
                  placeholder="e.g. Taylor Morgan"
                  required
                  value={customerName}
                />
              </div>

              <div className="field-group">
                <label htmlFor="issue-description">Issue description</label>
                <textarea
                  id="issue-description"
                  name="issue"
                  onChange={(event) => {
                    setIssue(event.target.value);
                    clearFeedback();
                  }}
                  placeholder="What does the customer need help with?"
                  required
                  rows={4}
                  value={issue}
                />
              </div>

              <div className="field-group">
                <label htmlFor="ticket-priority">Priority</label>
                <select
                  id="ticket-priority"
                  name="priority"
                  onChange={(event) => {
                    setPriority(event.target.value);
                    clearFeedback();
                  }}
                  value={priority}
                >
                  {PRIORITIES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {feedback.message && (
                <p
                  className={`form-feedback feedback-${feedback.type}`}
                  role={feedback.type === "error" ? "alert" : "status"}
                >
                  {feedback.message}
                </p>
              )}

              <button className="submit-button" type="submit">
                <Icon name="plus" size={18} />
                Create ticket
              </button>
            </form>
            <p className="form-footnote">New tickets are added as open.</p>
          </section>

          <section
            className="panel queue-panel"
            id="ticket-list"
            aria-labelledby="queue-heading"
          >
            <div className="queue-heading">
              <div>
                <div className="queue-title-row">
                  <h2 id="queue-heading">Ticket queue</h2>
                  <span className="queue-count">{tickets.length}</span>
                </div>
                <p>Customer requests shared with your team.</p>
              </div>
              <span className="queue-open-label">
                <span className="workspace-dot" />
                {openCount} open
              </span>
            </div>

            {tickets.length > 0 ? (
              <ul className="ticket-list">
                {tickets.map((ticket) => (
                  <TicketRow
                    key={ticket.id}
                    ticket={ticket}
                    onResolve={handleResolveTicket}
                  />
                ))}
              </ul>
            ) : (
              <div className="empty-state">
                <span className="empty-icon">
                  <Icon name="tickets" size={24} />
                </span>
                <h3>Your queue is clear</h3>
                <p>Create a ticket when a new customer request comes in.</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
