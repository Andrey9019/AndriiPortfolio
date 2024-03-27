import React from 'react';

import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from 'react-icons/fa';
import {
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoRedux,
} from 'react-icons/bi';
import { TbBrandVscode } from 'react-icons/tb';

export const AboutSkills = () => {
  return (
    <>
      <p className="text-center text-lg font-semibold mb-2 uppercase">
        skills & tools
      </p>
      <ul className="grid grid-cols-3 gap-4">
        <SkillItem icon={<FaHtml5 />} text="Html" color="red" />
        <SkillItem icon={<FaCss3Alt />} text="Css" color="blue" />
        <SkillItem
          icon={<BiLogoJavascript />}
          text="Javascript"
          color="yellow"
        />
        <SkillItem icon={<BiLogoTypescript />} text="Typescript" color="blue" />
        <SkillItem icon={<FaReact />} text="React" color="#61dafb" />
        <SkillItem icon={<BiLogoRedux />} text="Redux" color="purple" />
        <SkillItem
          icon={<BiLogoTailwindCss />}
          text="TailwindCss"
          color="#06B6D4"
        />
        <SkillItem icon={<TbBrandVscode />} text="Vscode" color="#007ACC" />
        <SkillItem icon={<FaGithub />} text="Github" color="black" />
      </ul>
    </>
  );
};

const SkillItem = ({ icon, text, color }) => {
  return (
    <li className="flex flex-col items-center">
      {React.cloneElement(icon, { size: 70, color: color })}
      <span className="mt-2">{text}</span>
    </li>
  );
};
