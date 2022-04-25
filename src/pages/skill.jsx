import React from "react";
import Layout from "../components/Layout";
import NextIcon from "../components/Canvas/Icons/nextIcon";
import WordpressIcon from "../components/Canvas/Icons/WordpressIcon";
import ThreeIcon from "../components/Canvas/Icons/Three";

export default function SkillAndWork() {
  return (
    <Layout className="justify-start" title="Skills">
      <p className="my-10">Skills</p>
      <div className="flex w-screen justify-between h-20 sm:h-80">
        <NextIcon />
        <WordpressIcon />
        <ThreeIcon />
      </div>
    </Layout>
  );
}
