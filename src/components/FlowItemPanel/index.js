import React, { useState } from 'react';
import { ItemPanel } from 'gg-editor';
import { Card, Input } from 'antd/es';
import Select from "antd/es/select";
import "antd/es/card/style/css";
import "antd/es/select/style/css";
import NodeItem from "./NodeItem";
import nodes from "./nodesData";
import "./style.css";
import { categoriesList } from "../../utils";

const FlowItemPanel = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [items, setItems] = useState(nodes);
  const handleCategorySelectChange = (cat) => {
    setSelectedCategory(cat);
  };
  /*
  function onChange(e) {
    const keyword = e.target.value.toLowerCase();
    const searchResults = nodes.filter(n => n.label.toLowerCase().includes(keyword));
    setItems(searchResults);
  }*/

  return (
    <ItemPanel className="sidebar-wrapper">
      <div className="dropdown-container">
        <Select value={selectedCategory} onChange={handleCategorySelectChange}>
          {categoriesList.map((item, i) => (
            <Select.Option key={i} value={item}>
              {item}
            </Select.Option>
          ))}
        </Select>
      </div>

      <Card className="sidebar" bodyStyle={{ padding: 0 }}>
        {nodes &&
          nodes.map((item, i) => {
            if (
              item.category === selectedCategory ||
              selectedCategory === "All"
            )
              return <NodeItem key={i} {...item} />;
          })}
      </Card>
    </ItemPanel>
  );
};

export default FlowItemPanel;
