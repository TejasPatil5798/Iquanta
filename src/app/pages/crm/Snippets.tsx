export function Snippets() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Snippets</h2>

        <div style={styles.headerRight}>
          <span style={styles.count}>0 of 3 created</span>

          <button style={styles.outlineBtn}>New folder</button>

          <button style={styles.blackBtn}>Create snippet</button>
        </div>
      </div>

      {/* Info Box */}
      <div style={styles.infoBox}>
        <span>
          <b>Your team has created 0 out of 3 snippets.</b> Unlock more snippets
          with Starter Customer Platform.
        </span>

        <button style={styles.upgradeBtn}>Upgrade</button>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Text Section */}
        <div style={styles.textSection}>
          <h3 style={styles.heading}>
            Save time writing emails and taking notes
          </h3>

          <p style={styles.text}>
            Create shortcuts to your most common responses in emails sent to
            prospects and notes logged in your CRM. Quickly send emails and log
            notes without having to type the same thing over and over.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://www.recipemarketing.co.nz/hubfs/Success.svg"
            alt="snippet"
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
    borderBottom: "1px solid #e5e7eb", // light line
    marginBottom: "20px",
  },

  title: {
    fontSize: "26px",
    fontWeight: "600",
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  count: {
    fontSize: "14px",
    color: "#555",
  },

  outlineBtn: {
    padding: "8px 14px",
    border: "1px solid #ccc",
    background: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
  },

  blackBtn: {
    padding: "8px 16px",
    background: "#df5113",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  infoBox: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "6px",
    padding: "14px",
    display: "flex",
    alignItems: "center",
    gap: "10px", // button beside text
    marginTop: "20px",
    marginBottom: "50px",
  },

  upgradeBtn: {
    padding: "6px 14px",
    border: "1px solid #ccc",
    background: "#f3f4f6",
    borderRadius: "6px",
    cursor: "pointer",
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "80px",
  },

  textSection: {
    maxWidth: "420px",
  },

  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },

  text: {
    color: "#555",
    lineHeight: "1.6",
  },

  image: {
    width: "200px",
  },
};
