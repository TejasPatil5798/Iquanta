import React, { useState } from "react";
import { Button, Select, Table, Empty, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface Deal {
  id: number;
  name: string;
  owner: string;
  createDate: string;
  lastActivityDate: string;
  closeDate: string;
  stage: string;
  amount: number;
}

const initialDeals: Deal[] = [];

export function Deals() {
  const [deals, setDeals] = useState<Deal[]>(initialDeals);
  const [filters, setFilters] = useState({
    owner: "",
    stage: "",
  });

  const columns = [
    { title: "Deal Name", dataIndex: "name", key: "name" },
    { title: "Owner", dataIndex: "owner", key: "owner" },
    { title: "Create Date", dataIndex: "createDate", key: "createDate" },
    {
      title: "Last Activity",
      dataIndex: "lastActivityDate",
      key: "lastActivityDate",
    },
    { title: "Close Date", dataIndex: "closeDate", key: "closeDate" },
    { title: "Stage", dataIndex: "stage", key: "stage" },
    { title: "Amount ($)", dataIndex: "amount", key: "amount" },
  ];

  const filteredDeals = deals.filter(
    (deal) =>
      (filters.owner ? deal.owner === filters.owner : true) &&
      (filters.stage ? deal.stage === filters.stage : true),
  );

  const handleAddDeal = () => {
    const newDeal: Deal = {
      id: deals.length + 1,
      name: `New Deal ${deals.length + 1}`,
      owner: "Unassigned",
      createDate: new Date().toISOString().split("T")[0],
      lastActivityDate: new Date().toISOString().split("T")[0],
      closeDate: "",
      stage: "New",
      amount: 0,
    };
    setDeals([...deals, newDeal]);
  };

  const exportDeals = () => {
    const csv = [
      [
        "Deal Name",
        "Owner",
        "Create Date",
        "Last Activity",
        "Close Date",
        "Stage",
        "Amount",
      ],
      ...filteredDeals.map((d) => [
        d.name,
        d.owner,
        d.createDate,
        d.lastActivityDate,
        d.closeDate,
        d.stage,
        d.amount,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "deals.csv";
    a.click();
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Top bar */}
      <div
        style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}
      >
        <Select
          placeholder="Deal owner"
          style={{ width: 150 }}
          onChange={(value) => setFilters({ ...filters, owner: value })}
          allowClear
        >
          <Select.Option value="Alice">Alice</Select.Option>
          <Select.Option value="Bob">Bob</Select.Option>
        </Select>

        <DatePicker placeholder="Create date" />
        <DatePicker placeholder="Last activity date" />
        <DatePicker placeholder="Close date" />

        <Select
          placeholder="More"
          style={{ width: 140 }}
          onChange={(value) => console.log(value)}
        >
          <Select.Option value="advanced">Advanced filters</Select.Option>
          <Select.Option value="options">More options</Select.Option>
        </Select>

        <Button>Table view</Button>
        <Button>Edit columns</Button>
        <Button>All Pipelines</Button>
        <Button>Filters</Button>
        <Button>Sort</Button>
        <Button onClick={exportDeals}>Export</Button>
        <Button>Save</Button>

        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddDeal}>
          Add deals
        </Button>
      </div>

      {/* Main content */}
      {filteredDeals.length === 0 ? (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <div>
              <h3>Build a winning sales process</h3>
              <p>
                Use <strong>Deals</strong> to track opportunities across your
                custom sales pipeline and report on your revenue.
              </p>
              <a href="#">Read: How to design your sales process in HubSpot</a>
            </div>
          }
        />
      ) : (
        <Table
          dataSource={filteredDeals}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      )}
    </div>
  );
}
