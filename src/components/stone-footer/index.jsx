import React from "react";
import "./index.less";
import { Row, Col } from "antd";
const StoneFooter = () => {
  return (
    <div className="stone-footer">
      <Row>
        <Col>
          <p className="footer-text">
            copyright© 2020 Stone Technology Inc. Ver1.0.0
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default StoneFooter;
