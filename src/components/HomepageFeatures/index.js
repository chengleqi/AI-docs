import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "使用简单",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>简单配置，一键发起训练任务</>,
  },
  {
    title: "弹性伸缩",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>通过Rancher和Terraform，分钟级伸缩节点</>,
  },
  {
    title: "可观测性",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Prometheus+Grafana多维度实时观测</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
