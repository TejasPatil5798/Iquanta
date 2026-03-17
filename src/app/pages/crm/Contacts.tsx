import React from "react";
import {
  FaSearch,
  FaPlus,
  FaEllipsisH,
  FaTable,
  FaColumns,
  FaFilter,
  FaSort,
  FaChartBar,
  FaDownload,
  FaSave,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaCog,
  FaUser,
  FaEllipsisV,
  FaSortAmountUp,
} from "react-icons/fa";

export function Contacts() {
  const contacts = [
    {
      id: 1,

      name: "Brian Halligan",

      firstName: "Brian",

      lastName: "Halligan",

      email: "bh@hubspot.com",

      phone: "--",

      jobTitle: "Executive Chairperson",

      sessions: 0,

      firstSite: "--",

      lastPage: "--",

      avgPageviews: 0,
    },

    {
      id: 2,

      name: "Maria Johnson",

      firstName: "Maria",

      lastName: "Johnson",

      email: "emailmaria@hubspot.com",

      phone: "--",

      jobTitle: "Salesperson",

      sessions: 0,

      firstSite: "--",

      lastPage: "--",

      avgPageviews: 0,
    },
  ];

  return (
    <>
      <style>{`

        .container {

          padding: 20px;

          font-family: Arial, sans-serif;

          background: #f5f8fa;

          min-height: 100vh;

          overflow-x: hidden;

        }
 
        .topBar {

          display: flex;

          justify-content: space-between;

          align-items: center;

          margin-bottom: 15px;

        }
 
        .leftSection {

          display: flex;

          gap: 10px;

          align-items: center;

        }
 
        .rightSection {

          display: flex;

          gap: 10px;

          align-items: center;

        }
 
        .btn {

          padding: 6px 10px;

          border: 1px solid #cbd6e2;

          background: white;

          border-radius: 6px;

          cursor: pointer;

          font-size: 13px;

          display: flex;

          align-items: center;

          gap: 4px;

          color:#33475b;

        }
 
        .circleBtn {

          width: 32px;

          height: 32px;

          border-radius: 50%;

          border: 1px solid #cbd6e2;

          background: white;

          display: flex;

          align-items: center;

          justify-content: center;

          cursor: pointer;

        }
 
        .addBtn {

          background: #ff7a59;

          color: white;

          border: none;

          padding: 6px 12px;

          border-radius: 6px;

          cursor: pointer;

          font-size: 13px;

          display: flex;

          align-items: center;

          gap: 4px;

        }
 
        .searchBar {

          display: flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 10px;

          flex-wrap: nowrap;

        }
 
        .searchBox {

          display: flex;

          align-items: center;

          gap: 8px;

          border: 1px solid #cbd6e2;

          background: white;

          padding: 6px 12px;

          border-radius: 30px;

          width: 45%;

          min-width: 450px;

          max-width: 450px;

        }
 
        .searchBox input {

          border: none;

          outline: none;

          width: 100%;

          font-size: 13px;

        }
 
        .actionBtns {

          display: flex;

          gap: 6px;

          flex-wrap: nowrap;

        }
 
        .filters {

          display: flex;

          gap: 25px;

          font-size: 16px;

          margin-bottom: 15px;

          color: #1c8bb8;

          flex-wrap: wrap;

          align-items: center;

          font-weight: 600;

        }
 
        .filterItem {

          display: flex;

          align-items: center;

          gap: 5px;

          cursor: pointer;

        }
 
        .tableContainer {

          background: white;

          border-radius: 8px;

          overflow-x: auto;

          box-shadow: 0 1px 3px rgba(0,0,0,0.08);

          width: 100%;

          border:1px solid #e6e9ed;

        }
 
        .tableContainer::-webkit-scrollbar {

          height: 4px;

        }
 
        .tableContainer::-webkit-scrollbar-thumb {

          background: #cbd6e2;

          border-radius: 2px;

        }
 
        table {

          border-collapse: collapse;

          width: 100%;

          min-width: 2200px; /* Increased to accommodate more spacing */

        }
 
        th {

          padding: 15px 40px;  /* Increased horizontal padding from 20px to 40px */

          border-bottom: 1px solid #e6e9ed;

          text-align: left;

          background: #f7f9fb;

          font-weight: 600;

          font-size: 13px;

          color: #516f90;

          white-space: nowrap;

          text-transform: uppercase;

        }
 
        /* Light vertical line between headings (except first) */

        th:not(:first-child) {

          border-left: 1px solid #e6e9ed;

        }
 
        /* Header content: title left, icons right */

        .th-content {

          display: flex;

          justify-content: space-between;

          align-items: center;

          width: 100%;

        }
 
        /* Icons group - increased margin-left for more space between title and icons */

        .header-icons {

          display: flex;

          align-items: center;

          gap: 8px;

          margin-left: 40px; /* Increased from 20px to 40px for more gap */

        }
 
        /* Square box for the three-dot icon */

        .icon-square {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          width: 24px;

          height: 24px;

          border: 1px solid #cbd6e2;

          border-radius: 4px;

          background: white;

          color: #516f90;

          cursor: pointer;

        }
 
        .icon-square:hover {

          background: #f0f4f8;

        }
 
        td {

          padding: 15px 40px;  /* Match th padding for consistency */

          border-bottom: 1px solid #e6e9ed;

          text-align: left;

          font-size: 14px;

          white-space: nowrap;

          color:#33475b;

        }
 
        .checkbox-cell {

          padding: 15px 20px;  /* Slightly less for checkbox column */

        }
 
        .checkbox-cell input[type="checkbox"] {

          width: 20px;

          height: 20px;

          cursor: pointer;

          vertical-align: middle;

        }
 
        tr:hover {

          background: #f9fbfd;

        }
 
        .pagination {

          display: flex;

          justify-content: center;

          align-items: center;

          gap: 20px;

          padding: 15px;

          background: white;

          margin-top: 10px;

          border-radius: 8px;

          border:1px solid #e6e9ed;

        }
 
        .paginationCenter {

          display: flex;

          align-items: center;

          gap: 15px;

        }
 
        .paginationItem {

          display: flex;

          align-items: center;

          gap: 5px;

          cursor: pointer;

          color: #516f90;

        }
 
        .page {

          border: 1px solid #cbd6e2;

          padding: 3px 8px;

          border-radius: 4px;

          cursor: pointer;

        }
 
        .page:hover {

          background: #f5f8fa;

        }
 
        .arrow {

          cursor: pointer;

          font-weight: bold;

          display: flex;

          align-items: center;

        }
 
        .emailTruncate {

          max-width: 200px;

          overflow: hidden;

          text-overflow: ellipsis;

          color:#00a4bd;

          cursor:pointer;

        }
 
        .nameWithSample {

          display: flex;

          align-items: center;

          gap: 5px;

        }
 
        .sampleTag {

          color: #7c98b6;

          font-size: 12px;

        }
 
        @media (max-width: 1100px) {

          .searchBar {

            flex-wrap: wrap;

          }

          .actionBtns {

            flex-wrap: wrap;

          }

        }

      `}</style>

      <div className="container">
        <div className="topBar">
          <div className="leftSection">
            <button className="btn">
              <FaUser size={12} /> Contacts <FaChevronDown size={12} />
            </button>
            <div className="btn" style={{ fontWeight: "bold", gap: "8px" }}>
              All contacts
              <FaEllipsisH size={16} style={{ marginLeft: "2px" }} />
              <FaTimes size={12} style={{ marginLeft: "4px" }} />
            </div>
            <button className="btn" style={{ fontWeight: "bold" }}>
              High Engagement
            </button>
            <button className="circleBtn">
              <FaPlus size={14} />
            </button>
          </div>

          <div className="rightSection">
            <button className="btn">
              <FaEllipsisH size={16} />
            </button>
            <button className="addBtn">
              Add contacts <FaChevronDown size={12} />
            </button>
          </div>
        </div>

        <div className="searchBar">
          <div className="searchBox">
            <input placeholder="Search" />
            <FaSearch color="#516f90" size={13} />
          </div>

          <div className="actionBtns">
            <button className="btn">
              <FaTable size={12} /> Table view <FaChevronDown size={10} />
            </button>
            <button className="btn">
              <FaCog size={14} />
            </button>
            <button className="btn">Edit columns</button>
            <button className="btn">
              <FaFilter size={12} /> Filters <FaChevronDown size={10} />
            </button>
            <button className="btn">
              <FaSort size={12} /> Sort <FaChevronDown size={10} />
            </button>
            <button className="btn">
              <FaChartBar size={12} /> Metrics
            </button>
            <button className="btn">Export</button>
            <button className="btn">
              <FaSave size={16} />
            </button>
            <button className="btn">Save</button>
          </div>
        </div>

        <div className="filters">
          <span className="filterItem">
            Contact owner <FaChevronDown size={15} />
          </span>
          <span className="filterItem">
            Create date <FaChevronDown size={15} />
          </span>
          <span className="filterItem">
            Last activity date <FaChevronDown size={15} />
          </span>
          <span className="filterItem">
            Lead status <FaChevronDown size={15} />
          </span>
          <span className="filterItem">+ More</span>
          <span className="filterItem">
            <FaCog size={15} /> Advanced filters
          </span>
        </div>

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th className="checkbox-cell">
                  <input type="checkbox" />
                </th>
                <th>
                  <div className="th-content">
                    <span>NAME</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>FIRST NAME</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>LAST NAME</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>EMAIL</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>PHONE NUMBER</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>JOB TITLE</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>NUMBER OF SESSIONS</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>FIRST REFERRING SITE</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>LAST PAGE SEEN</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="th-content">
                    <span>AVERAGE PAGEVIEWS</span>
                    <div className="header-icons">
                      <FaSort size={12} />
                      <span className="icon-square">
                        <FaEllipsisV size={12} />
                      </span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="checkbox-cell">
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div className="nameWithSample">
                      {contact.name}{" "}
                      <span className="sampleTag">(Sample Contact)</span>
                    </div>
                  </td>
                  <td>{contact.firstName}</td>
                  <td>
                    {contact.lastName}{" "}
                    <span className="sampleTag">(Sample Contact)</span>
                  </td>
                  <td>
                    <div className="emailTruncate">{contact.email}</div>
                  </td>
                  <td>{contact.phone}</td>
                  <td>{contact.jobTitle}</td>
                  <td>{contact.sessions}</td>
                  <td>{contact.firstSite}</td>
                  <td>{contact.lastPage}</td>
                  <td>{contact.avgPageviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <div className="paginationCenter">
            <div className="paginationItem">
              <FaChevronLeft size={12} /> Prev
            </div>

            <span className="page">1</span>

            <div className="paginationItem">
              Next <FaChevronRight size={12} />
            </div>

            <span
              style={{
                marginLeft: "20px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: "#00a4bd",
              }}
            >
              25 per page <FaChevronDown size={12} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
