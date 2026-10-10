import type { CSSProperties } from "react";
import contentBackground from "../assets/ContentSenimar.png";
import { EventSection } from "./EventSection";
import { PartnerSection } from "./PartnerSection";
import { TechnologySection } from "./TechnologySection";
import "./ExperienceContent.css";

export function ExperienceContent() {
  return (
    <div
      className="experience-content"
      style={{ "--experience-background": `url(${contentBackground})` } as CSSProperties}
    >
      <div className="experience-overview">
        <EventSection />
        <TechnologySection />
      </div>
      <PartnerSection />
    </div>
  );
}
