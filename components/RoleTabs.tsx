"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, HardHat, Route, Users, Wrench } from "lucide-react";

const roles = [
  { value: "supervisor", title: "Supervisor", summary: "Project-wide coordination and visibility.", Icon: Route, outcomes: ["Coordinate work across the Spread", "See priorities and exceptions", "Maintain context across crews"] },
  { value: "foreman", title: "Foreman", summary: "Crew and work-area execution.", Icon: HardHat, outcomes: ["Coordinate crew activity", "Track work-area status", "Keep active priorities clear"] },
  { value: "crew", title: "Crew / Labourer", summary: "Clear field priorities and task context.", Icon: Users, outcomes: ["See active task context", "Review required field information", "Stay connected to the work area"] },
  { value: "contractor", title: "Contractor", summary: "Relevant context for specialized work.", Icon: Wrench, outcomes: ["Coordinate specialized work", "Use relevant spread context", "Follow active project activity"] },
  { value: "inspector", title: "Inspector", summary: "Field records, inspection status and follow-up.", Icon: ClipboardCheck, outcomes: ["Review field activity", "Follow records and status", "Track items requiring follow-up"] },
];

export default function RoleTabs() {
  const reduceMotion = useReducedMotion();

  return (
    <Tabs.Root className="role-tabs" defaultValue="supervisor">
      <Tabs.List className="role-tab-list" aria-label="PipeHive operating environments">
        {roles.map(({ value, title, Icon }) => <Tabs.Trigger className="role-tab" key={value} value={value}><Icon size={17} aria-hidden="true" />{title}</Tabs.Trigger>)}
      </Tabs.List>
      {roles.map(({ value, title, summary, Icon, outcomes }) => (
        <Tabs.Content className="role-tab-panel" key={value} value={value}>
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.22, ease: "easeOut" }}>
            <Icon className="role-panel-icon" size={23} aria-hidden="true" />
            <span className="role-panel-label">Operating environment</span>
            <h3>{title}</h3>
            <p>{summary}</p>
            <ul>{outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
          </motion.div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
