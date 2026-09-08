type ProjectCaseStudySectionProps = {
  index: number;
  title: string;
  content: string;
};

export function ProjectCaseStudySection({
  index,
  title,
  content,
}: ProjectCaseStudySectionProps) {
  return (
    <section data-reveal className="project-detail-section">
      <p className="project-detail-section-index">
        {String(index).padStart(2, "0")}
      </p>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
}
