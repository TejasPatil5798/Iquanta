import React from "react";
import {
  FaSearch,
  FaPlus,
  FaEllipsisH,
  FaTable,
  FaFilter,
  FaSort,
  FaSave,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaCog,
  FaBuilding,
  FaEllipsisV
} from "react-icons/fa";
 
export function Companies() {
  const companies = [
    {
      id: 1,
      name: "HubSpot",
      owner: "No owner",
      createDate: "Yesterday at 12:05 PM GMT+5:30",
      phone: "--",
      lastActivity: "Yesterday at 12:05 PM GMT+5:30",
      city: "--",
      country: "--",
      industry: "--",
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
          width: 100%;
          box-sizing: border-box;
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
          padding: 8px 12px;
          border: 1px solid #cbd6e2;
          background: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #33475b;
        }
 
        .circleBtn {
          width: 35px;
          height: 35px;
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
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
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
          gap: 8px;
          flex-wrap: wrap;
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
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          width: 100%;
          border: 1px solid #e6e9ed;
        }
 
        .tableContainer::-webkit-scrollbar {
          height: 2px;
          background: transparent;
        }
 
        .tableContainer::-webkit-scrollbar-thumb {
          background: #cbd6e2;
          border-radius: 2px;
        }
 
        table {
          border-collapse: collapse;
          width: 100%;
          min-width: 2200px; /* increased to accommodate icons and spacing */
        }
 
        th {
          padding: 12px 40px;
          border-bottom: 1px solid #e6e9ed;
          text-align: left;
          background: #f7f9fb;
          font-weight: 600;
          font-size: 13px;
          color: #516f90;
          white-space: nowrap;
        }
 
        /* Light vertical line before each heading except the first */
        th:not(:first-child) {
          border-left: 2px solid #e6e9ed;
        }
 
        /* Header content: title left, icons right */
        .th-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
 
        /* Icons group - margin-left for space between title and icons */
        .header-icons {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 40px; /* extra gap between title and icons */
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
          padding: 12px 40px;
          border-bottom: 1px solid #e6e9ed;
          text-align: left;
          font-size: 14px;
          white-space: nowrap;
          color: #33475b;
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
          width: 100%;
          border: 1px solid #e6e9ed;
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
 
        .count {
          background: #33475b;
          color: white;
          padding: 2px 6px;
          border-radius: 12px;
          font-size: 12px;
          margin-left: 5px;
        }
 
        .closeBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #33475b;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          font-size: 12px;
          margin-left: 5px;
        }
      `}</style>
 
      <div className="container">
 
        <div className="topBar">
          <div className="leftSection">
            <button className="btn">
              <FaBuilding size={14} /> Companies <FaChevronDown size={12} />
            </button>
            <div className="btn" style={{ fontWeight: 'bold', gap: '8px' }}>
              All contacts
              <FaEllipsisH size={16} style={{ marginLeft: '2px' }} />
              <FaTimes size={12} style={{ marginLeft: '4px' }} />
            </div>
 
            <button className="btn">My companies</button>
 
            <button className="circleBtn">
              <FaPlus size={16} />
            </button>
          </div>
 
         
<div className="rightSection">
            <button className="btn">
              <FaEllipsisH size={16} />
            </button>
            <button className="addBtn">
               Add companies <FaChevronDown size={12} />
            </button>
          </div>
        </div>
 
       
 
<div className="searchBar">
          <div className="searchBox">
            <input placeholder="Search" />
            <FaSearch color="#516f90" size={13} />
          </div>
          <div className="actionBtns">
           
             <button className="btn"><FaTable size={12} /> Table view <FaChevronDown size={10} /></button>
                        {/* Settings icon button next to Table view */}
                        <button className="btn"><FaCog size={14} /></button>
                                    <button className="btn">Edit columns</button>
            <button className="btn"><FaFilter size={14} /> Filters</button>
            <button className="btn"><FaSort size={14} /> Sort</button>
            <button className="btn">Export</button>
           
            <button className="btn"><FaSave size={16} /></button>
                        <button className="btn">Save</button>
           
          </div>
        </div>
 
        <div className="filters">
          <span className="filterItem">Company owner <FaChevronDown size={12} /></span>
          <span className="filterItem">Create date <FaChevronDown size={12} /></span>
          <span className="filterItem">Last activity date <FaChevronDown size={12} /></span>
          <span className="filterItem">Lead status <FaChevronDown size={12} /></span>
          <span className="filterItem">+ More</span>
          <span className="filterItem"><FaCog size={14} /> Advanced filters</span>
        </div>
 
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>
                  <div className="th-content">
                    <span>Company name</span>
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
                    <span>Company owner</span>
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
                    <span>Create Date (GMT+5:30)</span>
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
                    <span>Phone Number</span>
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
                    <span>Last Activity Date (GMT+5:30)</span>
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
                    <span>City</span>
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
                    <span>Country/Region</span>
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
                    <span>Industry</span>
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
              {companies.map((company) => (
                <tr key={company.id}>
                  <td><input type="checkbox" /></td>
                  <td>{company.name}</td>
                  <td>{company.owner}</td>
                  <td>{company.createDate}</td>
                  <td>{company.phone}</td>
                  <td>{company.lastActivity}</td>
                  <td>{company.city}</td>
                  <td>{company.country}</td>
                  <td>{company.industry}</td>
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
 
              <span style={{ marginLeft: "20px", display: "flex", alignItems: "center", gap: "5px", color: "#00a4bd" }}>
                            25 per page <FaChevronDown size={12} />
            </span>
          </div>
        </div>
 
      </div>
    </>
  );
}
 
export default Companies;