import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { pc, sp, tab } from "../hooks/media";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <Btn onClick={handleBtn}>
          <ActiveLine1></ActiveLine1>
          <ActiveLine2></ActiveLine2>
          <ActiveLine2></ActiveLine2>
        </Btn>
      ) : (
        <Btn onClick={handleBtn}>
          <LineTop></LineTop>
          <LineCenter></LineCenter>
          <LineBottom></LineBottom>
        </Btn>
      )}

      <nav className="bg-gray-800 w-screen">
        <div className="flex items-center pl-8 h-14">
          {isOpen ? (
            <MenuActive className="flex space-x-4">
              <Link href="/">
                <a className="ml-4 sm:m-0 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </a>
              </Link>
              <Link href="/skill">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Skills
                </a>
              </Link>
            </MenuActive>
          ) : (
            <Menu className="flex space-x-4">
              <Link href="/">
                <a className="ml-4 sm:m-0 text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </a>
              </Link>
              <Link href="/skill">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Skills
                </a>
              </Link>
            </Menu>
          )}
        </div>
      </nav>
    </>
  );
}

{
  /* Btnのスタイル */
}
const Btn = styled.div`
  display: none;
  ${sp`
    display: block;
    position: fixed;
    z-index: 3;
    right: 13px;
    top: 12px;
    width: 42px;
    height: 42px;
    cursor: pointer;
    text-align: center;
`}
`;
const LineTop = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 6px;
  background: #fff;
  transition: 0.3s ease-in-out;
  top: 10px;
`;
const LineCenter = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 6px;
  background: #fff;
  transition: 0.3s ease-in-out;
  top: 20px;
`;
const LineBottom = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  left: 6px;
  background: #fff;
  transition: 0.3s ease-in-out;
  top: 30px;
`;
/* ナビ開いてる時のボタン */
const ActiveLine1 = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  transition: 0.3s ease-in-out;
  top: 16px;
  left: 6px;
  background: #fff;
  transform: rotate(-45deg);
`;
const ActiveLine2 = styled.span`
  display: block;
  position: absolute;
  width: 30px;
  height: 2px;
  transition: 0.3s ease-in-out;
  top: 16px;
  left: 6px;
  background: #fff;
  transform: rotate(45deg);
`;
{
  /* メニューのスタイル */
}

const Menu = styled.div`
  ${sp`
    flex-direction: column;
    position: absolute;
    left: -50%;
  `}
`;

const MenuActive = styled.div`
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 0;
  padding: 0 1rem 1rem 0;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
`;
