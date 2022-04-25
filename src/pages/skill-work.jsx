import React from "react";
import Layout from "../components/Layout";
import NextIcon from "../components/Canvas/Icons/nextIcon";
import WordpressIcon from "../components/Canvas/Icons/WordpressIcon";

export default function SkillAndWork() {
  return (
    <Layout title="skill-work">
      <p className="mb-10">skill-work</p>
      <div className=" flex-wrap sm:flex-nowrap flex w-screen justify-between h-30">
        <NextIcon />
        <WordpressIcon />
      </div>
    </Layout>
  );
}
