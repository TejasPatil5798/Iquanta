export function MessageTemplates() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Message templates</h2>

        <div style={styles.headerRight}>
          <span style={styles.count}>0 of 3 created</span>

          <button style={styles.outlineBtn}>New folder</button>

          <button style={styles.outlineBtn}>Analyze ▼</button>

          <button style={styles.blackBtn}>New template ▼</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Left Section */}
        <div style={styles.textSection}>
          <h2 style={styles.heading}>
            Turn your best emails into
            <br />
            templates for your team
          </h2>

          <div style={styles.listItem}>
            <span style={styles.icon}>›</span>
            <p>
              <b>Create your own templates</b> or choose from a library written
              by HubSpot experts
            </p>
          </div>

          <div style={styles.listItem}>
            <span style={styles.icon}>›</span>
            <p>
              <b>Send more emails in less time</b>, and build on your past
              successes
            </p>
          </div>

          <div style={styles.listItem}>
            <span style={styles.icon}>›</span>
            <p>
              <b>Engage your recipients</b> with personalization, relevant
              documents, and meeting links
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://www.harvestroi.com/hubfs/HubSpot%20Iconography/traffic-analytics-1.svg"
            alt="template"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
    background: "#f6f8fb",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "12px",
    borderBottom: "1px solid #e5e7eb",
  },

  title: {
    fontSize: "24px",
    fontWeight: "600",
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  count: {
    fontSize: "14px",
    color: "#555",
  },

  outlineBtn: {
    padding: "7px 14px",
    border: "1px solid #ccc",
    background: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },

  blackBtn: {
    padding: "7px 14px",
    background: "#db5619",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "120px",
    marginTop: "80px",
  },

  textSection: {
    maxWidth: "500px",
  },

  heading: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "30px",
  },

  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "20px",
    fontSize: "16px",
    color: "#444",
  },

  icon: {
    background: "#6c5ce7",
    color: "#fff",
    borderRadius: "50%",
    width: "26px",
    height: "26px",
    minWidth: "26px",
    minHeight: "26px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "1",
    flexShrink: 0,
  },

  image: {
    width: "220px",
  },
};
